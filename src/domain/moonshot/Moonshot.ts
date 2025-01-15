import { MoonshotToken__factory, MoonshotFactory__factory } from '../../evm';
import { BigNumberish, ethers, Wallet } from 'ethers';
import { MoonshotFactory } from '../../evm';
import { FixedSide } from '../token';
import { AmountAndFee } from './AmountAndFee';
import { MoonshotInitOptions } from './MoonshotInitOptions';
import { MintTokenPrepareV1Response } from '../../infra/moonshot-api/MintTokenPrepareV1Response';
import { PrepareMintTxOptions } from './PrepareMintTxOptions';
import { MoonshotApiAdapter } from '../../infra/moonshot-api';
import { SubmitMintTxOptions } from '../../infra/moonshot-api/SubmitMintTxOptions';
import { SubmitMintTxResponse } from '../../infra/moonshot-api/SubmitMintTxResponse';
import { getMoonshotFactoryAddress } from '../utils/getMoonshotFactoryAddress';

export class Moonshot {
  private factory: MoonshotFactory;

  private moonshotFactoryAddress: string;

  private signerWithProvider: Wallet;

  private apiAdapter: MoonshotApiAdapter;

  constructor(options: MoonshotInitOptions) {
    this.signerWithProvider = options.signer;

    const moonshotFactoryAddress = getMoonshotFactoryAddress(
      options.env,
      options.network,
    );

    this.moonshotFactoryAddress = moonshotFactoryAddress;

    this.factory = MoonshotFactory__factory.connect(
      moonshotFactoryAddress,
      this.signerWithProvider,
    );

    this.apiAdapter = new MoonshotApiAdapter(options.env, options.network);
  }

  async prepareMintTx(
    options: PrepareMintTxOptions,
  ): Promise<MintTokenPrepareV1Response> {
    return this.apiAdapter.prepareMint({
      ...options,
      creatorId: options.creator,
    });
  }

  async submitMintTx(
    options: SubmitMintTxOptions,
  ): Promise<SubmitMintTxResponse> {
    const res = await this.apiAdapter.submitMint(options.tokenId, options);
    return {
      txSignature: res.txnId,
      status: res.status,
    };
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

  getSignerWithProvider(): Wallet {
    return this.signerWithProvider;
  }

  getMoonshotFactoryAddress(): string {
    return this.moonshotFactoryAddress;
  }
}
