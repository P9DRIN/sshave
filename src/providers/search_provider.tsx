import { ReactNode, createContext } from 'react'

interface SearchProviderProps {
  children: ReactNode
}

interface nearbyEstablishmentsProps {
  id: string
  name: string
  distance: number
  photoUrl: string
  tags: Array<number>
}
interface nearbyEstablishmentsListProps {
  nearby: nearbyEstablishmentsProps[]
}
export interface filtersProps {
  pressed: boolean
  toggleId: number
}

interface SearchContextType {
  nearbyEstablishmentsList: nearbyEstablishmentsListProps
  filterList: filtersProps[]
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchProvider({ children }: SearchProviderProps) {
  const nearbyEstablishmentsList = {
    nearby: [
      {
        id: '1',
        name: 'Barbearia Da Elegancia',
        distance: 0.5,
        photoUrl: '/firstBarberShop.png',
        tags: [1],
      },
      {
        id: '2',
        name: 'Barbearia Do Corte Rapido',
        distance: 2,
        photoUrl: '/secondBarberShop.jpg',
        tags: [1, 2, 3, 4],
      },
      {
        id: '3',
        name: 'Barbearia Da Vida',
        distance: 2.5,
        photoUrl: '/thirdBarberShop.png',
        tags: [1, 2],
      },
      {
        id: '4',
        name: 'Barbearia De Estilo',
        distance: 2.5,
        photoUrl: '/forthBarberShop.png',
        tags: [1, 2],
      },
      {
        id: '5',
        name: 'Barbearia Raiz',
        distance: 2.5,
        photoUrl: '/fiftBarberShop.jpg',
        tags: [1, 2],
      },
      {
        id: '6',
        name: 'Barbearia Old Skull',
        distance: 2.5,
        photoUrl: '/sixtyBarberShop.png',
        tags: [1, 2],
      },
      {
        id: '7',
        name: 'Barbearia Velha Guarda',
        distance: 2.5,
        photoUrl: '/seventyBarberShop.png',
        tags: [1, 2],
      },
    ],
  }

  const filterList: filtersProps[] = []

  return (
    <SearchContext.Provider
      value={{
        nearbyEstablishmentsList,
        filterList,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
