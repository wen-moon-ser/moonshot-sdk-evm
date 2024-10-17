export interface GetTokenAmountOptions {
  collateralAmount: bigint;
  tradeDirection: 'BUY' | 'SELL';
  curvePosition?: bigint;
}

export interface GetTokenAmountOptionsSync {
  collateralAmount: bigint;
  tradeDirection: 'BUY' | 'SELL';
  curvePosition: bigint;
}
