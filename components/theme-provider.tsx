"use client"
import { ThemeProvider as NextThemesProvider, type UseThemeProps } from "next-themes"
import type { ReactNode } from "react"

type ThemeProviderProps = UseThemeProps & {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

