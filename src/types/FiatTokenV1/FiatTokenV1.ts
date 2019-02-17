import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Mint extends EthereumEvent {
  get params(): MintParams {
    return new MintParams(this);
  }
}

export class MintParams {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Burn extends EthereumEvent {
  get params(): BurnParams {
    return new BurnParams(this);
  }
}

export class BurnParams {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get burner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinterConfigured extends EthereumEvent {
  get params(): MinterConfiguredParams {
    return new MinterConfiguredParams(this);
  }
}

export class MinterConfiguredParams {
  _event: MinterConfigured;

  constructor(event: MinterConfigured) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minterAllowedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinterRemoved extends EthereumEvent {
  get params(): MinterRemovedParams {
    return new MinterRemovedParams(this);
  }
}

export class MinterRemovedParams {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get oldMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MasterMinterChanged extends EthereumEvent {
  get params(): MasterMinterChangedParams {
    return new MasterMinterChangedParams(this);
  }
}

export class MasterMinterChangedParams {
  _event: MasterMinterChanged;

  constructor(event: MasterMinterChanged) {
    this._event = event;
  }

  get newMasterMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Blacklisted extends EthereumEvent {
  get params(): BlacklistedParams {
    return new BlacklistedParams(this);
  }
}

export class BlacklistedParams {
  _event: Blacklisted;

  constructor(event: Blacklisted) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UnBlacklisted extends EthereumEvent {
  get params(): UnBlacklistedParams {
    return new UnBlacklistedParams(this);
  }
}

export class UnBlacklistedParams {
  _event: UnBlacklisted;

  constructor(event: UnBlacklisted) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BlacklisterChanged extends EthereumEvent {
  get params(): BlacklisterChangedParams {
    return new BlacklisterChangedParams(this);
  }
}

export class BlacklisterChangedParams {
  _event: BlacklisterChanged;

  constructor(event: BlacklisterChanged) {
    this._event = event;
  }

  get newBlacklister(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Pause extends EthereumEvent {
  get params(): PauseParams {
    return new PauseParams(this);
  }
}

export class PauseParams {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends EthereumEvent {
  get params(): UnpauseParams {
    return new UnpauseParams(this);
  }
}

export class UnpauseParams {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class PauserChanged extends EthereumEvent {
  get params(): PauserChangedParams {
    return new PauserChangedParams(this);
  }
}

export class PauserChangedParams {
  _event: PauserChanged;

  constructor(event: PauserChanged) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Approval extends EthereumEvent {
  get params(): ApprovalParams {
    return new ApprovalParams(this);
  }
}

export class ApprovalParams {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferredParams {
    return new OwnershipTransferredParams(this);
  }
}

export class OwnershipTransferredParams {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends EthereumEvent {
  get params(): TransferParams {
    return new TransferParams(this);
  }
}

export class TransferParams {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FiatTokenV1 extends SmartContract {
  static bind(address: Address): FiatTokenV1 {
    return new FiatTokenV1("FiatTokenV1", address);
  }

  name(): string {
    let result = super.call("name", []);
    return result[0].toString();
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);
    return result[0].toBigInt();
  }

  decimals(): i32 {
    let result = super.call("decimals", []);
    return result[0].toI32();
  }

  masterMinter(): Address {
    let result = super.call("masterMinter", []);
    return result[0].toAddress();
  }

  paused(): boolean {
    let result = super.call("paused", []);
    return result[0].toBoolean();
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(account)]);
    return result[0].toBigInt();
  }

  minterAllowance(minter: Address): BigInt {
    let result = super.call("minterAllowance", [
      EthereumValue.fromAddress(minter)
    ]);
    return result[0].toBigInt();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  symbol(): string {
    let result = super.call("symbol", []);
    return result[0].toString();
  }

  pauser(): Address {
    let result = super.call("pauser", []);
    return result[0].toAddress();
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", [EthereumValue.fromAddress(account)]);
    return result[0].toBoolean();
  }

  blacklister(): Address {
    let result = super.call("blacklister", []);
    return result[0].toAddress();
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(spender)
    ]);
    return result[0].toBigInt();
  }

  currency(): string {
    let result = super.call("currency", []);
    return result[0].toString();
  }

  isBlacklisted(_account: Address): boolean {
    let result = super.call("isBlacklisted", [
      EthereumValue.fromAddress(_account)
    ]);
    return result[0].toBoolean();
  }
}
