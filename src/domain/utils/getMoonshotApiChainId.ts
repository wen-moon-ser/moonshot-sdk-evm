import { Environment, Network } from '../moonshot';
import { MoonshotApiChainId } from '../../infra/moonshot-api/MoonshotApiChainId';

export const getMoonshotApiChainId = (
  env: Environment,
  network: Network = Network.BASE,
) => {
  if (network === Network.BASE) {
    if (env === Environment.MAINNET) {
      return MoonshotApiChainId.BASE_MAINNET;
    }

    return MoonshotApiChainId.BASE_TESTNET;
  }

  throw new Error('Unsupported network');
};
