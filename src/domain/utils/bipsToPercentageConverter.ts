import { BPS_PRECISION_BIGINT } from '../constants';

const calculateSlippageAmount = (amount: bigint, bips: number) => {
  return (amount * BigInt(bips)) / BPS_PRECISION_BIGINT;
};

export const applyNegativeSlippage = (amount: bigint, bips: number) => {
  return amount - calculateSlippageAmount(amount, bips);
};

export const applyPositiveSlippage = (amount: bigint, bips: number) => {
  return amount + calculateSlippageAmount(amount, bips);
};
