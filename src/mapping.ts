import { Mint, Burn, Transfer } from './types/FiatTokenV1/FiatTokenV1'
import { User, Minter } from './types/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleMint(event: Mint): void {
  let minter = Minter.load(event.params.minter.toHex())
  if (minter == null) {
    minter = new Minter(event.params.minter.toHex())
    minter.address = event.params.minter.toHex()
    minter.totalMinted = BigInt.fromI32(0)
    minter.totalBurned = BigInt.fromI32(0)
  }
  minter.totalMinted = minter.totalMinted + event.params.amount
  minter.save()
}

export function handleBurn(event: Burn): void {
  let minter = Minter.load(event.params.burner.toHex())
  if (minter == null) {
    minter = new Minter(event.params.burner.toHex())
    minter.address = event.params.burner.toHex()
    minter.totalMinted = BigInt.fromI32(0)
    minter.totalBurned = BigInt.fromI32(0)
  }
  minter.totalBurned = minter.totalBurned + event.params.amount
  minter.save()
}

export function handleTransfer(event: Transfer): void {
  let userFrom = User.load(event.params.from.toHex())
  if (userFrom == null) {
    userFrom = new User(event.params.from.toHex());
    userFrom.address = event.params.from.toHex()
    userFrom.balance = BigInt.fromI32(0)
  }
  userFrom.balance = userFrom.balance - event.params.value
  userFrom.save()

  let userTo = User.load(event.params.to.toHex())
  if (userTo == null) {
    userTo = new User(event.params.to.toHex());
    userTo.address = event.params.to.toHex()
    userTo.balance = BigInt.fromI32(0)
  }
  userTo.balance = userTo.balance + event.params.value
  userTo.save()
}
