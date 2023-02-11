import axios from 'axios'
import { fromSnakeToCamelCase } from '~/utils/general'
import { DepositPayload, Transaction } from './types'

const API = 'https://shadowed-harmonious-receipt.glitch.me/ledger'

export async function getTransactionSummary(): Promise<Transaction[]> {
  const res = await axios.get(API)
  const parsed = fromSnakeToCamelCase(res.data)
  return parsed
}

export async function depositFunds(params: DepositPayload): Promise<void> {
  const parsedPayload = fromSnakeToCamelCase([params])[0]
  await axios.post(`${API}/transaction_type`, parsedPayload)
}
