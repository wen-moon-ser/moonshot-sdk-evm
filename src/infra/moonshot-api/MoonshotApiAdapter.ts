import { Environment, Network } from '../../domain';
import { MintTokenPrepareV1Request } from './MintTokenPrepareV1Request';
import { MintTokenPrepareV1Response } from './MintTokenPrepareV1Response';
import { MintTokenSubmitV1Request } from './MintTokenSubmitV1Request';
import { MintTokenSubmitV1Response } from './MintTokenSubmitV1Response';
import { ApiClient } from '../http';
import { getMoonshotApiChainId } from '../../domain/utils/getMoonshotApiChainId';
import { getMintTokenCurveType } from '../../domain/utils/getMintTokenCurveType';

export class MoonshotApiAdapter {
  private apiClient: ApiClient;

  private readonly env: Environment;

  private readonly network: Network;

  constructor(environment: Environment, network: Network = Network.BASE) {
    const apiBasePath =
      environment === Environment.MAINNET
        ? 'https://api.moonshot.cc'
        : 'https://api-devnet.moonshot.cc';

    this.env = environment;
    this.network = network;
    this.apiClient = new ApiClient({ apiBasePath });
  }

  async prepareMint(
    prepareBuyDto: Omit<MintTokenPrepareV1Request, 'chainId' | 'curveType'>,
  ): Promise<MintTokenPrepareV1Response> {
    const chainId = getMoonshotApiChainId(this.env, this.network);
    const curveType = getMintTokenCurveType(this.network);

    return this.apiClient.publicRequest(`/tokens/v1`, {
      method: 'POST',
      data: {
        ...prepareBuyDto,
        curveType,
        chainId,
      },
    });
  }

  submitMint(
    draftTokenId: string,
    submitDto: MintTokenSubmitV1Request,
  ): Promise<MintTokenSubmitV1Response> {
    return this.apiClient.authedRequest(
      `/tokens/v1/${draftTokenId}/submit`,
      'TMP_TOKEN',
      {
        method: 'POST',
        data: submitDto,
      },
    );
  }
}
