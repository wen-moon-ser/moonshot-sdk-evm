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

export declare namespace IMoonshotToken {
  export type ConstructorParamsStruct = {
    name: string;
    symbol: string;
    creator: AddressLike;
    totalSupply: BigNumberish;
    virtualTokenReserves: BigNumberish;
    virtualCollateralReserves: BigNumberish;
    feeBasisPoints: BigNumberish;
    dexFeeBasisPoints: BigNumberish;
    migrationFeeFixed: BigNumberish;
    poolCreationFee: BigNumberish;
    mcLowerLimit: BigNumberish;
    mcUpperLimit: BigNumberish;
    tokensMigrationThreshold: BigNumberish;
    treasury: AddressLike;
    uniV2Router: AddressLike;
    dexTreasury: AddressLike;
  };

  export type ConstructorParamsStructOutput = [
    name: string,
    symbol: string,
    creator: string,
    totalSupply: bigint,
    virtualTokenReserves: bigint,
    virtualCollateralReserves: bigint,
    feeBasisPoints: bigint,
    dexFeeBasisPoints: bigint,
    migrationFeeFixed: bigint,
    poolCreationFee: bigint,
    mcLowerLimit: bigint,
    mcUpperLimit: bigint,
    tokensMigrationThreshold: bigint,
    treasury: string,
    uniV2Router: string,
    dexTreasury: string
  ] & {
    name: string;
    symbol: string;
    creator: string;
    totalSupply: bigint;
    virtualTokenReserves: bigint;
    virtualCollateralReserves: bigint;
    feeBasisPoints: bigint;
    dexFeeBasisPoints: bigint;
    migrationFeeFixed: bigint;
    poolCreationFee: bigint;
    mcLowerLimit: bigint;
    mcUpperLimit: bigint;
    tokensMigrationThreshold: bigint;
    treasury: string;
    uniV2Router: string;
    dexTreasury: string;
  };
}

export interface MoonshotTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_BPS"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "burnFrom"
      | "buyExactIn"
      | "buyExactOut"
      | "creator"
      | "curveType"
      | "decimals"
      | "dexFeeBPS"
      | "dexTreasury"
      | "factory"
      | "feeBPS"
      | "fixedMigrationFee"
      | "getAmountInAndFee"
      | "getAmountOutAndFee"
      | "getCurveProgressBps"
      | "getMarketCap"
      | "initalTokenSupply"
      | "mcLowerLimit"
      | "mcUpperLimit"
      | "migrate"
      | "name"
      | "pair"
      | "poolCreationFee"
      | "sellExactIn"
      | "sellExactOut"
      | "sendingToPairNotAllowed"
      | "symbol"
      | "tokensMigrationThreshold"
      | "totalSupply"
      | "tradingStopped"
      | "transfer"
      | "transferFrom"
      | "treasury"
      | "uniswapV2Router"
      | "virtualCollateralReserves"
      | "virtualCollateralReservesInitial"
      | "virtualTokenReserves"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;

  encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyExactIn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyExactOut",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(functionFragment: "curveType", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "dexFeeBPS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dexTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeBPS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fixedMigrationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountInAndFee",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOutAndFee",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurveProgressBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketCap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initalTokenSupply",
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
  encodeFunctionData(functionFragment: "migrate", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "pair", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolCreationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellExactIn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellExactOut",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendingToPairNotAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokensMigrationThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tradingStopped",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Router",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualCollateralReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualCollateralReservesInitial",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "virtualTokenReserves",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyExactIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyExactOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "curveType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexFeeBPS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dexTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeBPS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedMigrationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountInAndFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOutAndFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurveProgressBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initalTokenSupply",
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
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolCreationFee",
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
  decodeFunctionResult(
    functionFragment: "sendingToPairNotAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensMigrationThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradingStopped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Router",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualCollateralReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualCollateralReservesInitial",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "virtualTokenReserves",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MoonshotToken extends BaseContract {
  connect(runner?: ContractRunner | null): MoonshotToken;
  waitForDeployment(): Promise<this>;

  interface: MoonshotTokenInterface;

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

  MAX_BPS: TypedContractMethod<[], [bigint], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;

  burnFrom: TypedContractMethod<
    [account: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyExactIn: TypedContractMethod<
    [_amountOutMin: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToPayWithFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;

  buyExactOut: TypedContractMethod<
    [_tokenAmount: BigNumberish, _maxCollateralAmount: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToPayWithFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;

  creator: TypedContractMethod<[], [string], "view">;

  curveType: TypedContractMethod<[], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  dexFeeBPS: TypedContractMethod<[], [bigint], "view">;

  dexTreasury: TypedContractMethod<[], [string], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  feeBPS: TypedContractMethod<[], [bigint], "view">;

  fixedMigrationFee: TypedContractMethod<[], [bigint], "view">;

  getAmountInAndFee: TypedContractMethod<
    [
      _amountOut: BigNumberish,
      _reserveIn: BigNumberish,
      _reserveOut: BigNumberish,
      _paymentTokenIsOut: boolean
    ],
    [[bigint, bigint] & { amountIn: bigint; fee: bigint }],
    "view"
  >;

  getAmountOutAndFee: TypedContractMethod<
    [
      _amountIn: BigNumberish,
      _reserveIn: BigNumberish,
      _reserveOut: BigNumberish,
      _paymentTokenIsIn: boolean
    ],
    [[bigint, bigint] & { amountOut: bigint; fee: bigint }],
    "view"
  >;

  getCurveProgressBps: TypedContractMethod<[], [bigint], "view">;

  getMarketCap: TypedContractMethod<[], [bigint], "view">;

  initalTokenSupply: TypedContractMethod<[], [bigint], "view">;

  mcLowerLimit: TypedContractMethod<[], [bigint], "view">;

  mcUpperLimit: TypedContractMethod<[], [bigint], "view">;

  migrate: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        tokensToMigrate: bigint;
        tokensToBurn: bigint;
        collateralAmount: bigint;
      }
    ],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  pair: TypedContractMethod<[], [string], "view">;

  poolCreationFee: TypedContractMethod<[], [bigint], "view">;

  sellExactIn: TypedContractMethod<
    [_tokenAmount: BigNumberish, _amountCollateralMin: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToReceiveMinusFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;

  sellExactOut: TypedContractMethod<
    [_tokenAmountMax: BigNumberish, _amountCollateral: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        collateralToReceiveMinusFee: bigint;
        tokensOut: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;

  sendingToPairNotAllowed: TypedContractMethod<[], [boolean], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  tokensMigrationThreshold: TypedContractMethod<[], [bigint], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  tradingStopped: TypedContractMethod<[], [boolean], "view">;

  transfer: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  uniswapV2Router: TypedContractMethod<[], [string], "view">;

  virtualCollateralReserves: TypedContractMethod<[], [bigint], "view">;

  virtualCollateralReservesInitial: TypedContractMethod<[], [bigint], "view">;

  virtualTokenReserves: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_BPS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "burnFrom"
  ): TypedContractMethod<
    [account: AddressLike, value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyExactIn"
  ): TypedContractMethod<
    [_amountOutMin: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToPayWithFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "buyExactOut"
  ): TypedContractMethod<
    [_tokenAmount: BigNumberish, _maxCollateralAmount: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToPayWithFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "creator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "curveType"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dexFeeBPS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dexTreasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeBPS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fixedMigrationFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAmountInAndFee"
  ): TypedContractMethod<
    [
      _amountOut: BigNumberish,
      _reserveIn: BigNumberish,
      _reserveOut: BigNumberish,
      _paymentTokenIsOut: boolean
    ],
    [[bigint, bigint] & { amountIn: bigint; fee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountOutAndFee"
  ): TypedContractMethod<
    [
      _amountIn: BigNumberish,
      _reserveIn: BigNumberish,
      _reserveOut: BigNumberish,
      _paymentTokenIsIn: boolean
    ],
    [[bigint, bigint] & { amountOut: bigint; fee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurveProgressBps"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMarketCap"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initalTokenSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mcLowerLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mcUpperLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "migrate"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        tokensToMigrate: bigint;
        tokensToBurn: bigint;
        collateralAmount: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pair"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolCreationFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sellExactIn"
  ): TypedContractMethod<
    [_tokenAmount: BigNumberish, _amountCollateralMin: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        collateralToReceiveMinusFee: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sellExactOut"
  ): TypedContractMethod<
    [_tokenAmountMax: BigNumberish, _amountCollateral: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        collateralToReceiveMinusFee: bigint;
        tokensOut: bigint;
        helioFee: bigint;
        dexFee: bigint;
      }
    ],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sendingToPairNotAllowed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokensMigrationThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tradingStopped"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uniswapV2Router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "virtualCollateralReserves"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "virtualCollateralReservesInitial"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "virtualTokenReserves"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
