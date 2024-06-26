import { z } from 'zod'
import axios from 'axios'
import { MapPin } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import Image from 'next/image'
import { Filters } from '@/pages/home/Components/Searchbar/filters'
import { SearchContext } from '@/providers/search_provider'
import { useRouter } from 'next/router'

interface coordsType {
  latitude: number | null
  longitude: number | null
}
interface addressObject {
  address: {
    road: string
    city: string
    suburb: string
  }
}

const searchSchema = z.object({
  search: z
    .string()
    .min(3, { message: 'No minimo três caracteres para realizar uma busca' }),
})

type searchInput = z.infer<typeof searchSchema>

export function Searcher() {
  const [userLocation, setUserLocation] = useState<coordsType>()
  const [data, setData] = useState<addressObject>()

  const router = useRouter()

  const { nearbyEstablishmentsList } = useContext(SearchContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<searchInput>({
    resolver: zodResolver(searchSchema),
  })
  const watchSearch = watch('search')

  async function handleSearch(data: searchInput) {
    const { search } = data
    await router.push(`/results/${search}`)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          console.error('error gettin user position', error)
        },
      )
    } else {
      console.log('geoloc is not supp by this browser')
    }
  }, [data])

  async function getLocal() {
    if (userLocation) {
      try {
        const response = await axios.get(
          // `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=${restauran}&lat=${userLocation.latitude}&lon=${userLocation.longitude}`,
          `https://nominatim.openstreetmap.org/reverse?lat=${userLocation?.latitude}&lon=${userLocation?.longitude}&format=json&zoom=18&addressdetails=1`,
        )
        return setData(response.data)
      } catch (error) {
        console.error('ocorreu um erro', error)
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 w-[100%] mt-2">
        <div className="flex flex-col ml-1 mr-1 w-[80vw]">
          <div className="flex items-center justify-between mb-1 md: gap-5 ml-1 mr-1">
            <span className="text-xs text-pretty font-medium ">
              {data ? <b>Perto de </b> : <></>}
              {data?.address?.road}
              {data ? <span>,</span> : <></>} {data?.address.suburb}
            </span>
            <button
              onClick={getLocal}
              className="text-primary hover:text-foreground text-xs font-bold"
            >
              <MapPin />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleSearch)} className="w-[100%] flex">
            <input
              className="bg-input border-primary border-2  p-1 rounded-md w-[90%]"
              placeholder="Filtre ou encontre..."
              {...register('search')}
            />
            <button
              className="flex items-center justify-center w-[10%] bg-primary ml-1 rounded-md hover:opacity-90"
              type="submit"
              disabled={isSubmitting}
            >
              <MagnifyingGlass />
            </button>
          </form>
          {errors ? (
            <span className="text-xs mt-1 text-justify">
              {errors.search?.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        {watchSearch ? (
          <div className="border w-[90%] absolute top-[9.6rem] bg-neutral-950 rounded-md">
            {nearbyEstablishmentsList.nearby
              .filter((establishment) =>
                establishment.name
                  .toLowerCase()
                  .includes(watchSearch.toLowerCase()),
              )
              .map((establishment) => (
                <div
                  key={establishment.id}
                  className="flex w-[100%] gap-1 justify-between border border-primary p-3"
                >
                  <div className="w-[20%] border">
                    <Image
                      alt=""
                      src={establishment.photoUrl}
                      width={320}
                      height={320}
                    />
                  </div>
                  <span className="w-[50%] flex items-center ">
                    {establishment.name}
                  </span>
                  <span className="flex items-center justify-center w-16 text-right">
                    em {establishment.distance}km
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Filters />
    </>
  )
}
