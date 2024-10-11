import {
  MoonShotFactory__factory,
  MoonShotFactory,
  MoonShotToken__factory,
} from '../../evm';
import { BigNumberish, ethers, Wallet } from 'ethers';
import { FixedSide } from '../token';

export class Moonshot {
  private factory: MoonShotFactory;

  private signerWithProvider: Wallet;

  constructor(signer: ethers.Wallet, factoryAddress: string) {
    this.signerWithProvider = signer;

    this.factory = MoonShotFactory__factory.connect(
      factoryAddress,
      this.signerWithProvider,
    );
  }

  async buyExactOut(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<void> {
    await this.factory.buyExactOut(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async buyExactIn(
    tokenAddress: string,
    amountOutMin: BigNumberish,
  ): Promise<void> {
    await this.factory.buyExactIn(tokenAddress, amountOutMin);
  }

  async sellExactOut(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<void> {
    await this.factory.sellExactOut(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async sellExactIn(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<void> {
    await this.factory.sellExactIn(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async getCurvePosition(tokenAddress: string): Promise<bigint> {
    const token = MoonShotToken__factory.connect(
      tokenAddress,
      this.signerWithProvider,
    );

    return token.balanceOf(tokenAddress);
  }

  async getAmountOutAndFee(
    tokenAddress: string,
    amountIn: bigint,
    paymentToken: FixedSide,
  ): Promise<[bigint, bigint]> {
    const token = MoonShotToken__factory.connect(
      tokenAddress,
      this.signerWithProvider,
    );

    let reserveIn: bigint;
    let reserveOut: bigint;

    if (paymentToken == FixedSide.IN) {
      reserveIn = await token.virtualCollateralReserves();
      reserveOut = await token.virtualTokenReserves();
    } else {
      reserveIn = await token.virtualTokenReserves();
      reserveOut = await token.virtualCollateralReserves();
    }

    const [amountOut, fee] = await token.getAmountOutAndFee(
      amountIn,
      reserveIn,
      reserveOut,
      paymentToken == FixedSide.IN,
    );

    return [amountOut, fee];
  }

  async getAmountInAndFee(
    tokenAddress: string,
    amountOut: bigint,
    paymentToken: FixedSide,
  ): Promise<[bigint, bigint]> {
    const token = MoonShotToken__factory.connect(
      tokenAddress,
      this.signerWithProvider,
    );

    let reserveIn: bigint;
    let reserveOut: bigint;

    if (paymentToken == FixedSide.OUT) {
      reserveIn = await token.virtualCollateralReserves();
      reserveOut = await token.virtualTokenReserves();
    } else {
      reserveIn = await token.virtualTokenReserves();
      reserveOut = await token.virtualCollateralReserves();
    }

    const [amountIn, fee] = await token.getAmountInAndFee(
      amountOut,
      reserveIn,
      reserveOut,
      paymentToken == FixedSide.OUT,
    );

    return [amountIn, fee];
  }

  getFactory(): MoonShotFactory {
    return this.factory;
  }
}
