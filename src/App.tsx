import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-slate-200 min-h-screen">
        <article>
          <main>app</main>
        </article>
      </div>
    </QueryClientProvider>
  )
}

export default App
