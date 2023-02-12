# ROADMAP

1. Clean up logic for wallets, right now Rainbowkit reconnects even if you disconnect on the modal (that's weird). And technically becasue of that you can have both the solana and the ethereum wallet connected. Which can lead to some weird errors when doing the deposit
2. Add missing type for the `any`
3. Related to the disconnect maybe disconnect the other wallets if you connect to another one in the app
4. Remove the weird transactions that are less than 1000000
5. Instead of writing the chain maybe a small icon for sol and eth
6. Get transaction amount in chain currency something like `$ 100 (0.001ETH)`
7. For mobile instead of a table, the info could be viewed in a more "row-ish" approach (better mobile styles)
