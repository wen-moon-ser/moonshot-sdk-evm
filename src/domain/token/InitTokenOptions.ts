import { CurveType } from '@heliofi/launchpad-common';
import { ethers } from 'ethers';

export interface InitTokenOptions {
  tokenAddress: string;
  factoryAddress: string;
  signer: ethers.Wallet;
  curveType?: CurveType;
}
