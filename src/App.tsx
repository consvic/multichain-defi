import { Nav } from '~/components/Nav'
import './App.css'
import { Transactions } from '~/components/Transactions'

function App(): JSX.Element {
  return (
    <div className="App bg-slate-200 min-h-screen">
      <Nav />
      <article>
        <main>
          <Transactions />
        </main>
      </article>
    </div>
  )
}

export default App
