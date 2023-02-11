import React from 'react'
import ReactDOM from 'react-dom/client'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, mainnet, createClient, WagmiConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import '@rainbow-me/rainbowkit/styles.css'
import './index.css'
import { SolanaWalletAdapter } from './components/SolanaWalletAdapter'

const queryClient = new QueryClient()

const { chains, provider } = configureChains([mainnet], [publicProvider()])
const { connectors } = getDefaultWallets({
  appName: 'Multichain DeFi',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true, // not sure if we want this reconnect is weird
  connectors,
  provider,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <SolanaWalletAdapter>
            <App />
          </SolanaWalletAdapter>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
)
