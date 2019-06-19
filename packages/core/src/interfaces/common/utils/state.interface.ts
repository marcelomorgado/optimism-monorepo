/* External Imports */
import BigNum = require('bn.js')
import { Range } from './range-store.interface'

export interface StateObject {
  predicateAddress: string
  data: any
}

export interface StateUpdate {
  range: Range
  stateObject: StateObject
  depositAddress: string
  plasmaBlockNumber: number
}

export interface VerifiedStateUpdate {
  range: Range
  verifiedBlockNumber: number
  stateUpdate: StateUpdate
}

// TODO: Define this properly if not `string`. Just adding it to be able to define StateQuery.
export type Expression = string

export interface StateQuery {
  depositAddress: string
  predicateAddress: string
  start?: BigNum
  end?: BigNum
  method: string
  params: string[]
  filter?: Expression
}

export interface StateQueryResult {
  stateUpdate: StateUpdate
  result: string[]
}

export interface Transaction {
  depositAddress: string
  methodId: string
  parameters: any
  range: Range
}

export interface OwnershipParameters {
  newState: StateObject
  originBlock: BigNum
  maxBlock: BigNum
}

export type InclusionProof = string[]
export type ExclusionProof = string[]

export interface ProofElementDeposit {
  transaction: Transaction
}

export interface ProofElementTransaction {
  transaction: Transaction
  inclusionProof: InclusionProof
}

export interface ProofElementTransactionExclusion {
  transaction: Transaction
  exclusionProof: ExclusionProof
}

export type ProofElement = ProofElementDeposit | ProofElementTransaction

export type TransactionProof = ProofElement[]

export type HistoryProof = Array<
  ProofElementDeposit | ProofElementTransaction | ExclusionProof
>
