import { CurveAccount } from '../../domain';
import { MoonshotToken } from '../typechain-types';
import { ContractCurveType } from '@heliofi/launchpad-common';
import { ContractCurrency } from '../../domain/curve/ContractCurrency';

export async function getCurveAccount(
  token: MoonshotToken,
): Promise<CurveAccount> {
  const totalSupply = await token.totalSupply();
  const curveAmount = await token.balanceOf(await token.getAddress());
  const mint = await token.getAddress();
  const decimals = await token.decimals();
  const marketcapThreshold = await token.mcLowerLimit();
  const marketcapCurrency = ContractCurrency.ETH;
  const collateralCurrency = ContractCurrency.ETH;
  const curveType = ContractCurveType.CONSTANT_PRODUCT_V1;
  const migrationFee = await token.fixedMigrationFee();

  return {
    totalSupply: totalSupply,
    curveAmount: curveAmount,
    mint: mint,
    decimals: Number(decimals),
    collateralCurrency: collateralCurrency,
    curveType: curveType,
    marketcapThreshold: marketcapThreshold,
    marketcapCurrency: marketcapCurrency,
    migrationFee: migrationFee,
  };
}
