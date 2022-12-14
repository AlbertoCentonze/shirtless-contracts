/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ArbitrumHubConnector,
  ArbitrumHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/arbitrum/ArbitrumHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_defaultGasPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "DefaultGasPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "MirrorGasUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultGasPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_defaultGasPrice",
        type: "uint256",
      },
    ],
    name: "setDefaultGasPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    name: "setMirrorGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001287380380620012878339810160408190526200003591620002df565b8686868686868585858585856200004c33620001a4565b8563ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011b576200011b8262000203565b80156200012d576200012d816200026c565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a350505060059990995550620003629d5050505050505050505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff81168114620002c257600080fd5b919050565b80516001600160a01b0381168114620002c257600080fd5b600080600080600080600060e0888a031215620002fb57600080fd5b6200030688620002ad565b96506200031660208901620002ad565b95506200032660408901620002c7565b94506200033660608901620002c7565b93506200034660808901620002c7565b925060a0880151915060c0880151905092959891949750929550565b60805160a05160c05160e051610ec1620003c66000396000818161014101526107d80152600081816101e30152818161050501526107b10152600081816102e30152818161032c015281816109c40152610a9e015260006101a90152610ec16000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638b42a40a116100b8578063cf796c751161007c578063cf796c75146102a6578063d1851c92146102af578063d232c220146102c0578063d69f9d61146102de578063db1b765914610305578063e7b4294c1461031857600080fd5b80638b42a40a146102545780638da5cb5b14610267578063b1f8100d14610278578063c5b350df1461028b578063cc3942831461029357600080fd5b80635f61e3ec116100ff5780635f61e3ec146101de5780636a42b8f81461021d5780636eb67a5114610226578063715018a61461023957806382646a581461024157600080fd5b8063141684161461013c5780633cf52ffb1461017d5780634ff746f61461018f57806352a9674b146101a45780635bd11efc146101cb575b600080fd5b6101637f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6002545b604051908152602001610174565b6101a261019d366004610c51565b610321565b005b6101637f000000000000000000000000000000000000000000000000000000000000000081565b6101a26101d9366004610d17565b6103d0565b6102057f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610174565b62093a80610181565b6101a2610234366004610d3b565b610407565b6101a261043b565b6101a261024f366004610c51565b6104fa565b6101a2610262366004610d3b565b61059b565b6000546001600160a01b0316610205565b6101a2610286366004610d17565b610607565b6101a26106ac565b600354610205906001600160a01b031681565b61018160045481565b6001546001600160a01b0316610205565b6000546001600160a01b0316155b6040519015158152602001610174565b6102057f000000000000000000000000000000000000000000000000000000000000000081565b6102ce610313366004610d17565b610707565b61018160055481565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461038b5760405162461bcd60e51b81526004016103829060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b61039481610718565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516103c5929190610da1565b60405180910390a150565b6000546001600160a01b031633146103fb576040516311a8a1bb60e31b815260040160405180910390fd5b6104048161085f565b50565b6000546001600160a01b03163314610432576040516311a8a1bb60e31b815260040160405180910390fd5b610404816108c8565b6000546001600160a01b03163314610466576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361048957604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544261049b9190610dcb565b116104b9576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156104e3576040516323295ef960e01b815260040160405180910390fd5b6001546104f8906001600160a01b0316610909565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105615760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b6044820152606401610382565b61056a81610968565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc81336040516103c5929190610da1565b6000546001600160a01b031633146105c6576040516311a8a1bb60e31b815260040160405180910390fd5b60055460408051918252602082018390527f577c2dd19d86f7555790e151b7455ad2b3897b5c6037646b19672da61a1a8734910160405180910390a1600555565b6000546001600160a01b03163314610632576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561065757506001600160a01b03811615155b15610675576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036106a357604051634a2fb73f60e11b815260040160405180910390fd5b61040481610a49565b6001546001600160a01b031633146106d7576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426106e99190610dcb565b116104e35760405163d39c12bb60e01b815260040160405180910390fd5b600061071282610a97565b92915050565b60035461072d906001600160a01b0316610a97565b61076c5760405162461bcd60e51b815260206004820152601060248201526f10b6b4b93937b921b7b73732b1ba37b960811b6044820152606401610382565b80516020146107a75760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610382565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f000000000000000000000000000000000000000000000000000000000000000061080084610df0565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b15801561084457600080fd5b505af1158015610858573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516020146109a35760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610382565b600480546005546003546040516345318d5360e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811695638a631aa695610a029590949093921691600091899101610e17565b6020604051808303816000875af1158015610a21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a459190610e55565b5050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000610ac27f0000000000000000000000000000000000000000000000000000000000000000610add565b6001600160a01b0316826001600160a01b0316149050919050565b60006001600160a01b0382163314610b085760405163253a6fc960e11b815260040160405180910390fd5b6000826001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6c9190610e6e565b6001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd9190610e6e565b90506001600160a01b0381166107125760405162461bcd60e51b815260206004820152602d60248201527f4c6962417262697472756d4c313a2073797374656d206d65737361676573207760448201526c34ba3437baba1039b2b73232b960991b6064820152608401610382565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610c6357600080fd5b813567ffffffffffffffff80821115610c7b57600080fd5b818401915084601f830112610c8f57600080fd5b813581811115610ca157610ca1610c3b565b604051601f8201601f19908116603f01168101908382118183101715610cc957610cc9610c3b565b81604052828152876020848701011115610ce257600080fd5b826020860160208301376000928101602001929092525095945050505050565b6001600160a01b038116811461040457600080fd5b600060208284031215610d2957600080fd5b8135610d3481610d02565b9392505050565b600060208284031215610d4d57600080fd5b5035919050565b6000815180845260005b81811015610d7a57602081850181015186830182015201610d5e565b81811115610d8c576000602083870101525b50601f01601f19169290920160200192915050565b604081526000610db46040830185610d54565b905060018060a01b03831660208301529392505050565b600082821015610deb57634e487b7160e01b600052601160045260246000fd5b500390565b80516020808301519190811015610e11576000198160200360031b1b821691505b50919050565b85815284602082015260018060a01b038416604082015282606082015260a060808201526000610e4a60a0830184610d54565b979650505050505050565b600060208284031215610e6757600080fd5b5051919050565b600060208284031215610e8057600080fd5b8151610d3481610d0256fea264697066735822122077e5ce8e578cb1fb648a139d7acaebaccea4ea43edb0a78a88da62189ff5085664736f6c634300080f0033";

type ArbitrumHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbitrumHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbitrumHubConnector__factory extends ContractFactory {
  constructor(...args: ArbitrumHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _defaultGasPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArbitrumHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _defaultGasPrice,
      overrides || {}
    ) as Promise<ArbitrumHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _defaultGasPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _defaultGasPrice,
      overrides || {}
    );
  }
  override attach(address: string): ArbitrumHubConnector {
    return super.attach(address) as ArbitrumHubConnector;
  }
  override connect(signer: Signer): ArbitrumHubConnector__factory {
    return super.connect(signer) as ArbitrumHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbitrumHubConnectorInterface {
    return new utils.Interface(_abi) as ArbitrumHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitrumHubConnector;
  }
}
