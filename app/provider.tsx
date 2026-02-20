"use client"

import { ThemeProvider } from "next-themes"

interface ProviderProps {
  children: React.ReactNode 
}

export const Provider = (props: ProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
      enableSystem
    >
      {props.children}
    </ThemeProvider>
  )
}