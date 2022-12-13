/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type EvictEvent = {
  index: number
  makerId: web3.PublicKey
  orderSequenceNumber: beet.bignum
  priceInTicks: beet.bignum
  baseLotsEvicted: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const evictEventBeet = new beet.BeetArgsStruct<EvictEvent>(
  [
    ['index', beet.u16],
    ['makerId', beetSolana.publicKey],
    ['orderSequenceNumber', beet.u64],
    ['priceInTicks', beet.u64],
    ['baseLotsEvicted', beet.u64],
  ],
  'EvictEvent'
)
