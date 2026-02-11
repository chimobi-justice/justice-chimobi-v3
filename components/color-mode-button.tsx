"use client"

import { useTheme } from "next-themes"
import { ClientOnly, IconButton, Skeleton } from "@fidely-ui/react"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const title = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={handleToggleTheme}
        size="lg"
        variant="subtle"
        colorPalette="gray"
        rounded="full"
        aria-label={title}
        title={title}
      >
        {theme === "light" ? (
          <IoSunnyOutline size="17px" />
        ): (
          <FaMoon size="17px" />
        )}
      </IconButton>
    </ClientOnly>
  )
}