import React from 'react'
import ReactDOM from 'react-dom/client'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, mainnet, createClient, WagmiConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import '@rainbow-me/rainbowkit/styles.css'
import './index.css'

const queryClient = new QueryClient()

const { chains, provider } = configureChains([mainnet], [publicProvider()])
const { connectors } = getDefaultWallets({
  appName: 'Multichain DeFi',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
)
