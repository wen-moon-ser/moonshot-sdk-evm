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

### Buy example
```typescript
import { Wallet } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { Moonshot, Token, FixedSide, Environment } from '@wen-moon-ser/moonshot-sdk-evm';

export const buyTx = async (): Promise<void> => {
  console.log('--- Buying token example ---');

  const rpcUrl = 'https://base-sepolia.gateway.tenderly.co';

  const provider = new JsonRpcProvider(rpcUrl);
  const signer = new Wallet('private key', provider);

  const moonshot = new Moonshot({
      signer: signer,
      env: Environment.TESTNET,
  });

  const token = await Token.create({
    tokenAddress: '0x1234567890123456789012345678901234567890',
    moonshot,
  });

  const tokenAmount = 10000n * 10n ** 18n; // Buy 10k tokens
  const collateralAmount = await token.getCollateralAmountByTokens({
    tokenAmount,
    tradeDirection: 'BUY',
  });

  const tx = await token.prepareTx({
    slippageBps: 500,
    tokenAmount,
    collateralAmount,
    tradeDirection: 'BUY',
    fixedSide: FixedSide.OUT,
  });
  tx.from = await signer.getAddress();

  const gas = await provider.estimateGas(tx);
  const feeData = await provider.getFeeData();

  tx.gasLimit = gas;
  tx.gasPrice = feeData.gasPrice!;

  const txHash = await signer.sendTransaction(tx);
  console.log('Transaction hash:', txHash);
};
```

### Sell example
```typescript
import { Wallet } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { Moonshot, Token, FixedSide } from '@wen-moon-ser/moonshot-sdk-evm';

export const buyTx = async (): Promise<void> => {
  console.log('--- Buying token example ---');

  const rpcUrl = 'https://base-sepolia.gateway.tenderly.co'

  const provider = new JsonRpcProvider(rpcUrl);
  const signer = new Wallet('private key', provider);

  const moonshot = new Moonshot({
      signer: signer,
      env: Environment.TESTNET,
  });

  const token = await Token.create({
    tokenAddress: '0x1234567890123456789012345678901234567890',
    moonshot,
  });

  const tokenAmount = 10000n * 10n ** 18n; // Buy 10k tokens
  const collateralAmount = await token.getCollateralAmountByTokens({
    tokenAmount,
    tradeDirection: 'SELL',
  });

  const tx = await token.prepareTx({
    slippageBps: 500,
    tokenAmount,
    collateralAmount,
    tradeDirection: 'SELL',
    fixedSide: FixedSide.OUT,
  });

  tx.from = await signer.getAddress();

  const gas = await provider.estimateGas(tx);
  const feeData = await provider.getFeeData();

  tx.gasLimit = gas;
  tx.gasPrice = feeData.gasPrice!;

  const txHash = await signer.sendTransaction(tx);
  console.log('Transaction hash:', txHash);
};
```
