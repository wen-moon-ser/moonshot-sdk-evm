import { MoonshotToken__factory, MoonshotFactory__factory } from '../../evm';
import { BigNumberish, ethers, Wallet } from 'ethers';
import { MoonshotFactory } from '../../evm';
import { FixedSide } from '../token';
import { AmountAndFee } from './AmountAndFee';

export class Moonshot {
  private factory: MoonshotFactory;

  private signerWithProvider: Wallet;

  constructor(signer: ethers.Wallet, factoryAddress: string) {
    this.signerWithProvider = signer;

    this.factory = MoonshotFactory__factory.connect(
      factoryAddress,
      this.signerWithProvider,
    );
  }

  async buyExactOut(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<ethers.ContractTransactionResponse> {
    return this.factory.buyExactOut(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async buyExactIn(
    tokenAddress: string,
    amountOutMin: BigNumberish,
  ): Promise<ethers.ContractTransactionResponse> {
    return this.factory.buyExactIn(tokenAddress, amountOutMin);
  }

  async sellExactOut(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<ethers.ContractTransactionResponse> {
    return this.factory.sellExactOut(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async sellExactIn(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    maxCollateralAmount: BigNumberish,
  ): Promise<ethers.ContractTransactionResponse> {
    return this.factory.sellExactIn(
      tokenAddress,
      tokenAmount,
      maxCollateralAmount,
    );
  }

  async getCurvePosition(tokenAddress: string): Promise<bigint> {
    const token = MoonshotToken__factory.connect(
      tokenAddress,
      this.signerWithProvider,
    );

    return token.balanceOf(tokenAddress);
  }

  async getAmountOutAndFee(
    tokenAddress: string,
    amountIn: bigint,
    paymentToken: FixedSide,
  ): Promise<AmountAndFee> {
    const token = MoonshotToken__factory.connect(
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

    return {
      amount: amountOut,
      fee,
    };
  }

  async getAmountInAndFee(
    tokenAddress: string,
    amountOut: bigint,
    paymentToken: FixedSide,
  ): Promise<AmountAndFee> {
    const token = MoonshotToken__factory.connect(
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

    return {
      amount: amountIn,
      fee,
    };
  }

  getFactory(): MoonshotFactory {
    return this.factory;
  }
}
