/* External Imports */
import { BigNumber } from '@pigi/core-utils'

/* Internal Imports */
import {
  Transaction,
  Address,
  StorageSlot,
  StorageValue,
  TransactionResult,
} from './types'

export interface RollupStateMachine {
  /**
   * Gets the state for the provided address, if one exists.
   *
   * @param targetContract The contract being retrieved.
   * @param targetStorageSlot The slot to the storage being retrieved.
   * @returns The storage value at the specified contract & key.
   */
  getStorageAt(
    targetContract: Address,
    targetStorageSlot: StorageSlot
  ): Promise<StorageValue>

  /**
   * Applies the provided signed transaction, adjusting balances accordingly.
   *
   * @param signedTransaction The signed transaction to execute.
   * @returns The TransactionResult resulting from the transaction
   */
  applyTransaction(transaction: Transaction): Promise<TransactionResult>

  /**
   * Gets all TransactionResults processed by this State Machine since (after) the provided
   * transaction number.
   *
   * @param transactionNumber The transaction number in question
   * @returns the ordered list of transactions since the provided transaction number
   */
  getTransactionResultsSince(
    transactionNumber: BigNumber
  ): Promise<TransactionResult[]>
}
