import { Environment, Network } from '../moonshot';
import { MoonshotApiChainId } from '../../infra/moonshot-api/MoonshotApiChainId';

export const getMoonshotApiChainId = (
  env: Environment,
  network: Network = Network.BASE,
): MoonshotApiChainId => {
  if (network === Network.BASE) {
    if (env === Environment.MAINNET) {
      return MoonshotApiChainId.BASE_MAINNET;
    }

    return MoonshotApiChainId.BASE_TESTNET;
  }

  if (network === Network.ABSTRACT) {
    if (env === Environment.MAINNET) {
      return MoonshotApiChainId.ABSTRACT_MAINNET;
    }

    return MoonshotApiChainId.ABSTRACT_TESTNET;
  }

  throw new Error('Unsupported network, currently supporting BASE.');
};
