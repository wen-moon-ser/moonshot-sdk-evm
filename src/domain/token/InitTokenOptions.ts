import { CurveType } from '@heliofi/launchpad-common';
import { ethers } from 'ethers';
import { Moonshot } from '../moonshotFactory';

export interface InitTokenOptions {
  tokenAddress: string;
  factory: Moonshot;
  signer: ethers.Wallet;
  curveType?: CurveType;
}
