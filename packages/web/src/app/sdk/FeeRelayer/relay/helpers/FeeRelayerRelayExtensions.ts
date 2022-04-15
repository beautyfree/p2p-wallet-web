import type { u64 } from '@solana/spl-token';
import type { PublicKey } from '@solana/web3.js';

import type * as OrcaSwap from '../../../OrcaSwap';
import { DirectSwapData } from '.';

export function getSwapData({
  pool,
  transferAuthorityPubkey,
  amountIn,
  minAmountOut,
}: {
  pool: OrcaSwap.OrcaSwapPool;
  transferAuthorityPubkey: PublicKey;
  amountIn: u64;
  minAmountOut: u64;
}): DirectSwapData {
  return new DirectSwapData({
    programId: pool.swapProgramId,
    accountPubkey: pool.account,
    authorityPubkey: pool.authority,
    transferAuthorityPubkey,
    sourcePubkey: pool.tokenAccountA,
    destinationPubkey: pool.tokenAccountB,
    poolTokenMintPubkey: pool.poolTokenMint,
    poolFeeAccountPubkey: pool.feeAccount,
    amountIn,
    minimumAmountOut: minAmountOut,
  });
}
