import Image from 'next/image'

interface childrenProps {
  id?: string
  name: string
  distance: number
  photoUrl: string
}

export function Place(children: childrenProps) {
  const { name, distance, photoUrl } = children

  return (
    <>
      <div className=" flex flex-wrap mb-2 mt-5">
        <div className="flex w-[100%] border items-center gap-2">
          <div>
            <Image src={photoUrl} alt="" height={100} width={100} />
          </div>
          <span>{name}</span>
          <span>{distance}km</span>
        </div>
      </div>
    </>
  )
}
