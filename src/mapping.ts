import { Mint, Burn, Transfer } from './types/FiatTokenV1/FiatTokenV1'
import { User, Minter, UserCounter, MinterCounter } from './types/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleMint(event: Mint): void {
  let minter = Minter.load(event.params.minter.toHex())
  if (minter == null) {
    // Minter
    minter = new Minter(event.params.minter.toHex())
    minter.address = event.params.minter.toHex()
    minter.totalMinted = BigInt.fromI32(0)
    minter.totalBurned = BigInt.fromI32(0)

    // MinterCounter
    let minterCounter = MinterCounter.load('singleton')
    if (minterCounter == null) {
      minterCounter = new MinterCounter('singleton')
      minterCounter.count = 1
    } else {
      minterCounter.count = minterCounter.count + 1
    }
    minterCounter.save()
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

    // MinterCounter
    let minterCounter = MinterCounter.load('singleton')
    if (minterCounter == null) {
      minterCounter = new MinterCounter('singleton')
      minterCounter.count = 1
    } else {
      minterCounter.count = minterCounter.count + 1
    }
    minterCounter.save()
    let day = (event.block.timestamp / BigInt.fromI32(60 * 60 * 24))
    minterCounter.id = day.toString()
    minterCounter.save()

    //let dailyMinterCounter = MinterCounter.load('singleton')
  }
  minter.totalBurned = minter.totalBurned + event.params.amount
  minter.save()
}

export function handleTransfer(event: Transfer): void {
  let userFrom = User.load(event.params.from.toHex())
  if (userFrom == null) {
    userFrom = newUser(event.params.from.toHex(), event.params.from.toHex());
  }
  userFrom.balance = userFrom.balance - event.params.value
  userFrom.transactionCount = userFrom.transactionCount + 1
  userFrom.save()

  let userTo = User.load(event.params.to.toHex())
  if (userTo == null) {
    userTo = newUser(event.params.to.toHex(), event.params.to.toHex());

    // UserCounter
    let userCounter = UserCounter.load('singleton')
    if (userCounter == null) {
      userCounter = new UserCounter('singleton')
      userCounter.count = 1
    } else {
      userCounter.count = userCounter.count + 1
    }
    userCounter.save()
    let day = (event.block.timestamp / BigInt.fromI32(60 * 60 * 24))
    userCounter.id = day.toString()
    userCounter.save()
  }
  userTo.balance = userTo.balance + event.params.value
  userTo.transactionCount = userTo.transactionCount + 1
  userTo.save()
}

function newUser(id: string, address: string): User {
  let user = new User(id);
  user.address = address
  user.balance = BigInt.fromI32(0)
  user.transactionCount = 0
  return user
}
