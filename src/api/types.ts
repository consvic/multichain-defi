export type Chain = 'solana-mainnet' | 'ethereum-mainnet'
export type Action = 'deposit' | 'withdraw'

export interface Transaction {
  id: number
  createdAt: Date
  chainName: Chain
  transactionType: Action
  amount: number
}

export interface DepositPayload {
  transactionType: Action
  amount: number
  chainName: Chain
}
