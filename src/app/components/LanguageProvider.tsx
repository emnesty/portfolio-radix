"use client"
import React, { useState, createContext, ReactNode } from "react"
import * as pt from "../../locales/pt"
import * as es from "../../locales/es"
import * as en from "../../locales/en"



interface LanguageContextProps {
  selectedLanguage: string
  handleLanguageChange: (value: string) => void

  translations: typeof pt.translations | typeof en.translations | typeof es.translations
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("pt")

  const translations =
    {
      en: en.translations,
      pt: pt.translations,
      es: es.translations,
    }[selectedLanguage] || pt.translations

  const handleLanguageChange = (value: string) => {
    // console.log("LanguageProvider handleLanguageChange called with value:", value) // Linha adicionada

    setSelectedLanguage(value)
  }

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleLanguageChange, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
