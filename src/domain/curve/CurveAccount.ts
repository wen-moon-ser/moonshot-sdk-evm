import { ContractCurveType } from '@heliofi/launchpad-common';
import { ContractCurrency } from './ContractCurrency';

export interface CurveAccount {
  totalSupply: bigint;
  curveAmount: bigint;
  mint: string;
  decimals: number;
  collateralCurrency: ContractCurrency;
  curveType: ContractCurveType;
  marketcapThreshold: bigint;
  marketcapCurrency: ContractCurrency;
  migrationFee: bigint;
}
