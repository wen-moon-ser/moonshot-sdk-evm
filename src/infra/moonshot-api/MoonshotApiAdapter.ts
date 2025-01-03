import { Environment } from '../../domain';
import { MintTokenPrepareV1Request } from './MintTokenPrepareV1Request';
import { MintTokenPrepareV1Response } from './MintTokenPrepareV1Response';
import { MoonshotApiChainId } from './MoonshotApiChainId';
import { Axios } from 'axios';
import { apiClient } from '../api-client/apiClient';

export class MoonshotApiAdapter {
  private apiClient: Axios;

  private env: Environment;

  constructor(private environment: Environment) {
    const apiBasePath =
      environment === Environment.MAINNET
        ? 'https://api.moonshot.cc'
        : 'https://api-devnet.moonshot.cc';

    this.env = environment;
    this.apiClient = apiClient(apiBasePath);
  }

  async prepareMint(
    prepareBuyDto: Omit<MintTokenPrepareV1Request, 'chainId'>,
  ): Promise<MintTokenPrepareV1Response> {
    try {
      const { data } = await this.apiClient.post<MintTokenPrepareV1Response>(
        `/tokens/v1`,
        {
          ...prepareBuyDto,
          chainId:
            this.env === Environment.MAINNET
              ? MoonshotApiChainId.BASE_MAINNET
              : MoonshotApiChainId.BASE_TESTNET,
        },
      );

      return data;
    } catch (err: any) {
      console.log(err.response?.data);
      throw new Error('error');
    }
  }
}
