import { Header } from './Components/Header'
import { Searcher } from './Components/Searchbar/searchbar'

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <Header />
        <Searcher />
      </div>
    </>
  )
}
