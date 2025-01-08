import { Environment, FixedSide, Moonshot, Token } from '../../domain';
import { ethers, JsonRpcProvider, Wallet } from 'ethers';
import { MoonshotFactory__factory, MoonshotToken__factory } from '../../evm';

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

  test('get collateral price', async () => {
    const collateralAmount = ethers.parseEther('0.0001');

    const tokenAmountForTransaction = await token.getTokenAmountByCollateral({
      collateralAmount,
      tradeDirection: 'BUY',
    });

    const tx = await token.prepareTx({
      slippageBps: 500,
      tokenAmount: tokenAmountForTransaction,
      collateralAmount: collateralAmount,
      tradeDirection: 'BUY',
      fixedSide: FixedSide.IN,
    });

    console.log(tx);

    const moonshotFactoryInterface = MoonshotFactory__factory.createInterface();

    const decodedData = moonshotFactoryInterface.decodeFunctionData(
      'buyExactOut', // Function name
      tx.data, // The data field from your transaction
    );

    console.log(decodedData);
  });
});
