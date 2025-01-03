import { ethers } from 'ethers';
import { Environment } from './Environment';

export interface MoonshotInitOptions {
  signer: ethers.Wallet;
  env: Environment;
  authToken?: string;
}
