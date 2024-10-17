import { FixedSide } from './FixedSide';

export interface PrepareTxOptions {
  tokenAmount: bigint;
  collateralAmount: bigint;
  slippageBps: number;
  tradeDirection: 'BUY' | 'SELL';
  fixedSide?: FixedSide;
}
