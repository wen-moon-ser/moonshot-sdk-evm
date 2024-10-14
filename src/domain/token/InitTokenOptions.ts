import { CurveType } from '@heliofi/launchpad-common';
import { ethers } from 'ethers';
import { MoonshotFactory } from '../../evm';

export interface InitTokenOptions {
  tokenAddress: string;
  factory: MoonshotFactory;
  signer: ethers.Wallet;
  curveType?: CurveType;
}
