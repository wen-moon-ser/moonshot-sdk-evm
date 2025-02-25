# @wen-moon-ser/moonshot-sdk-evm

Moonshot SDK for EVM helps calculate moonshot token prices at any point in the bonding curve. The package also allows the users to generate buy and sell transactions, provide the slippage amount and fix it to a trading side.

By Following the example you can create your high-performance trading bot within minutes.

[npm link](https://www.npmjs.com/package/@wen-moon-ser/moonshot-sdk-evm)

## Installation

Install the package using `yarn` or `npm`

```shell
npm i @wen-moon-ser/moonshot-sdk-evm
# or
yarn add @wen-moon-ser/moonshot-sdk-evm
```

### Initialization

```typescript
import {Environment, Moonshot, Network} from "@wen-moon-ser/moonshot-sdk-evm";

const provider = new JsonRpcProvider(process.env.RPC_URL as string);
const signer = new Wallet('private_key', provider);

const moonshot = new Moonshot({
  signer,
  env: Environment.TESTNET,
  network: Network.BASE, // Currently supporting Base and Abstract (Network.ABSTRACT)
});
```

### Buy example
```typescript
import {ethers, JsonRpcProvider, Wallet} from "ethers";
import {Environment, FixedSide, Moonshot, Token} from "@wen-moon-ser/moonshot-sdk-evm";

const buyExactIn = async (tokenAddress: string) => {
  const provider = new JsonRpcProvider(process.env.RPC_URL as string);
  const signer = new Wallet('private_key', provider);

  const moonshot = new Moonshot({
    signer,
    env: Environment.TESTNET,
  });

  const token = await Token.create({
    moonshot,
    provider,
    tokenAddress,
  });

  const collateralAmount = ethers.parseEther('0.001');

  const tokenAmountForTransaction = await token.getTokenAmountByCollateral({
    collateralAmount,
    tradeDirection: 'BUY',
  });

  const slippageBps = 1000;

  const buyTx = await token.prepareTx({
    slippageBps,
    tokenAmount: tokenAmountForTransaction,
    collateralAmount: collateralAmount,
    tradeDirection: 'BUY',
    fixedSide: FixedSide.IN,
  });

  const walletAddress = await signer.getAddress();

  const feeData = await provider.getFeeData();

  const nonce = await provider.getTransactionCount(walletAddress, 'latest');

  const enrichedBuyTx = {
    ...buyTx,
    gasPrice: feeData.gasPrice,
    nonce: nonce,
    from: walletAddress,
  };

  const buyTxGasLimit = await provider.estimateGas(enrichedBuyTx);

  const buyTxResponse = await signer.sendTransaction({
    ...buyTx,
    gasLimit: buyTxGasLimit,
  });

  const buyTxReceipt = await buyTxResponse.wait();

  if(buyTxReceipt?.status === 1) {
    const balance = await token.balanceOf(walletAddress);

    console.log(balance);
  }
};
```

### Sell example
```typescript
import {JsonRpcProvider, Wallet} from "ethers";
import {Environment, FixedSide, Moonshot, Token} from "@wen-moon-ser/moonshot-sdk-evm";

const sellExactIn = async (tokenAddress: string) => {
  const provider = new JsonRpcProvider(process.env.RPC_URL as string);
  const signer = new Wallet('private_key', provider);

  const walletAddress = await signer.getAddress();

  const moonshot = new Moonshot({
    signer,
    env: Environment.TESTNET,
  });
  const token = await Token.create({
    moonshot,
    provider,
    tokenAddress,
  });

  const tokenAmount = await token.balanceOf(walletAddress);

  await token.approveForMoonshotSell(tokenAmount);

  const collateralAmountForTransaction =
    await token.getCollateralAmountByTokens({
      tokenAmount,
      tradeDirection: 'BUY',
    });

  const slippageBps = 1000;

  const sellTx = await token.prepareTx({
    slippageBps,
    tokenAmount,
    collateralAmount: collateralAmountForTransaction,
    tradeDirection: 'SELL',
    fixedSide: FixedSide.IN,
  });

  const feeData = await provider.getFeeData();

  const nonce = await provider.getTransactionCount(walletAddress, 'latest');

  const enrichedSellTx = {
    ...sellTx,
    gasPrice: feeData.gasPrice,
    nonce: nonce,
    from: walletAddress,
  };

  const sellTxGasLimit = await provider.estimateGas(enrichedSellTx);

  const sellTxResponse = await signer.sendTransaction({
    ...enrichedSellTx,
    gasLimit: sellTxGasLimit,
  });

  const sellTxReceipt = await sellTxResponse.wait();

  if(sellTxReceipt?.status === 1) {
    const balance = await token.balanceOf(walletAddress);

    console.log(balance);
  }
};

```

### Mint example
```typescript
import {Environment, MigrationDex, MintTokenCurveType, Moonshot} from "@wen-moon-ser/moonshot-sdk-evm";
import {JsonRpcProvider, Transaction, Wallet} from "ethers";

const mintTx = async () => {
  const provider = new JsonRpcProvider(process.env.RPC_URL as string);
  const signer = new Wallet('private_key', provider);

  const moonshot = new Moonshot({
    signer,
    env: Environment.TESTNET,
    network: Network.BASE, // Network.ABSTRACT for abstract, and Network.KODIAK for BERA
  });

  const mockImg = '...';

  const prepMint = await moonshot.prepareMintTx({
    name: 'TEST_TOKEN',
    symbol: 'TEST_TOKEN',
    migrationDex: MigrationDex.UNISWAP, // USE MigrationDex.ABSTRACTSWAP for abstract, and MigrationDex.KODIAK for BERA
    icon: mockImg,
    description: 'TEST_TOKEN',
    links: [{ url: 'https://x.com', label: 'x handle' }],
    banner: mockImg,
    creator: await signer.getAddress(),
    tokenAmount: '10000000000000',
  });

  const deserializedTransaction = Transaction.from(
    prepMint.transaction,
  ).toJSON();

  const walletAddress = await signer.getAddress();

  const feeData = await provider.getFeeData();

  const tx = {
    to: deserializedTransaction.to,
    data: deserializedTransaction.data,
    value: deserializedTransaction.value,
    chainId: deserializedTransaction.chainId,
    gasPrice: feeData.gasPrice,
    from: walletAddress,
    nonce: await provider.getTransactionCount(walletAddress, 'latest'),
  };

  const gasLimit = await provider.estimateGas(tx);

  const txResponse = await signer.sendTransaction({
    ...tx,
    gasLimit,
  });

  const receipt = await txResponse.wait();

  if (receipt?.status === 1) {
    const res = await moonshot.submitMintTx({
      token: prepMint.token,
      signedTransaction: JSON.stringify(txResponse),
      tokenId: prepMint.draftTokenId,
    });

    const createdTokenAddress = receipt?.logs[2].address;

    console.log(createdTokenAddress);
  }
}
```
