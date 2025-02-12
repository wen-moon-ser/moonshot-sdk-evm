import { ContractTransaction, ContractTransactionResponse } from 'ethers';
import {
  getCurveAccount,
  MoonshotToken,
  MoonshotToken__factory,
} from '../../evm';
import {
  AbstractCurveAdapter,
  BaseConstantProductCurveV1Adapter,
  CurveAccount,
  CurveType,
} from '../curve';
import {
  GetTokenAmountOptions,
  GetTokenAmountOptionsSync,
} from './GetTokenAmountOptions';
import {
  GetCollateralAmountOptions,
  GetCollateralAmountOptionsSync,
} from './GetCollateralAmountOptions';
import { PrepareTxOptions } from './PrepareTxOptions';
import { InitTokenOptions } from './InitTokenOptions';
import { FixedSide } from './FixedSide';
import { Moonshot, Network } from '../moonshot';

import {
  applyNegativeSlippage,
  applyPositiveSlippage,
} from '../utils/bipsToPercentageConverter';
import { BeraConstantProductCurveV1 } from '@heliofi/launchpad-common';
import { BeraConstantProductCurveV1Adapter } from '../curve/BeraConstantProductCurveAdapter';

export class Token {
  private tokenAddress: string;

  private token: MoonshotToken;

  private factory: Moonshot;

  private factoryAddress: string;

  private tokenCurveAdapter: AbstractCurveAdapter;

  private constructor(
    token: MoonshotToken,
    factory: Moonshot,
    tokenCurveAdapter: AbstractCurveAdapter,
    tokenAddress: string,
    factoryAddress: string,
  ) {
    this.token = token;
    this.factory = factory;
    this.tokenCurveAdapter = tokenCurveAdapter;
    this.tokenAddress = tokenAddress;
    this.factoryAddress = factoryAddress;
  }

  static async create(options: InitTokenOptions): Promise<Token> {
    const getSignerWithProvider = options.moonshot.getSignerWithProvider();

    const token = MoonshotToken__factory.connect(
      options.tokenAddress,
      getSignerWithProvider,
    );
    const tokenCurveAdapterType = await token.curveType();

    let tokenCurveAdapter: AbstractCurveAdapter;
    if (
      tokenCurveAdapterType.toString() ==
      CurveType.ConstantProductCurveV1.toString()
    ) {
      const network = options.moonshot.getNetwork();
      if (network === Network.BERA) {
        tokenCurveAdapter = new BeraConstantProductCurveV1Adapter(token);
      } else {
        tokenCurveAdapter = new BaseConstantProductCurveV1Adapter(token);
      }
    } else {
      throw new Error('Unsupported curve type');
    }

    const factoryAddress = await token.factory();

    if (factoryAddress !== (await options.moonshot.getFactory().getAddress())) {
      console.warn(
        'Token created by old Moonshot Factory, that is no longer supported.',
      );
    }

    return new Token(
      token,
      options.moonshot,
      tokenCurveAdapter,
      await token.getAddress(),
      factoryAddress,
    );
  }

  curveAdapter(): AbstractCurveAdapter {
    return this.tokenCurveAdapter;
  }

  async getCurveAccount(): Promise<CurveAccount> {
    return getCurveAccount(this.token);
  }

  async getCurvePosition(): Promise<bigint> {
    const curveAccount = await this.getCurveAccount();
    return curveAccount.totalSupply - curveAccount.curveAmount;
  }

  async getCollateralAmountByTokens(
    options: GetCollateralAmountOptions,
  ): Promise<bigint> {
    return this.tokenCurveAdapter.getCollateralAmountByTokens(options);
  }

  async getTokenAmountByCollateral(
    options: GetTokenAmountOptions,
  ): Promise<bigint> {
    return this.tokenCurveAdapter.getTokenAmountByCollateral(options);
  }

  getCollateralAmountByTokensSync(
    options: GetCollateralAmountOptionsSync,
  ): bigint {
    return this.tokenCurveAdapter.getCollateralAmountByTokensSync(options);
  }

  getTokenAmountByCollateralSync(options: GetTokenAmountOptionsSync): bigint {
    return this.tokenCurveAdapter.getTokenAmountByCollateralSync(options);
  }

  async prepareTx(options: PrepareTxOptions): Promise<ContractTransaction> {
    let tx: ContractTransaction;

    if (options.tradeDirection == 'BUY') {
      if (options.fixedSide == FixedSide.IN) {
        const tokenAmountWithSlippage = applyNegativeSlippage(
          options.tokenAmount,
          options.slippageBps,
        );

        tx = await this.factory
          .getFactory()
          .buyExactIn.populateTransaction(
            this.tokenAddress,
            tokenAmountWithSlippage,
            {
              value: options.collateralAmount,
            },
          );
      } else {
        const collateralAmountWithSlippage = applyPositiveSlippage(
          options.collateralAmount,
          options.slippageBps,
        );

        tx = await this.factory
          .getFactory()
          .buyExactOut.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            collateralAmountWithSlippage,
            {
              value: collateralAmountWithSlippage,
            },
          );
      }
    } else {
      // SELL
      if (options.fixedSide == FixedSide.IN) {
        const collateralAmountWithSlippage = applyNegativeSlippage(
          options.collateralAmount,
          options.slippageBps,
        );

        tx = await this.factory
          .getFactory()
          .sellExactIn.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            collateralAmountWithSlippage,
          );
      } else {
        const tokenAmountWithSlippage = applyPositiveSlippage(
          options.tokenAmount,
          options.slippageBps,
        );

        tx = await this.factory
          .getFactory()
          .sellExactOut.populateTransaction(
            this.tokenAddress,
            tokenAmountWithSlippage,
            options.collateralAmount,
          );
      }
    }

    return {
      ...tx,
      to: this.factoryAddress,
    };
  }

  async balanceOf(address: string): Promise<bigint> {
    return this.token.balanceOf(address);
  }

  async approveForMoonshotSell(
    amount: bigint,
  ): Promise<ContractTransactionResponse> {
    return this.token.approve(this.factoryAddress, amount);
  }
}
