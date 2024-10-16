import { CurveType } from '@heliofi/launchpad-common';
import { Moonshot } from '../moonshot';

export interface InitTokenOptions {
  tokenAddress: string;
  moonshot: Moonshot;
  curveType?: CurveType;
}
