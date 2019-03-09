import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get transactionCount(): i32 {
    let value = this.get("transactionCount");
    return value.toI32();
  }

  set transactionCount(value: i32) {
    this.set("transactionCount", Value.fromI32(value));
  }
}

export class Minter extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Minter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Minter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Minter", id.toString(), this);
  }

  static load(id: string): Minter | null {
    return store.get("Minter", id) as Minter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get totalMinted(): BigInt {
    let value = this.get("totalMinted");
    return value.toBigInt();
  }

  set totalMinted(value: BigInt) {
    this.set("totalMinted", Value.fromBigInt(value));
  }

  get totalBurned(): BigInt {
    let value = this.get("totalBurned");
    return value.toBigInt();
  }

  set totalBurned(value: BigInt) {
    this.set("totalBurned", Value.fromBigInt(value));
  }
}

export class UserCounter extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserCounter", id.toString(), this);
  }

  static load(id: string): UserCounter | null {
    return store.get("UserCounter", id) as UserCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class MinterCounter extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MinterCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MinterCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MinterCounter", id.toString(), this);
  }

  static load(id: string): MinterCounter | null {
    return store.get("MinterCounter", id) as MinterCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}
