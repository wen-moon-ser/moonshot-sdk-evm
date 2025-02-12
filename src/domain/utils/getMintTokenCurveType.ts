import { MintTokenCurveType, Network } from '../moonshot';

export const getMintTokenCurveType = (
  network: Network = Network.BASE,
): MintTokenCurveType => {
  if (network === Network.BASE) {
    return MintTokenCurveType.BASE_CONSTANT_PRODUCT_V1;
  }

  if (network === Network.ABSTRACT) {
    return MintTokenCurveType.ABSTRACT_CONSTANT_PRODUCT_v1;
  }

  if (network === Network.BERA) {
    return MintTokenCurveType.BERA_CONSTANT_PRODUCT_V1;
  }

  throw new Error(
    'Unsupported network, currently supporting Base, Abstract and Bera.',
  );
};
