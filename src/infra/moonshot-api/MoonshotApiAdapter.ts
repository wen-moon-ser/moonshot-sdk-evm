import { Environment } from '../../domain';
import { MintTokenPrepareV1Request } from './MintTokenPrepareV1Request';
import { MintTokenPrepareV1Response } from './MintTokenPrepareV1Response';
import { MoonshotApiChainId } from './MoonshotApiChainId';
import { MintTokenSubmitV1Request } from './MintTokenSubmitV1Request';
import { MintTokenSubmitV1Response } from './MintTokenSubmitV1Response';
import { ApiClient } from '../http';

export class MoonshotApiAdapter {
  private apiClient: ApiClient;

  private env: Environment;

  constructor(private environment: Environment) {
    const apiBasePath =
      environment === Environment.MAINNET
        ? 'https://api.moonshot.cc'
        : 'https://api-devnet.moonshot.cc';

    this.env = environment;
    this.apiClient = new ApiClient({ apiBasePath });
  }

  async prepareMint(
    prepareBuyDto: Omit<MintTokenPrepareV1Request, 'chainId'>,
  ): Promise<MintTokenPrepareV1Response> {
    const chainId =
      this.env === Environment.MAINNET
        ? MoonshotApiChainId.BASE_MAINNET
        : MoonshotApiChainId.BASE_TESTNET;

    return this.apiClient.publicRequest(`/tokens/v1`, {
      method: 'POST',
      data: {
        ...prepareBuyDto,
        chainId,
      },
    });
  }

  submitMint(
    draftTokenId: string,
    submitDto: MintTokenSubmitV1Request,
  ): Promise<MintTokenSubmitV1Response> {
    return this.apiClient.publicRequest(`/tokens/v1/${draftTokenId}/submit`, {
      method: 'POST',
      data: submitDto,
    });
  }
}
