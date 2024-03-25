import { Toggle } from '../ui/toggle'

interface searchedPlacesProps {
  authenticated: boolean
}

export function SearchedPlaces({ authenticated }: searchedPlacesProps) {
  return (
    <>
      <div className="w-[100vw] justify-center items-center flex flex-wrap mt-5 gap-1">
        <Toggle asChild>
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Corte de cabelo
          </span>
        </Toggle>
        <Toggle asChild>
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Sobrancelha
          </span>
        </Toggle>

        <Toggle asChild>
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Pintura de cabelo
          </span>
        </Toggle>

        <Toggle asChild>
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Barba
          </span>
        </Toggle>
        <span>is Auth? {authenticated}</span>
      </div>
    </>
  )
}
