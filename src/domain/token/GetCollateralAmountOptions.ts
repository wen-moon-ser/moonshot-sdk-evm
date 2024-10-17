export interface GetCollateralAmountOptions {
  tokenAmount: bigint;
  tradeDirection: 'BUY' | 'SELL';
  curvePosition?: bigint;
}

export interface GetCollateralAmountOptionsSync {
  tokenAmount: bigint;
  tradeDirection: 'BUY' | 'SELL';
  curvePosition: bigint;
}
