import { QueryClient, QueryClientProvider } from 'react-query'
import { Nav } from '~/components/Nav'
import './App.css'
import { Transactions } from '~/components/Transactions'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-slate-200 min-h-screen">
        <Nav />
        <article>
          <main>
            <Transactions />
          </main>
        </article>
      </div>
    </QueryClientProvider>
  )
}

export default App
