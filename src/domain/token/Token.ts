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
import {
  BASE_MAINNET_ADDRESS,
  BASE_SEPOLIA_ADDRESS,
} from '../moonshot/Addresses';

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

    let tokenCurveAdapter: AbstractCurveAdapter;
    if (
      (await options.moonshot.getFactory().getAddress()) ==
      BASE_SEPOLIA_ADDRESS ||
      (await options.moonshot.getFactory().getAddress()) == BASE_MAINNET_ADDRESS
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
        tx = await this.factory
          .getFactory()
          .buyExactOut.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            options.collateralAmount,
            {
              value: options.collateralAmount,
            },
          );
      } else {
        tx = await this.factory
          .getFactory()
          .buyExactIn.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            {
              value: options.collateralAmount,
            },
          );
      }
    } else {
      if (options.fixedSide == FixedSide.IN) {
        tx = await this.factory
          .getFactory()
          .sellExactOut.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            options.collateralAmount,
          );
      } else {
        tx = await this.factory
          .getFactory()
          .sellExactIn.populateTransaction(
            this.tokenAddress,
            options.tokenAmount,
            options.collateralAmount,
          );
      }
    }

    return tx;
  }
}
