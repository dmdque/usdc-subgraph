import { Mint, Burn, Transfer } from './types/FiatTokenV1/FiatTokenV1'
import { User } from './types/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleMint(event: Mint): void {
  let user = User.load(event.params.to.toHex())
  if (user == null) {
    user = new User(event.params.to.toHex());
    user.address = event.params.to.toHex()
    user.balance = BigInt.fromI32(0)
  }
  user.balance = user.balance + event.params.amount
  user.save()


  let minter = Minter.load(event.params.minter.toHex())
  if (minter == null) {
    minter = new Minter(event.params.minter.toHex())
    minter.address = event.params.to.toHex()
    minter.totalMinted = BigInt.fromI32(0)
  }
  minter.totalMinted = minter.totalMinted + event.params.amount
}

export function handleBurn(event: Burn): void {
  let user = User.load(event.params.to.toHex())
  if (user == null) {
    user = new User(event.params.to.toHex());
    user.address = event.params.to.toHex()
    user.balance = BigInt.fromI32(0)
  }
  user.balance = user.balance - event.params.amount
  user.save()


  let burner = Burner.load(event.params.burner.toHex())
  if (burner == null) {
    burner = new Burner(event.params.burner.toHex())
    burner.address = event.params.to.toHex()
    burner.totalBurned = BigInt.fromI32(0)
  }
  burner.totalBurned = burner.totalBurned + event.params.amount
}

export function handleTransfer(event: Transfer): void {
  let userFrom = User.load(event.params.from.toHex())
  if (userFrom == null) {
    userFrom = new User(event.params.from.toHex());
    user.address = event.params.from.toHex()
    user.balance = BigInt.fromI32(0)
  }
  userFrom.balance = userFrom.balance - event.params.value
  userFrom.save()

  let userTo = User.load(event.params.to.toHex())
  if (userTo == null) {
    userTo = new User(event.params.to.toHex());
    user.address = event.params.to.toHex()
    user.balance = BigInt.fromI32(0)
  }
  userTo.balance = userTo.balance + event.params.value
  userTo.save()
}
