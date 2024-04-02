import { ThemeProvider } from '@/components/theme-provider'
import { SearchProvider } from '@/providers/search_provider'
import { ReactNode } from 'react'

type childrenType = {
  children: ReactNode
}

export function Providers({ children }: childrenType) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </>
  )
}
