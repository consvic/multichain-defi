import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styled from 'styled-components'

export const SolanaButton = styled(WalletMultiButton)`
  color: rgb(71, 85, 105);
  font-weight: 400;
  font-size: 14px;
  border-radius: 0.5rem;

  :not([disabled]):hover {
    background-color: rgb(226, 232, 240);
  }
`
