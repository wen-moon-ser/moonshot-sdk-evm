import { CurveType } from '@heliofi/launchpad-common';
import { ethers } from 'ethers';

import { Moonshot } from '../moonshot';

export interface InitTokenOptions {
  tokenAddress: string;
  moonshot: Moonshot;
  curveType?: CurveType;
  provider?: ethers.JsonRpcProvider;
}
