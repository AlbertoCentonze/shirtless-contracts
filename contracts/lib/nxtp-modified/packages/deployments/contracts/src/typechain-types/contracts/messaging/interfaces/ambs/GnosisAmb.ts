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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface GnosisAmbInterface extends utils.Interface {
  functions: {
    "destinationChainId()": FunctionFragment;
    "failedMessageDataHash(bytes32)": FunctionFragment;
    "failedMessageReceiver(bytes32)": FunctionFragment;
    "failedMessageSender(bytes32)": FunctionFragment;
    "maxGasPerTx()": FunctionFragment;
    "messageCallStatus(bytes32)": FunctionFragment;
    "messageId()": FunctionFragment;
    "messageSender()": FunctionFragment;
    "messageSourceChainId()": FunctionFragment;
    "requireToConfirmMessage(address,bytes,uint256)": FunctionFragment;
    "requireToGetInformation(bytes32,bytes)": FunctionFragment;
    "requireToPassMessage(address,bytes,uint256)": FunctionFragment;
    "sourceChainId()": FunctionFragment;
    "transactionHash()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "destinationChainId"
      | "failedMessageDataHash"
      | "failedMessageReceiver"
      | "failedMessageSender"
      | "maxGasPerTx"
      | "messageCallStatus"
      | "messageId"
      | "messageSender"
      | "messageSourceChainId"
      | "requireToConfirmMessage"
      | "requireToGetInformation"
      | "requireToPassMessage"
      | "sourceChainId"
      | "transactionHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "destinationChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageDataHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageReceiver",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageSender",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageCallStatus",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requireToConfirmMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requireToGetInformation",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "requireToPassMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactionHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "destinationChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGasPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageCallStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToConfirmMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToGetInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToPassMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionHash",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GnosisAmb extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GnosisAmbInterface;

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
    destinationChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    failedMessageDataHash(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    failedMessageReceiver(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    failedMessageSender(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxGasPerTx(overrides?: CallOverrides): Promise<[BigNumber]>;

    messageCallStatus(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    messageId(overrides?: CallOverrides): Promise<[string]>;

    messageSender(overrides?: CallOverrides): Promise<[string]>;

    messageSourceChainId(overrides?: CallOverrides): Promise<[string]>;

    requireToConfirmMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requireToGetInformation(
      _requestSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requireToPassMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sourceChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    transactionHash(overrides?: CallOverrides): Promise<[string]>;
  };

  destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

  failedMessageDataHash(
    _messageId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  failedMessageReceiver(
    _messageId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  failedMessageSender(
    _messageId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

  messageCallStatus(
    _messageId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  messageId(overrides?: CallOverrides): Promise<string>;

  messageSender(overrides?: CallOverrides): Promise<string>;

  messageSourceChainId(overrides?: CallOverrides): Promise<string>;

  requireToConfirmMessage(
    _contract: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _gas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requireToGetInformation(
    _requestSelector: PromiseOrValue<BytesLike>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requireToPassMessage(
    _contract: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    _gas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

  transactionHash(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

    failedMessageDataHash(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    failedMessageReceiver(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    failedMessageSender(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    messageCallStatus(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    messageId(overrides?: CallOverrides): Promise<string>;

    messageSender(overrides?: CallOverrides): Promise<string>;

    messageSourceChainId(overrides?: CallOverrides): Promise<string>;

    requireToConfirmMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    requireToGetInformation(
      _requestSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    requireToPassMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    transactionHash(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    destinationChainId(overrides?: CallOverrides): Promise<BigNumber>;

    failedMessageDataHash(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failedMessageReceiver(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failedMessageSender(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxGasPerTx(overrides?: CallOverrides): Promise<BigNumber>;

    messageCallStatus(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageId(overrides?: CallOverrides): Promise<BigNumber>;

    messageSender(overrides?: CallOverrides): Promise<BigNumber>;

    messageSourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    requireToConfirmMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requireToGetInformation(
      _requestSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requireToPassMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sourceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    transactionHash(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    destinationChainId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageDataHash(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageReceiver(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedMessageSender(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxGasPerTx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageCallStatus(
      _messageId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageSourceChainId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireToConfirmMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requireToGetInformation(
      _requestSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requireToPassMessage(
      _contract: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      _gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sourceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transactionHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}