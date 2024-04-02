import { useContext } from 'react'
import { Toggle } from '../../../../components/ui/toggle'
import { SearchContext, filtersProps } from '@/providers/search_provider'

export function Filters() {
  const { filterList } = useContext(SearchContext)

  function handleToGetFilters(data: filtersProps) {
    const { pressed, toggleId } = data

    if (pressed) {
      filterList.push(data)
    }
    if (!pressed) {
      const getIndex = filterList.findIndex(
        (item) => item.toggleId === toggleId,
      )
      filterList.splice(getIndex, 1)
    }
  }

  return (
    <>
      <div className="w-[100vw] justify-center items-center flex flex-wrap mt-5 gap-1">
        <Toggle
          asChild
          onPressedChange={(pressed) =>
            handleToGetFilters({ pressed, toggleId: 1 })
          }
        >
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Corte de cabelo
          </span>
        </Toggle>
        <Toggle
          asChild
          onPressedChange={(pressed) =>
            handleToGetFilters({ pressed, toggleId: 2 })
          }
        >
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Sobrancelha
          </span>
        </Toggle>

        <Toggle
          asChild
          onPressedChange={(pressed) =>
            handleToGetFilters({ pressed, toggleId: 3 })
          }
        >
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Pintura de cabelo
          </span>
        </Toggle>

        <Toggle
          asChild
          onPressedChange={(pressed) =>
            handleToGetFilters({ pressed, toggleId: 4 })
          }
        >
          <span className="text-xs flex items-center justify-center w-36 hover:border-b-2 border-b-2 border-b-background hover:border-b-primary">
            Barba
          </span>
        </Toggle>
      </div>
    </>
  )
}
