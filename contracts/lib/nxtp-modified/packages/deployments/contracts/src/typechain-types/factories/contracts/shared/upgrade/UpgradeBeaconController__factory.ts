/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpgradeBeaconController,
  UpgradeBeaconControllerInterface,
} from "../../../../contracts/shared/upgrade/UpgradeBeaconController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103e08061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b57806399a88ec41461007a578063f2fde38b1461008d575b600080fd5b6100596100a0565b005b600054604080516001600160a01b039092168252519081900360200190f35b61005961008836600461031a565b6100b4565b61005961009b36600461034d565b6101db565b6100a8610254565b6100b260006102ae565b565b6100bc610254565b6001600160a01b0382163b61010b5760405162461bcd60e51b815260206004820152601060248201526f18995858dbdb880858dbdb9d1c9858dd60821b60448201526064015b60405180910390fd5b604080516001600160a01b038381166020830152600092908516910160408051601f19818403018152908290526101419161036f565b6000604051808303816000865af19150503d806000811461017e576040519150601f19603f3d011682016040523d82523d6000602084013e610183565b606091505b5050905080610196573d6000803e3d6000fd5b6040516001600160a01b0383811682528416907fc945ae30494f6ee00b9e4bf1fec5653ced7244b559666f44f9a88ea732e957b09060200160405180910390a2505050565b6101e3610254565b6001600160a01b0381166102485760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610102565b610251816102ae565b50565b6000546001600160a01b031633146100b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610102565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461031557600080fd5b919050565b6000806040838503121561032d57600080fd5b610336836102fe565b9150610344602084016102fe565b90509250929050565b60006020828403121561035f57600080fd5b610368826102fe565b9392505050565b6000825160005b818110156103905760208186018101518583015201610376565b8181111561039f576000828501525b50919091019291505056fea2646970667358221220af014d2bf7eae5fb50edcc81ae125f0ff04fcc9ef445c766fb30507518f4b0d264736f6c634300080f0033";

type UpgradeBeaconControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeBeaconControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeBeaconController__factory extends ContractFactory {
  constructor(...args: UpgradeBeaconControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeBeaconController> {
    return super.deploy(overrides || {}) as Promise<UpgradeBeaconController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradeBeaconController {
    return super.attach(address) as UpgradeBeaconController;
  }
  override connect(signer: Signer): UpgradeBeaconController__factory {
    return super.connect(signer) as UpgradeBeaconController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconControllerInterface {
    return new utils.Interface(_abi) as UpgradeBeaconControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradeBeaconController;
  }
}
