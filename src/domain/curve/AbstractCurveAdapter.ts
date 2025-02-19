import { MoonshotToken } from '../../evm';
import {
  GetCollateralAmountOptions,
  GetCollateralAmountOptionsSync,
  GetTokenAmountOptions,
  GetTokenAmountOptionsSync,
} from '../token';
import { CurveAccount } from './CurveAccount';
import { getCurveAccount } from '../../evm/utils/getCurveAccount';
import { calculateCurvePosition } from '../../evm/utils/calculateCurvePosition';

export abstract class AbstractCurveAdapter {
  constructor(protected token: MoonshotToken) {}

  abstract getCollateralAmountByTokens(
    options: GetCollateralAmountOptions,
  ): Promise<bigint>;

  abstract getTokenAmountByCollateral(
    options: GetTokenAmountOptions,
  ): Promise<bigint>;

  async getCurveAccount(): Promise<CurveAccount> {
    return getCurveAccount(this.token);
  }

  async getCurvePosition(): Promise<bigint> {
    const curveState = await this.getCurveAccount();

    return calculateCurvePosition(
      curveState.totalSupply,
      curveState.curveAmount,
    );
  }

  abstract getCollateralAmountByTokensSync(
    options: GetCollateralAmountOptionsSync,
  ): bigint;

  abstract getTokenAmountByCollateralSync(
    options: GetTokenAmountOptionsSync,
  ): bigint;
}
