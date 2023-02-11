import { useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { CustomRainbowButton } from '../CustomRainbowButton'
import { Wallets } from './Nav.types'

export function Nav(): JSX.Element {
  const [showWallets, setShowWallets] = useState(false)
  const [currentChain, setCurrentChain] = useState<Wallets>()
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()

  function onClickChain(chain: Wallets): void {
    setCurrentChain(chain)
    setShowWallets(false)
  }

  return (
    <nav className="fixed top-0 inset-x-0 flex justify-between items-center px-6 py-5 pr-8 border-b bg-slate-200 border-slate-900">
      <h3 className="text-xl leading-3 font-bold text-slate-600">
        Multichain DeFi
      </h3>
      <div className="flex gap-5">
        {currentChain && (
          <p className="text-sm text-slate-600 py-3 mr-2">{currentChain}</p>
        )}
        <button
          onClick={() => setShowWallets(!showWallets)}
          disabled={isConnected}
          className="text-sm text-slate-600 rounded-lg bg-slate-200 disabled:bg-slate-400 disabled:text-slate-500 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
        >
          Select chain
        </button>
        {isConnected && (
          <button
            onClick={() => disconnect()}
            className="text-sm font-bold text-slate-600 rounded-lg bg-slate-200 px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
          >
            Disconnect
          </button>
        )}
        <CustomRainbowButton disabled={!currentChain} />
      </div>
      {showWallets && (
        <div className="absolute top-24 right-36 rounded-lg bg-slate-200 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
          <ul className="flex flex-col items-start text-sm text-slate-600">
            <li className="w-full flex border-b border-slate-900">
              <button
                onClick={() => onClickChain('Solana')}
                className="text-left w-full px-6 pr-5 py-4 rounded-lg active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
              >
                Solana
              </button>
            </li>
            <li className="w-full flex">
              <button
                onClick={() => onClickChain('Ethereum')}
                className="text-left w-full px-6 pr-5 py-4 rounded-lg active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
              >
                Ethereum
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
