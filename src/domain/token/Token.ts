import { ContractTransaction } from 'ethers';
import { Moonshot } from '../moonshotFactory';
import { MoonShotToken, MoonShotToken__factory } from '../../evm';
import { CurveAccount } from '../curve/CurveAccount';
import { GetTokenAmountOptions } from './GetTokenAmountOptions';
import { GetCollateralAmountOptions } from './GetCollateralAmountOptions';
import { PrepareTxOptions } from './PrepareTxOptions';
import { ConstantProductCurveV1Adapter } from '../curve/ConstantProductCurveAdapter';
import { AbstractCurveAdapter } from '../curve/AbstractCurveAdapter';
import { getCurveAccount } from '../../evm/utils/getCurveAccount';
import { InitTokenOptions } from './InitTokenOptions';

export class Token extends Moonshot {
  private token: MoonShotToken;

  private tokenCurveAdapter: AbstractCurveAdapter;

  constructor(options: InitTokenOptions) {
    super(options.signer, options.factoryAddress);

    this.token = MoonShotToken__factory.connect(
      options.tokenAddress,
      options.signer,
    );
    this.tokenCurveAdapter = new ConstantProductCurveV1Adapter(this.token);
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

  async prepareTx(options: PrepareTxOptions): Promise<ContractTransaction> {
    let tx: ContractTransaction;

    if (options.tradeDirection == 'BUY') {
      tx = await this.getFactory().buyExactOut.populateTransaction(
        await this.token.getAddress(),
        options.tokenAmount,
        options.collateralAmount,
        {
          value: options.collateralAmount,
        },
      );
    } else {
      tx = await this.getFactory().sellExactIn.populateTransaction(
        await this.token.getAddress(),
        options.tokenAmount,
        options.collateralAmount,
      );
    }

    return tx;
  }
}
