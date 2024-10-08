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
} from "../../common";

export interface IMoonShotTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "allowance"
      | "approve"
      | "balanceOf"
      | "buyExactIn"
      | "buyExactOut"
      | "getAmountInAndFee"
      | "getAmountOutAndFee"
      | "migrate"
      | "sellExactIn"
      | "sellExactOut"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;

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
  encodeFunctionData(
    functionFragment: "buyExactIn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyExactOut",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountInAndFee",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOutAndFee",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "migrate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellExactIn",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellExactOut",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
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

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyExactIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyExactOut",
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
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellExactIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellExactOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
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

export interface IMoonShotToken extends BaseContract {
  connect(runner?: ContractRunner | null): IMoonShotToken;
  waitForDeployment(): Promise<this>;

  interface: IMoonShotTokenInterface;

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

  migrate: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        tokensToMigrate: bigint;
        tokensToBurn: bigint;
        ethAmount: bigint;
      }
    ],
    "nonpayable"
  >;

  sellExactIn: TypedContractMethod<
    [_tokenAmount: BigNumberish, _amountOutMin: BigNumberish],
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

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "migrate"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        tokensToMigrate: bigint;
        tokensToBurn: bigint;
        ethAmount: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sellExactIn"
  ): TypedContractMethod<
    [_tokenAmount: BigNumberish, _amountOutMin: BigNumberish],
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
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, value: BigNumberish],
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
