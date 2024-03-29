import { useQuery } from 'react-query'
import { getTransactionSummary } from '~/api/transaction'
import {
  calculateTotalUsd,
  numberWithCommas,
  removeExtraDecimals,
} from '~/utils/general'
import { Deposit } from '../Deposit'

// parses to the following Tuesday, Jan 31, 2023, 09:58 AM
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
} satisfies Intl.DateTimeFormatOptions

const networkToLabel = {
  'solana-mainnet': 'Solana',
  'ethereum-mainnet': 'Ethereum',
}

export function Transactions(): JSX.Element {
  const { data, isLoading } = useQuery('transactions', getTransactionSummary)

  if (isLoading) return <div>Loading...</div>

  return (
    <section className="pt-40 pb-20 flex flex-col sm:items-center">
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 mb-12 max-w-screen-lg sm:w-4/5 md:3/5">
        <h4 className="text-4xl font-bold text-slate-600 mb-4 sm:mb-0">
          TVL: $ {numberWithCommas(calculateTotalUsd(data || []))}
        </h4>
        <Deposit />
      </div>
      <div className="mx-2 sm:mx-6 md:mx-auto bg-slate-900 rounded-xl border-slate-400 py-8">
        <div className="grid gap-5">
          <div className="grid grid-cols-4">
            <p className="border-b border-slate-600 font-medium p-4 pl-4: sm:pl-8 pt-0 pb-3 text-slate-200 text-left font-bold">
              Date
            </p>
            <p className="border-b border-slate-600 font-medium p-4 pl-4: sm:pl-8 pt-0 pb-3 text-slate-200 text-left font-bold">
              Chain
            </p>
            <p className="border-b border-slate-600 font-medium p-4 pl-4: sm:pl-8 pt-0 pb-3 text-slate-200 text-left font-bold">
              Transaction type
            </p>
            <p className="border-b border-slate-600 font-medium p-4 pl-4: sm:pl-8 pt-0 pb-3 text-slate-200 text-left font-bold">
              Amount (USD)
            </p>
          </div>
          {data?.map(trans => (
            <div key={trans.id} className="grid grid-cols-4">
              <p className="border-b border-slate-700 p-4 pl-4: sm:pl-8 text-slate-400">
                {new Date(trans.createdAt).toLocaleDateString(
                  'en-US',
                  dateOptions
                )}
              </p>
              <p className="border-b border-slate-700 p-4 pl-4: sm:pl-8 text-slate-400">
                {networkToLabel[trans.chainName]}
              </p>
              <div className="border-b border-slate-700 p-4 pl-4: sm:pl-8">
                <p
                  className={`text-slate-200 text-sm rounded py-2 px-2 sm:px-4 font-medium w-fit ${
                    trans.transactionType === 'withdraw'
                      ? 'bg-red-600'
                      : 'bg-green-600'
                  }`}
                >
                  {trans.transactionType}
                </p>
              </div>
              <p className="border-b border-slate-700 p-4 pl-4: sm:pl-8 text-slate-400">
                {numberWithCommas(removeExtraDecimals(trans.amount, 3))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
