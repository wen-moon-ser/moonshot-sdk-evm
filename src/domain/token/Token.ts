import { ContractTransaction, ethers } from 'ethers';
import {
  MoonshotFactory,
  MoonshotToken,
  MoonshotToken__factory,
} from '../../evm';
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
import { ConstantProductCurveV1Adapter } from '../curve/ConstantProductCurveAdapter';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
import { getCurveAccount } from '../../evm/utils/getCurveAccount';
import { InitTokenOptions } from './InitTokenOptions';
import { FixedSide } from './FixedSide';
import { CurveType } from '../curve';

export class Token {
  private tokenAddress: string;

  private token: MoonshotToken;

  private factory: MoonshotFactory;

  private tokenCurveAdapter: AbstractCurveAdapter;

  constructor(
    token: MoonshotToken,
    factory: MoonshotFactory,
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
      options.signer,
    );
    const tokenCurveAdapterType = await token.curveType();

    let tokenCurveAdapter: AbstractCurveAdapter;
    if (
      tokenCurveAdapterType.toString() ==
      CurveType.ConstantProductCurveV1.toString()
    ) {
      tokenCurveAdapter = new ConstantProductCurveV1Adapter(token);
    } else {
      throw new Error('Unsupported curve type');
    }

    ethers.Wallet.createRandom();

    return new Token(
      token,
      options.factory,
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
        tx = await this.factory.buyExactOut.populateTransaction(
          this.tokenAddress,
          options.tokenAmount,
          options.collateralAmount,
          {
            value: options.collateralAmount,
          },
        );
      } else {
        tx = await this.factory.buyExactIn.populateTransaction(
          this.tokenAddress,
          options.tokenAmount,
          {
            value: options.collateralAmount,
          },
        );
      }
    } else {
      if (options.fixedSide == FixedSide.IN) {
        tx = await this.factory.sellExactOut.populateTransaction(
          this.tokenAddress,
          options.tokenAmount,
          options.collateralAmount,
        );
      } else {
        tx = await this.factory.sellExactIn.populateTransaction(
          this.tokenAddress,
          options.tokenAmount,
          options.collateralAmount,
        );
      }
    }

    return tx;
  }
}
