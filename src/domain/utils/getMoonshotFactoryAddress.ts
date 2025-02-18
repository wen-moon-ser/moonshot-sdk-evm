import {
  ABSTRACT_MAINNET_ADDRESS,
  ABSTRACT_TESTNET_ADDRESS,
  BASE_MAINNET_ADDRESS,
  BASE_SEPOLIA_ADDRESS,
  BERA_MAINNET_ADDRESS,
  BERA_TESTNET_ADDRESS,
  Environment,
  Network,
} from '../moonshot';

export const getMoonshotFactoryAddress = (
  env: Environment,
  network: Network = Network.BASE,
): string => {
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

  if (network === Network.BERA) {
    if (env === Environment.MAINNET) {
      return BERA_MAINNET_ADDRESS;
    }

    return BERA_TESTNET_ADDRESS;
  }

  throw new Error(
    'Unsupported network, currently supporting Base, Abstract and Bera.',
  );
};
