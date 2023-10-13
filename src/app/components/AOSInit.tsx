"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const AOSInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
    })
  }, [])

  return null // Este componente não renderiza nada no DOM
}

export default AOSInit
