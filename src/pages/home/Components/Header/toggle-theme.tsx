import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { List } from 'phosphor-react'
import { useState } from 'react'

export function ToggleTheme() {
  const { setTheme } = useTheme()

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <List size={22} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="cursor-pointer bg-ring dark:bg-primary w-20 mt-2 "
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:cursor-pointer">
              {isDarkMode ? <Moon /> : <Sun />}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  className="p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                  onClick={() => {
                    setTheme('light')
                    setIsDarkMode(false)
                  }}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                  onClick={() => {
                    setTheme('dark')
                    setIsDarkMode(true)
                  }}
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                  onClick={() => setTheme('system')}
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:cursor-pointer">
              <User />
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {isAuth ? (
                  <></>
                ) : (
                  <DropdownMenuItem
                    className="p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                    onClick={() => {
                      setIsAuth(true)
                    }}
                  >
                    Login
                  </DropdownMenuItem>
                )}
                {isAuth ? (
                  <>
                    <DropdownMenuItem
                      className=" p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                      onClick={() => {
                        console.log('profile')
                      }}
                    >
                      Perfil
                    </DropdownMenuItem>
                    {isAuth ? (
                      <DropdownMenuItem
                        className=" p-1 hover:bg-green-400 focus:bg-green-400 dark:hover:bg-ring hover:cursor-pointer"
                        onClick={() => {
                          setIsDarkMode(false)
                          console.log('logout')
                        }}
                      >
                        Logout
                      </DropdownMenuItem>
                    ) : (
                      <> </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
