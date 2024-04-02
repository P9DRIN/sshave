import { Place } from '@/components/places'
import { SearchContext } from '@/providers/search_provider'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Header } from '../home/Components/Header'
import { CaretRight } from 'phosphor-react'

export default function SearchedResults() {
  const { nearbyEstablishmentsList } = useContext(SearchContext)

  const router = useRouter()
  const search = router.query.search?.toString() ?? ''

  const filter = nearbyEstablishmentsList.nearby.filter((item) => {
    return item.name.toLowerCase().includes(search)
  })

  return (
    <>
      <Header />
      {filter.length > 0 && (
        <>
          <div className="w-[100%] h-[5vh] flex items-end  ">
            <span className="ml-5 ">Itens encontrados</span>
          </div>
        </>
      )}
      {filter.length > 0 ? (
        filter.map((item) => {
          return (
            <Place
              key={item.id}
              name={item.name}
              distance={item.distance}
              photoUrl={item.photoUrl}
            />
          )
        })
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-2 h-[90vh]">
            <span className="text-5xl">
              😢<b className="text-foreground">Ooops!</b>
            </span>
            <span className="w-[100%] text-center text-neutral-500 dark:text-neutral-600">
              Não foi possível encontrar um estabelecimento com o nome:
              <br />
              <b className="text-black dark:text-white">&#34;{search}&#34;</b>
            </span>
            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center border w-[80%] p-1 hover:animate-pulse hover:text-primary"
            >
              Buscar novamente <CaretRight size={18} />
            </button>
          </div>
        </>
      )}
    </>
  )
}
