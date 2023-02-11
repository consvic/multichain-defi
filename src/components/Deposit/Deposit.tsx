import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useAccount } from 'wagmi'
import { depositFunds } from '~/api/transaction'

export function Deposit(): JSX.Element {
  const queryClient = useQueryClient()
  const { isConnected } = useAccount()
  const [amount, setAmount] = useState<number>()

  const mutation = useMutation(depositFunds, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('transactions')
    },
  })

  function onChangeAmount(val: string): void {
    const numVal = Number(val)
    if (numVal < 0) return
    setAmount(numVal)
  }

  return (
    <form>
      <label htmlFor="deposit" className="text-sm text-slate-600 pr-2">
        Deposit funds:
      </label>
      <input
        name="deposit"
        className="bg-slate-200 mr-2 border-b border-slate-900 px-4 py-3"
        type="number"
        disabled={!isConnected}
        value={amount}
        onChange={({ target }) => onChangeAmount(target.value)}
        min={0}
      />
      <button
        type="button"
        disabled={!isConnected}
        className="text-sm text-slate-600 rounded-lg bg-slate-200 disabled:bg-slate-400 disabled:text-slate-500 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
      >
        Deposit
      </button>
    </form>
  )
}
