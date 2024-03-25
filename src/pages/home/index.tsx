import { SearchedPlaces } from '@/components/places/searched-places'
import { Header } from './Components/Header'
import { Searchbar } from './Components/Searchbar/searchbar'
// import { useState } from 'react'

export default function Home() {
  // const [auth, setAuth] = useState(false)

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <Header />
        <Searchbar />
        <SearchedPlaces authenticated={true} />
      </div>
    </>
  )
}
