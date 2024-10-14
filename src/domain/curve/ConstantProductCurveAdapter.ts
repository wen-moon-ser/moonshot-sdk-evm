import {
  GetCollateralAmountOptions,
  GetCollateralAmountOptionsSync,
  GetTokenAmountOptions,
  GetTokenAmountOptionsSync,
} from '../token';
import { AbstractCurveAdapter } from './AbstractCurveAdapter';
import { ConstantProductCurveV1 } from '@heliofi/launchpad-common';

export class ConstantProductCurveV1Adapter extends AbstractCurveAdapter {
  private readonly platformFeeBps: number = 100;

  private readonly curve = new ConstantProductCurveV1();

  async getCollateralAmountByTokens(
    options: GetCollateralAmountOptions,
  ): Promise<bigint> {
    const curvePosition =
      options.curvePosition ?? (await this.getCurvePosition());

    return this.curve.getCollateralAmountFromTokens({
      amount: options.tokenAmount,
      curvePosition,
      platformFeeBps: this.platformFeeBps,
      tradeDirection: options.tradeDirection,
    });
  }

  async getTokenAmountByCollateral(
    options: GetTokenAmountOptions,
  ): Promise<bigint> {
    const curvePosition =
      options.curvePosition ?? (await this.getCurvePosition());

    return this.curve.getTokensAmountFromCollateral({
      amount: options.collateralAmount,
      curvePosition,
      platformFeeBps: this.platformFeeBps,
      tradeDirection: options.tradeDirection,
    });
  }

  getCollateralAmountByTokensSync(
    options: GetCollateralAmountOptionsSync,
  ): bigint {
    return this.curve.getCollateralAmountFromTokens({
      amount: options.tokenAmount,
      curvePosition: options.curvePosition,
      platformFeeBps: this.platformFeeBps,
      tradeDirection: options.tradeDirection,
    });
  }

  getTokenAmountByCollateralSync(options: GetTokenAmountOptionsSync): bigint {
    return this.curve.getTokensAmountFromCollateral({
      amount: options.collateralAmount,
      curvePosition: options.curvePosition,
      platformFeeBps: this.platformFeeBps,
      tradeDirection: options.tradeDirection,
    });
  }
}
