import Link from 'next/link'
import { ToggleTheme } from './toggle-theme'

export function Header() {
  return (
    <>
      <div className="w-[100vw] h-[10vh] flex items-center justify-around border-b">
        <Link href="/">
          <span className="text-lg">
            Sched
            <b className="text-primary">Shave</b>
          </span>
        </Link>
        <ToggleTheme />
      </div>
    </>
  )
}
