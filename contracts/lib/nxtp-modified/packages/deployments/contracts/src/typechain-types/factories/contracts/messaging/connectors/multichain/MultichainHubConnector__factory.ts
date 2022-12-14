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
  MultichainHubConnector,
  MultichainHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/multichain/MultichainHubConnector";

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
        name: "_mirrorChainId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "anyExecute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x6101406040523480156200001257600080fd5b50604051620012ef380380620012ef8339810160408190526200003591620003d2565b84818888838888888585858585856200004e3362000297565b8563ffffffff16600003620000995760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e55760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b604482015260640162000090565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011d576200011d82620002f6565b80156200012f576200012f816200035f565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a350505050505050505050505080600003620001d65760405162461bcd60e51b815260206004820152600e60248201526d085b5a5c9c9bdc90da185a5b925960921b604482015260640162000090565b816001600160a01b031663c34c08e56040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b919062000455565b6001600160a01b0316610100819052620002845760405162461bcd60e51b815260206004820152600960248201526810b2bc32b1baba37b960b91b604482015260640162000090565b61012052506200047a9650505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff81168114620003b557600080fd5b919050565b80516001600160a01b0381168114620003b557600080fd5b600080600080600080600060e0888a031215620003ee57600080fd5b620003f988620003a0565b96506200040960208901620003a0565b95506200041960408901620003ba565b94506200042960608901620003ba565b93506200043960808901620003ba565b925060a0880151915060c0880151905092959891949750929550565b6000602082840312156200046857600080fd5b6200047382620003ba565b9392505050565b60805160a05160c05160e0516101005161012051610df4620004fb600039600081816109d30152610b1f01526000610a7c01526000818161013601526107740152600081816101d8015281816104ff015261074d0152600081816102e6015281816103260152818161090901526109830152600061019e0152610df46000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063cf796c7511610071578063cf796c75146102a9578063d1851c92146102b2578063d232c220146102c3578063d69f9d61146102e1578063db1b76591461030857600080fd5b80638da5cb5b146102495780639abaf4791461025a578063b1f8100d1461027b578063c5b350df1461028e578063cc3942831461029657600080fd5b80635f61e3ec116100f45780635f61e3ec146101d35780636a42b8f8146102125780636eb67a511461021b578063715018a61461022e57806382646a581461023657600080fd5b806314168416146101315780633cf52ffb146101725780634ff746f61461018457806352a9674b146101995780635bd11efc146101c0575b600080fd5b6101587f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6002545b604051908152602001610169565b610197610192366004610b60565b61031b565b005b6101587f000000000000000000000000000000000000000000000000000000000000000081565b6101976101ce366004610c26565b6103ca565b6101fa7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610169565b62093a80610176565b610197610229366004610c4a565b610401565b610197610435565b610197610244366004610b60565b6104f4565b6000546001600160a01b03166101fa565b61026d610268366004610b60565b610595565b604051610169929190610cb0565b610197610289366004610c26565b6105a7565b61019761064c565b6003546101fa906001600160a01b031681565b61017660045481565b6001546001600160a01b03166101fa565b6000546001600160a01b0316155b6040519015158152602001610169565b6101fa7f000000000000000000000000000000000000000000000000000000000000000081565b6102d1610316366004610c26565b6106a7565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103855760405162461bcd60e51b815260040161037c9060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b61038e816106b8565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516103bf929190610cd3565b60405180910390a150565b6000546001600160a01b031633146103f5576040516311a8a1bb60e31b815260040160405180910390fd5b6103fe816107fb565b50565b6000546001600160a01b0316331461042c576040516311a8a1bb60e31b815260040160405180910390fd5b6103fe81610864565b6000546001600160a01b03163314610460576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361048357604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426104959190610cfd565b116104b3576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156104dd576040516323295ef960e01b815260040160405180910390fd5b6001546104f2906001600160a01b03166108a5565b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461055b5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b604482015260640161037c565b61056481610904565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc81336040516103bf929190610cd3565b600060606105a2836106b8565b915091565b6000546001600160a01b031633146105d2576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156105f757506001600160a01b03811615155b15610615576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361064357604051634a2fb73f60e11b815260040160405180910390fd5b6103fe8161092e565b6001546001600160a01b03163314610677576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426106899190610cfd565b116104dd5760405163d39c12bb60e01b815260040160405180910390fd5b60006106b28261097c565b92915050565b6003546106cd906001600160a01b031661097c565b6107085760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b604482015260640161037c565b80516020146107435760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161037c565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f000000000000000000000000000000000000000000000000000000000000000061079c84610d22565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b1580156107e057600080fd5b505af11580156107f4573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103fe7f0000000000000000000000000000000000000000000000000000000000000000826109a8565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006106b27f000000000000000000000000000000000000000000000000000000000000000083610a33565b60405163bd45c4e760e01b81526001600160a01b0383169063bd45c4e7906109fd90859085906000907f0000000000000000000000000000000000000000000000000000000000000000908290600401610d49565b600060405180830381600087803b158015610a1757600080fd5b505af1158015610a2b573d6000803e3d6000fd5b505050505050565b6000336001600160a01b03841614610a775760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b604482015260640161037c565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0496d6a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610ad8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afc9190610d87565b5091509150836001600160a01b0316826001600160a01b0316148015610b4157507f000000000000000000000000000000000000000000000000000000000000000081145b95945050505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610b7257600080fd5b813567ffffffffffffffff80821115610b8a57600080fd5b818401915084601f830112610b9e57600080fd5b813581811115610bb057610bb0610b4a565b604051601f8201601f19908116603f01168101908382118183101715610bd857610bd8610b4a565b81604052828152876020848701011115610bf157600080fd5b826020860160208301376000928101602001929092525095945050505050565b6001600160a01b03811681146103fe57600080fd5b600060208284031215610c3857600080fd5b8135610c4381610c11565b9392505050565b600060208284031215610c5c57600080fd5b5035919050565b6000815180845260005b81811015610c8957602081850181015186830182015201610c6d565b81811115610c9b576000602083870101525b50601f01601f19169290920160200192915050565b8215158152604060208201526000610ccb6040830184610c63565b949350505050565b604081526000610ce66040830185610c63565b905060018060a01b03831660208301529392505050565b600082821015610d1d57634e487b7160e01b600052601160045260246000fd5b500390565b80516020808301519190811015610d43576000198160200360031b1b821691505b50919050565b600060018060a01b03808816835260a06020840152610d6b60a0840188610c63565b9516604083015250606081019290925260809091015292915050565b600080600060608486031215610d9c57600080fd5b8351610da781610c11565b60208501516040909501519096949550939250505056fea26469706673582212209f6fe6f411ffa047cf8794bde57c43428d0cd7cccb190f0b70b45e765e71682c64736f6c634300080f0033";

type MultichainHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultichainHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultichainHubConnector__factory extends ContractFactory {
  constructor(...args: MultichainHubConnectorConstructorParams) {
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
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultichainHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _mirrorChainId,
      overrides || {}
    ) as Promise<MultichainHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      _mirrorChainId,
      overrides || {}
    );
  }
  override attach(address: string): MultichainHubConnector {
    return super.attach(address) as MultichainHubConnector;
  }
  override connect(signer: Signer): MultichainHubConnector__factory {
    return super.connect(signer) as MultichainHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultichainHubConnectorInterface {
    return new utils.Interface(_abi) as MultichainHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultichainHubConnector;
  }
}
