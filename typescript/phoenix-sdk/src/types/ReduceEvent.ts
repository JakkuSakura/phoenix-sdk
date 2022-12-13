/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type ReduceEvent = {
  index: number
  orderSequenceNumber: beet.bignum
  priceInTicks: beet.bignum
  baseLotsRemoved: beet.bignum
  baseLotsRemaining: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const reduceEventBeet = new beet.BeetArgsStruct<ReduceEvent>(
  [
    ['index', beet.u16],
    ['orderSequenceNumber', beet.u64],
    ['priceInTicks', beet.u64],
    ['baseLotsRemoved', beet.u64],
    ['baseLotsRemaining', beet.u64],
  ],
  'ReduceEvent'
)
