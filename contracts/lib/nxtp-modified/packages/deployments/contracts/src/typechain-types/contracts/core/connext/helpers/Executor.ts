/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace IExecutor {
  export type ExecutorArgsStruct = {
    transferId: PromiseOrValue<BytesLike>;
    amount: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<string>;
    recovery: PromiseOrValue<string>;
    assetId: PromiseOrValue<string>;
    originSender: PromiseOrValue<string>;
    originDomain: PromiseOrValue<BigNumberish>;
    callData: PromiseOrValue<BytesLike>;
  };

  export type ExecutorArgsStructOutput = [
    string,
    BigNumber,
    string,
    string,
    string,
    string,
    number,
    string
  ] & {
    transferId: string;
    amount: BigNumber;
    to: string;
    recovery: string;
    assetId: string;
    originSender: string;
    originDomain: number;
    callData: string;
  };
}

export interface ExecutorInterface extends utils.Interface {
  functions: {
    "FAILURE_GAS()": FunctionFragment;
    "MAX_COPY()": FunctionFragment;
    "execute((bytes32,uint256,address,address,address,address,uint32,bytes))": FunctionFragment;
    "getConnext()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FAILURE_GAS"
      | "MAX_COPY"
      | "execute"
      | "getConnext"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FAILURE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_COPY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [IExecutor.ExecutorArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getConnext",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FAILURE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_COPY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConnext", data: BytesLike): Result;

  events: {
    "Executed(bytes32,address,address,address,uint256,address,uint32,bytes,bytes,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface ExecutedEventObject {
  transferId: string;
  to: string;
  recovery: string;
  assetId: string;
  amount: BigNumber;
  originSender: string;
  originDomain: number;
  callData: string;
  returnData: string;
  success: boolean;
}
export type ExecutedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    number,
    string,
    string,
    boolean
  ],
  ExecutedEventObject
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExecutorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FAILURE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_COPY(overrides?: CallOverrides): Promise<[number]>;

    execute(
      _args: IExecutor.ExecutorArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getConnext(overrides?: CallOverrides): Promise<[string]>;
  };

  FAILURE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_COPY(overrides?: CallOverrides): Promise<number>;

  execute(
    _args: IExecutor.ExecutorArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getConnext(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FAILURE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COPY(overrides?: CallOverrides): Promise<number>;

    execute(
      _args: IExecutor.ExecutorArgsStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    getConnext(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Executed(bytes32,address,address,address,uint256,address,uint32,bytes,bytes,bool)"(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      recovery?: PromiseOrValue<string> | null,
      assetId?: null,
      amount?: null,
      originSender?: null,
      originDomain?: null,
      callData?: null,
      returnData?: null,
      success?: null
    ): ExecutedEventFilter;
    Executed(
      transferId?: PromiseOrValue<BytesLike> | null,
      to?: PromiseOrValue<string> | null,
      recovery?: PromiseOrValue<string> | null,
      assetId?: null,
      amount?: null,
      originSender?: null,
      originDomain?: null,
      callData?: null,
      returnData?: null,
      success?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    FAILURE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COPY(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      _args: IExecutor.ExecutorArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getConnext(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FAILURE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_COPY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      _args: IExecutor.ExecutorArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getConnext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
