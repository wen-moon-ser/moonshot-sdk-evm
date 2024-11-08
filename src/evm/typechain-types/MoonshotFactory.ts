/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MoonshotFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UNISWAP_V2_ROUTER"
      | "buyExactIn"
      | "buyExactOut"
      | "createMoonshotToken"
      | "createMoonshotTokenAndBuy"
      | "dexFeeBasisPoints"
      | "dexTreasury"
      | "feeBasisPoints"
      | "mcLowerLimit"
      | "mcUpperLimit"
      | "migrate"
      | "migrationFeeFixed"
      | "moonshotTokens"
      | "owner"
      | "poolCreationFee"
      | "readyForMigration"
      | "renounceOwnership"
      | "sellExactIn"
      | "sellExactOut"
      | "setConfig"
      | "signer"
      | "tokensMigrationThreshold"
      | "totalSupply"
      | "transferOwnership"
      | "treasury"
      | "usedSignatures"
      | "virtualCollateralReserves"
      | "virtualTokenReserves"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BuyExactIn"
      | "BuyExactOut"
      | "MarketcapReached"
      | "Migrated"
      | "NewMoonshotToken"
      | "NewMoonshotTokenAndBuy"
      | "OwnershipTransferred"
      | "SellExactIn"
      | "SellExactOut"
      | "SetConfig"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UNISWAP_V2_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyExactIn",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyExactOut",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createMoonshotToken",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMoonshotTokenAndBuy",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dexFeeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dexTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mcLowerLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mcUpperLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migrationFeeFixed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moonshotTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolCreationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "readyForMigration",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellExactIn",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellExactOut",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensMigrationThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "usedSignatures",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "virtualCollateralReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualTokenReserves",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "UNISWAP_V2_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyExactIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyExactOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMoonshotToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMoonshotTokenAndBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dexFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dexTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mcLowerLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mcUpperLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrationFeeFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moonshotTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolCreationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readyForMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellExactIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellExactOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensMigrationThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usedSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualCollateralReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualTokenReserves",
    data: BytesLike
  ): Result;
}

export namespace BuyExactInEvent {
  export type InputTuple = [
    buyer: AddressLike,
    token: AddressLike,
    tokenAmount: BigNumberish,
    curvePositionAfterTrade: BigNumberish,
    collateralAmount: BigNumberish,
    fee: BigNumberish,
    dexFee: BigNumberish,
    curveProgressBps: BigNumberish
  ];
  export type OutputTuple = [
    buyer: string,
    token: string,
    tokenAmount: bigint,
    curvePositionAfterTrade: bigint,
    collateralAmount: bigint,
    fee: bigint,
    dexFee: bigint,
    curveProgressBps: bigint
  ];
  export interface OutputObject {
    buyer: string;
    token: string;
    tokenAmount: bigint;
    curvePositionAfterTrade: bigint;
    collateralAmount: bigint;
    fee: bigint;
    dexFee: bigint;
    curveProgressBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BuyExactOutEvent {
  export type InputTuple = [
    buyer: AddressLike,
    token: AddressLike,
    tokenAmount: BigNumberish,
    curvePositionAfterTrade: BigNumberish,
    collateralAmount: BigNumberish,
    refund: BigNumberish,
    fee: BigNumberish,
    dexFee: BigNumberish,
    curveProgressBps: BigNumberish
  ];
  export type OutputTuple = [
    buyer: string,
    token: string,
    tokenAmount: bigint,
    curvePositionAfterTrade: bigint,
    collateralAmount: bigint,
    refund: bigint,
    fee: bigint,
    dexFee: bigint,
    curveProgressBps: bigint
  ];
  export interface OutputObject {
    buyer: string;
    token: string;
    tokenAmount: bigint;
    curvePositionAfterTrade: bigint;
    collateralAmount: bigint;
    refund: bigint;
    fee: bigint;
    dexFee: bigint;
    curveProgressBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketcapReachedEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MigratedEvent {
  export type InputTuple = [
    token: AddressLike,
    tokensToMigrate: BigNumberish,
    tokensToBurn: BigNumberish,
    collateralToMigrate: BigNumberish,
    migrationFee: BigNumberish,
    pair: AddressLike
  ];
  export type OutputTuple = [
    token: string,
    tokensToMigrate: bigint,
    tokensToBurn: bigint,
    collateralToMigrate: bigint,
    migrationFee: bigint,
    pair: string
  ];
  export interface OutputObject {
    token: string;
    tokensToMigrate: bigint;
    tokensToBurn: bigint;
    collateralToMigrate: bigint;
    migrationFee: bigint;
    pair: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewMoonshotTokenEvent {
  export type InputTuple = [
    addr: AddressLike,
    creator: AddressLike,
    signature: BytesLike
  ];
  export type OutputTuple = [addr: string, creator: string, signature: string];
  export interface OutputObject {
    addr: string;
    creator: string;
    signature: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewMoonshotTokenAndBuyEvent {
  export type InputTuple = [
    addr: AddressLike,
    creator: AddressLike,
    signature: BytesLike,
    tokenAmount: BigNumberish,
    collateralAmount: BigNumberish,
    fee: BigNumberish,
    dexFee: BigNumberish,
    curveProgressBps: BigNumberish
  ];
  export type OutputTuple = [
    addr: string,
    creator: string,
    signature: string,
    tokenAmount: bigint,
    collateralAmount: bigint,
    fee: bigint,
    dexFee: bigint,
    curveProgressBps: bigint
  ];
  export interface OutputObject {
    addr: string;
    creator: string;
    signature: string;
    tokenAmount: bigint;
    collateralAmount: bigint;
    fee: bigint;
    dexFee: bigint;
    curveProgressBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SellExactInEvent {
  export type InputTuple = [
    seller: AddressLike,
    token: AddressLike,
    tokenAmount: BigNumberish,
    curvePositionAfterTrade: BigNumberish,
    collateralAmount: BigNumberish,
    fee: BigNumberish,
    dexFee: BigNumberish,
    curveProgressBps: BigNumberish
  ];
  export type OutputTuple = [
    seller: string,
    token: string,
    tokenAmount: bigint,
    curvePositionAfterTrade: bigint,
    collateralAmount: bigint,
    fee: bigint,
    dexFee: bigint,
    curveProgressBps: bigint
  ];
  export interface OutputObject {
    seller: string;
    token: string;
    tokenAmount: bigint;
    curvePositionAfterTrade: bigint;
    collateralAmount: bigint;
    fee: bigint;
    dexFee: bigint;
    curveProgressBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SellExactOutEvent {
  export type InputTuple = [
    seller: AddressLike,
    token: AddressLike,
    tokenAmount: BigNumberish,
    curvePositionAfterTrade: BigNumberish,
    collateralAmount: BigNumberish,
    fee: BigNumberish,
    dexFee: BigNumberish,
    curveProgressBps: BigNumberish
  ];
  export type OutputTuple = [
    seller: string,
    token: string,
    tokenAmount: bigint,
    curvePositionAfterTrade: bigint,
    collateralAmount: bigint,
    fee: bigint,
    dexFee: bigint,
    curveProgressBps: bigint
  ];
  export interface OutputObject {
    seller: string;
    token: string;
    tokenAmount: bigint;
    curvePositionAfterTrade: bigint;
    collateralAmount: bigint;
    fee: bigint;
    dexFee: bigint;
    curveProgressBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetConfigEvent {
  export type InputTuple = [
    totalSupply: BigNumberish,
    virtualTokenReserves: BigNumberish,
    virtualCollateralReserves: BigNumberish,
    feeBasisPoints: BigNumberish,
    dexFeeBasisPoints: BigNumberish,
    migrationFeeFixed: BigNumberish,
    poolCreationFee: BigNumberish,
    mcUpperLimit: BigNumberish,
    mcLowerLimit: BigNumberish,
    tokensMigrationThreshold: BigNumberish,
    treasury: AddressLike,
    dexTreasury: AddressLike,
    signer: AddressLike
  ];
  export type OutputTuple = [
    totalSupply: bigint,
    virtualTokenReserves: bigint,
    virtualCollateralReserves: bigint,
    feeBasisPoints: bigint,
    dexFeeBasisPoints: bigint,
    migrationFeeFixed: bigint,
    poolCreationFee: bigint,
    mcUpperLimit: bigint,
    mcLowerLimit: bigint,
    tokensMigrationThreshold: bigint,
    treasury: string,
    dexTreasury: string,
    signer: string
  ];
  export interface OutputObject {
    totalSupply: bigint;
    virtualTokenReserves: bigint;
    virtualCollateralReserves: bigint;
    feeBasisPoints: bigint;
    dexFeeBasisPoints: bigint;
    migrationFeeFixed: bigint;
    poolCreationFee: bigint;
    mcUpperLimit: bigint;
    mcLowerLimit: bigint;
    tokensMigrationThreshold: bigint;
    treasury: string;
    dexTreasury: string;
    signer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MoonshotFactory extends BaseContract {
  connect(runner?: ContractRunner | null): MoonshotFactory;
  waitForDeployment(): Promise<this>;

  interface: MoonshotFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UNISWAP_V2_ROUTER: TypedContractMethod<[], [string], "view">;

  buyExactIn: TypedContractMethod<
    [_token: AddressLike, _amountOutMin: BigNumberish],
    [void],
    "payable"
  >;

  buyExactOut: TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmount: BigNumberish,
      _maxCollateralAmount: BigNumberish
    ],
    [void],
    "payable"
  >;

  createMoonshotToken: TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _nonce: BigNumberish,
      _signature: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  createMoonshotTokenAndBuy: TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _nonce: BigNumberish,
      _tokenAmountMin: BigNumberish,
      _signature: BytesLike
    ],
    [string],
    "payable"
  >;

  dexFeeBasisPoints: TypedContractMethod<[], [bigint], "view">;

  dexTreasury: TypedContractMethod<[], [string], "view">;

  feeBasisPoints: TypedContractMethod<[], [bigint], "view">;

  mcLowerLimit: TypedContractMethod<[], [bigint], "view">;

  mcUpperLimit: TypedContractMethod<[], [bigint], "view">;

  migrate: TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  migrationFeeFixed: TypedContractMethod<[], [bigint], "view">;

  moonshotTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  poolCreationFee: TypedContractMethod<[], [bigint], "view">;

  readyForMigration: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sellExactIn: TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmount: BigNumberish,
      _amountCollateralMin: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  sellExactOut: TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmountMax: BigNumberish,
      _amountCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setConfig: TypedContractMethod<
    [
      _totalSupply: BigNumberish,
      _virtualTokenReserves: BigNumberish,
      _virtualCollateralReserves: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _dexFeeBasisPoints: BigNumberish,
      _migrationFeeFixed: BigNumberish,
      _poolCreationFee: BigNumberish,
      _mcUpperLimit: BigNumberish,
      _mcLowerLimit: BigNumberish,
      _tokensMigrationThreshold: BigNumberish,
      _treasury: AddressLike,
      _dexTreasury: AddressLike,
      _signer: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  tokensMigrationThreshold: TypedContractMethod<[], [bigint], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  usedSignatures: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  virtualCollateralReserves: TypedContractMethod<[], [bigint], "view">;

  virtualTokenReserves: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UNISWAP_V2_ROUTER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyExactIn"
  ): TypedContractMethod<
    [_token: AddressLike, _amountOutMin: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "buyExactOut"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmount: BigNumberish,
      _maxCollateralAmount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createMoonshotToken"
  ): TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _nonce: BigNumberish,
      _signature: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMoonshotTokenAndBuy"
  ): TypedContractMethod<
    [
      _name: string,
      _symbol: string,
      _nonce: BigNumberish,
      _tokenAmountMin: BigNumberish,
      _signature: BytesLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "dexFeeBasisPoints"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dexTreasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeBasisPoints"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mcLowerLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mcUpperLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "migrate"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "migrationFeeFixed"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "moonshotTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolCreationFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "readyForMigration"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sellExactIn"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmount: BigNumberish,
      _amountCollateralMin: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sellExactOut"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _tokenAmountMax: BigNumberish,
      _amountCollateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConfig"
  ): TypedContractMethod<
    [
      _totalSupply: BigNumberish,
      _virtualTokenReserves: BigNumberish,
      _virtualCollateralReserves: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _dexFeeBasisPoints: BigNumberish,
      _migrationFeeFixed: BigNumberish,
      _poolCreationFee: BigNumberish,
      _mcUpperLimit: BigNumberish,
      _mcLowerLimit: BigNumberish,
      _tokensMigrationThreshold: BigNumberish,
      _treasury: AddressLike,
      _dexTreasury: AddressLike,
      _signer: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokensMigrationThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "usedSignatures"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "virtualCollateralReserves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "virtualTokenReserves"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "BuyExactIn"
  ): TypedContractEvent<
    BuyExactInEvent.InputTuple,
    BuyExactInEvent.OutputTuple,
    BuyExactInEvent.OutputObject
  >;
  getEvent(
    key: "BuyExactOut"
  ): TypedContractEvent<
    BuyExactOutEvent.InputTuple,
    BuyExactOutEvent.OutputTuple,
    BuyExactOutEvent.OutputObject
  >;
  getEvent(
    key: "MarketcapReached"
  ): TypedContractEvent<
    MarketcapReachedEvent.InputTuple,
    MarketcapReachedEvent.OutputTuple,
    MarketcapReachedEvent.OutputObject
  >;
  getEvent(
    key: "Migrated"
  ): TypedContractEvent<
    MigratedEvent.InputTuple,
    MigratedEvent.OutputTuple,
    MigratedEvent.OutputObject
  >;
  getEvent(
    key: "NewMoonshotToken"
  ): TypedContractEvent<
    NewMoonshotTokenEvent.InputTuple,
    NewMoonshotTokenEvent.OutputTuple,
    NewMoonshotTokenEvent.OutputObject
  >;
  getEvent(
    key: "NewMoonshotTokenAndBuy"
  ): TypedContractEvent<
    NewMoonshotTokenAndBuyEvent.InputTuple,
    NewMoonshotTokenAndBuyEvent.OutputTuple,
    NewMoonshotTokenAndBuyEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SellExactIn"
  ): TypedContractEvent<
    SellExactInEvent.InputTuple,
    SellExactInEvent.OutputTuple,
    SellExactInEvent.OutputObject
  >;
  getEvent(
    key: "SellExactOut"
  ): TypedContractEvent<
    SellExactOutEvent.InputTuple,
    SellExactOutEvent.OutputTuple,
    SellExactOutEvent.OutputObject
  >;
  getEvent(
    key: "SetConfig"
  ): TypedContractEvent<
    SetConfigEvent.InputTuple,
    SetConfigEvent.OutputTuple,
    SetConfigEvent.OutputObject
  >;

  filters: {
    "BuyExactIn(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      BuyExactInEvent.InputTuple,
      BuyExactInEvent.OutputTuple,
      BuyExactInEvent.OutputObject
    >;
    BuyExactIn: TypedContractEvent<
      BuyExactInEvent.InputTuple,
      BuyExactInEvent.OutputTuple,
      BuyExactInEvent.OutputObject
    >;

    "BuyExactOut(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      BuyExactOutEvent.InputTuple,
      BuyExactOutEvent.OutputTuple,
      BuyExactOutEvent.OutputObject
    >;
    BuyExactOut: TypedContractEvent<
      BuyExactOutEvent.InputTuple,
      BuyExactOutEvent.OutputTuple,
      BuyExactOutEvent.OutputObject
    >;

    "MarketcapReached(address)": TypedContractEvent<
      MarketcapReachedEvent.InputTuple,
      MarketcapReachedEvent.OutputTuple,
      MarketcapReachedEvent.OutputObject
    >;
    MarketcapReached: TypedContractEvent<
      MarketcapReachedEvent.InputTuple,
      MarketcapReachedEvent.OutputTuple,
      MarketcapReachedEvent.OutputObject
    >;

    "Migrated(address,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      MigratedEvent.InputTuple,
      MigratedEvent.OutputTuple,
      MigratedEvent.OutputObject
    >;
    Migrated: TypedContractEvent<
      MigratedEvent.InputTuple,
      MigratedEvent.OutputTuple,
      MigratedEvent.OutputObject
    >;

    "NewMoonshotToken(address,address,bytes)": TypedContractEvent<
      NewMoonshotTokenEvent.InputTuple,
      NewMoonshotTokenEvent.OutputTuple,
      NewMoonshotTokenEvent.OutputObject
    >;
    NewMoonshotToken: TypedContractEvent<
      NewMoonshotTokenEvent.InputTuple,
      NewMoonshotTokenEvent.OutputTuple,
      NewMoonshotTokenEvent.OutputObject
    >;

    "NewMoonshotTokenAndBuy(address,address,bytes,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      NewMoonshotTokenAndBuyEvent.InputTuple,
      NewMoonshotTokenAndBuyEvent.OutputTuple,
      NewMoonshotTokenAndBuyEvent.OutputObject
    >;
    NewMoonshotTokenAndBuy: TypedContractEvent<
      NewMoonshotTokenAndBuyEvent.InputTuple,
      NewMoonshotTokenAndBuyEvent.OutputTuple,
      NewMoonshotTokenAndBuyEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SellExactIn(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      SellExactInEvent.InputTuple,
      SellExactInEvent.OutputTuple,
      SellExactInEvent.OutputObject
    >;
    SellExactIn: TypedContractEvent<
      SellExactInEvent.InputTuple,
      SellExactInEvent.OutputTuple,
      SellExactInEvent.OutputObject
    >;

    "SellExactOut(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      SellExactOutEvent.InputTuple,
      SellExactOutEvent.OutputTuple,
      SellExactOutEvent.OutputObject
    >;
    SellExactOut: TypedContractEvent<
      SellExactOutEvent.InputTuple,
      SellExactOutEvent.OutputTuple,
      SellExactOutEvent.OutputObject
    >;

    "SetConfig(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address)": TypedContractEvent<
      SetConfigEvent.InputTuple,
      SetConfigEvent.OutputTuple,
      SetConfigEvent.OutputObject
    >;
    SetConfig: TypedContractEvent<
      SetConfigEvent.InputTuple,
      SetConfigEvent.OutputTuple,
      SetConfigEvent.OutputObject
    >;
  };
}
