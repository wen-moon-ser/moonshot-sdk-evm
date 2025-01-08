import { ContractTransaction } from 'ethers';
import { MoonshotToken, MoonshotToken__factory } from '../../evm';
import { CurveAccount } from '../curve/CurveAccount';
import {
  GetTokenAmountOptions,
  GetTokenAmountOptionsSync,
} from './GetTokenAmountOptions';
import {
  GetCollateralAmountOptions,
  GetCollateralAmountOptionsSync,
} from './GetCollateralAmountOptions';
import { PrepareTxOptions } from './PrepareTxOptions';
import { BaseConstantProductCurveV1Adapter } from '../curve/BaseConstantProductCurveAdapter';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
import { getCurveAccount } from '../../evm/utils/getCurveAccount';
import { InitTokenOptions } from './InitTokenOptions';
import { FixedSide } from './FixedSide';
import { Moonshot } from '../moonshot';
import { CurveType } from '../curve/CurveTypes';
import { BPS_PRECISION_BIGINT } from '../constants';

export class Token {
  private tokenAddress: string;

  private token: MoonshotToken;

  private factory: Moonshot;

  private tokenCurveAdapter: AbstractCurveAdapter;

  private constructor(
    token: MoonshotToken,
    factory: Moonshot,
    tokenCurveAdapter: AbstractCurveAdapter,
    tokenAddress: string,
  ) {
    this.token = token;
    this.factory = factory;
    this.tokenCurveAdapter = tokenCurveAdapter;
    this.tokenAddress = tokenAddress;
  }

  static async create(options: InitTokenOptions): Promise<Token> {
    const token = MoonshotToken__factory.connect(
      options.tokenAddress,
      options.provider,
    );
    const tokenCurveAdapterType = await token.curveType();

    let tokenCurveAdapter: AbstractCurveAdapter;
    if (
      tokenCurveAdapterType.toString() ==
      CurveType.ConstantProductCurveV1.toString()
    ) {
      tokenCurveAdapter = new BaseConstantProductCurveV1Adapter(token);
    } else {
      throw new Error('Unsupported curve type');
    }

    return new Token(
      token,
      options.moonshot,
      tokenCurveAdapter,
      await token.getAddress(),
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
        const tokenAmountWithSlippage =
          options.tokenAmount -
          (options.tokenAmount * BigInt(options.slippageBps)) /
            BPS_PRECISION_BIGINT;

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
        const collateralAmountWithSlippage =
          options.collateralAmount +
          (options.collateralAmount * BigInt(options.slippageBps)) /
            BPS_PRECISION_BIGINT;

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
        const collateralAmountWithSlippage =
          options.collateralAmount -
          (options.collateralAmount * BigInt(options.slippageBps)) /
            BPS_PRECISION_BIGINT;

        tx = await this.factory
          .getFactory()
          .sellExactIn.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            collateralAmountWithSlippage,
          );
      } else {
        const tokenAmountWithSlippage =
          options.tokenAmount +
          (options.tokenAmount * BigInt(options.slippageBps)) /
            BPS_PRECISION_BIGINT;

        tx = await this.factory
          .getFactory()
          .sellExactOut.populateTransaction(
            this.tokenAddress,
            tokenAmountWithSlippage,
            options.collateralAmount,
          );
      }
    }

    return tx;
  }
}
