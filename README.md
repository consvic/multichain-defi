# Multichain DeFi

_This is a multichain app that allows you to connect/disconnect to either your Ethereum wallet or Solana wallet. You can see the total sum of all deposits and withdraws across both chains. You can make a deposit based off the wallet you have connected_

- This project uses Vite, React, Typescript, TailwindCSS, styled-components for the main tech.
  For web3 it's using the following libraries: wagmi, ethers, rainbowkit, solana web3 and Solana's Wallet Connector.
- I added some basic Prettier and ESlint configurations just for sanity.
- For the requests it's using axios with react-query

## Requirements

- Node
- npm

## Instructions

1. Go to project and run `npm install`
2. It's using vite so run `npm run dev` to run the app locally
3. The console will display in which port you can find the app

## Requirements

- [x] I want to see a summary of total deposits and transactions
  - [x] Page should show the sum of deposits in dollars (two decimals) across chains (labeled as TVL) less withdrawals
  - [x] Page should load even if no chain is specified / wallet connected
- [x] I want to connect my wallet
  - [x] I should be able to choose what chain I want to connect to
  - [x] I should be able to connect to a corresponding wallet (based on chain)
  - [x] I should be able to see what my wallet address is when I'm connected
  - [x] I should be able to disconnect my wallet
- [x] I want to deposit some money (note: no money is deposited, just use the API endpoint to mock)
  - [x] I should be depositing to the chain I've selected
  - [x] I shouldn't be able to deposit unless I'm connected to a wallet

## General notes

### There were some things that with more time I would've like to clean up:

- One `any` typing for generic jsons (this is cause I converted snake_case to camelCase)
- Get rid of styled-components, initially I thought I needed to make more custom adjustments to the third party wallet connections but it turned out mostly has handled by TailwindCSS. I only really needed to modify the solana button and that with a bit more time could've move to plain css. I'm more accustomed to styled components so that felt like the faster choice.
- Add unit tests to the `utils/general.ts` file. Mostly cause that's the one that handles the money and the API jsons
- Unified the 'solana' and 'ethereum' string types I declared. I repeated them in two components, could create some sort of map/library to unify labels with the API types.

### Other notes

Something that confused me a bit was the "`amount` is USDC stored with 6 decimal places". But I think I let my self go with some amounts coming from the API being 100 for example, which confused me at first.

### Learnings

Solana's documentation is not very user friendly and I founds the Wallet Connector's docs not very useful. I think this is where I struggled the most. However, the components ended up working similarly to Rainbowkit.
