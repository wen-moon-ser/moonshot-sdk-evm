import {
  ABSTRACT_MAINNET_ADDRESS,
  ABSTRACT_TESTNET_ADDRESS,
  BASE_MAINNET_ADDRESS,
  BASE_SEPOLIA_ADDRESS,
  Environment,
  Network,
} from '../moonshot';

export const getMoonshotFactoryAddress = (
  env: Environment,
  network: Network = Network.BASE,
) => {
  if (network === Network.BASE) {
    if (env === Environment.MAINNET) {
      return BASE_MAINNET_ADDRESS;
    }

    return BASE_SEPOLIA_ADDRESS;
  }

  if (network === Network.ABSTRACT) {
    if (env === Environment.MAINNET) {
      return ABSTRACT_MAINNET_ADDRESS;
    }

    return ABSTRACT_TESTNET_ADDRESS;
  }

  throw new Error('Unsupported network, currently supporting BASE.');
};
