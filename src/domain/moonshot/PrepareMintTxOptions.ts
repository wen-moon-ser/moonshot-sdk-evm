import { MintTokenCurveType, MigrationDex } from '../../domain';

export interface PrepareMintTxOptions {
  /**
   * Public key of the creator wallet
   * the wallet must sign this transaction
   */
  creator: string;

  /**
   * Token name (immutable)
   * @maxLength 32
   */
  name: string;

  /**
   * Token symbol (immutable)
   * @maxLength 32
   */
  symbol: string;

  /**
   * Type of curve to use for token pricing
   * Currently only CONSTANT_PRODUCT_V1 is supported
   * LINEAR_V1 is a legacy curve
   */
  curveType: MintTokenCurveType;

  /**
   * DEX to use for token migration
   */
  migrationDex: MigrationDex;

  /**
   * Token icon encoded in base64 format
   * @maxLength 2097152 (2MB)
   */
  icon: string;

  /**
   * Token description
   * @maxLength 2000
   * @optional
   */
  description?: string;

  /**
   * Token amount that will be initially bought. Maximum 80% of total supply. In atomic units.
   * @example "1000000000"
   * @optional
   */
  tokenAmount?: string;

  /**
   * Optional array of links associated with the token
   * @optional
   */
  links?: { url: string; label: string }[];

  /**
   * Token banner encoded in base64 format
   * @maxLength 5242880 (5MB)
   * @optional
   */
  banner?: string;

  /**
   * Base58 wallet public key of affiliate
   */
  affiliate?: {
    wallet: string;
  };
}
