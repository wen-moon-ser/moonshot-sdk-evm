import { Environment, FixedSide, Moonshot, Token } from '../../domain';
import { ethers, JsonRpcProvider, Wallet } from 'ethers';
import { MoonshotFactory__factory } from '../../evm';
import {
  applyNegativeSlippage,
  applyPositiveSlippage,
} from '../../domain/utils/bipsToPercentageConverter';

jest.setTimeout(60000);

describe('Token', () => {
  const tokenAddress = '0xfCF8882C8d284e653489F2FB1C3F4574E446ad2A'; // Token Address on testnet

  const testWallet = process.env.TEST_DEV_WALLET;
  let moonshot: Moonshot;
  let token: Token;

  const provider = new JsonRpcProvider(process.env.RPC_URL as string);
  const signer = new Wallet(testWallet as string, provider);

  beforeAll(async () => {
    moonshot = new Moonshot({
      signer,
      env: Environment.TESTNET,
    });

    token = await Token.create({
      moonshot,
      provider,
      tokenAddress,
    });
  });

  it('prepares BuyExactIn transaction properly', async () => {
    const collateralAmount = ethers.parseEther('0.0001');
    const slippageBps = 500;

    const tokenAmountForTransaction = await token.getTokenAmountByCollateral({
      collateralAmount,
      tradeDirection: 'BUY',
    });

    const tx = await token.prepareTx({
      slippageBps,
      tokenAmount: tokenAmountForTransaction,
      collateralAmount: collateralAmount,
      tradeDirection: 'BUY',
      fixedSide: FixedSide.IN,
    });

    const moonshotFactoryInterface = MoonshotFactory__factory.createInterface();

    const decodedData = moonshotFactoryInterface.decodeFunctionData(
      'buyExactIn', // Function name
      tx.data, // The data field from your transaction
    );

    expect(tx.value).toBe(collateralAmount);
    expect(decodedData[0]).toBe(tokenAddress);
    expect(decodedData[1]).toBe(
      applyNegativeSlippage(tokenAmountForTransaction, slippageBps),
    );
  });

  it('prepares buyExactOut transaction properly', async () => {
    const tokenAmount = ethers.parseUnits('100', 18);
    const slippageBps = 500;

    const collateralAmountForTransaction =
      await token.getCollateralAmountByTokens({
        tokenAmount,
        tradeDirection: 'BUY',
      });

    const tx = await token.prepareTx({
      slippageBps,
      tokenAmount,
      collateralAmount: collateralAmountForTransaction,
      tradeDirection: 'BUY',
      fixedSide: FixedSide.OUT,
    });

    const moonshotFactoryInterface = MoonshotFactory__factory.createInterface();

    const decodedData = moonshotFactoryInterface.decodeFunctionData(
      'buyExactOut', // Function name
      tx.data, // The data field from your transaction
    );

    const valueWithSlippage = applyPositiveSlippage(
      collateralAmountForTransaction,
      slippageBps,
    );

    expect(tx.value).toBe(valueWithSlippage);
    expect(decodedData[0]).toBe(tokenAddress);
    expect(decodedData[1]).toBe(tokenAmount);
    expect(decodedData[2]).toBe(valueWithSlippage);
  });

  it('prepares sellExactIn transaction properly', async () => {
    const tokenAmount = ethers.parseUnits('100', 18);
    const slippageBps = 500;

    const collateralAmountForTransaction =
      await token.getCollateralAmountByTokens({
        tokenAmount,
        tradeDirection: 'SELL',
      });

    const tx = await token.prepareTx({
      slippageBps,
      tokenAmount,
      collateralAmount: collateralAmountForTransaction,
      tradeDirection: 'SELL',
      fixedSide: FixedSide.IN,
    });

    const moonshotFactoryInterface = MoonshotFactory__factory.createInterface();

    const decodedData = moonshotFactoryInterface.decodeFunctionData(
      'sellExactIn',
      tx.data,
    );

    expect(tx.value).toBeUndefined();
    expect(decodedData[0]).toBe(tokenAddress);
    expect(decodedData[1]).toBe(tokenAmount);
    expect(decodedData[2]).toBe(
      applyNegativeSlippage(collateralAmountForTransaction, slippageBps),
    );
  });

  it('prepares sellExactOut transaction properly', async () => {
    const collateralAmount = ethers.parseEther('0.0001');
    const slippageBps = 500;

    const tokenAmountForTransaction = await token.getTokenAmountByCollateral({
      collateralAmount,
      tradeDirection: 'SELL',
    });

    const tx = await token.prepareTx({
      slippageBps,
      tokenAmount: tokenAmountForTransaction,
      collateralAmount: collateralAmount,
      tradeDirection: 'SELL',
      fixedSide: FixedSide.OUT,
    });

    const moonshotFactoryInterface = MoonshotFactory__factory.createInterface();

    const decodedData = moonshotFactoryInterface.decodeFunctionData(
      'sellExactOut',
      tx.data,
    );

    expect(tx.value).toBeUndefined();
    expect(decodedData[0]).toBe(tokenAddress);
    expect(decodedData[1]).toBe(
      applyPositiveSlippage(tokenAmountForTransaction, slippageBps),
    );
  });
});
