"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { Button } from "@radix-ui/themes"

export const ThemeSwitcher = () => {
  const [icon, setIcon] = useState(<SunIcon />)
  const [isDark, setIsDark] = useState(true)
  const { setTheme } = useTheme()

  useEffect(() => {
    setIcon(isDark ? <SunIcon /> : <MoonIcon />)
  }, [isDark])

  return (
    <Button
      onClick={() => {
        setIsDark(!isDark)
        setIcon(isDark ? <SunIcon /> : <MoonIcon />)
        setTheme(isDark ? "light" : "dark")
      }}>
      {icon}
    </Button>
  )
}
