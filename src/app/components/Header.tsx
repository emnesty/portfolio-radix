"use client"
import React, { useContext } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Container, Flex, Link, Text } from "@radix-ui/themes"
import { LanguageContext } from "./LanguageProvider"
import TranslationSwitcher from "./TranslationSwitcher"

const Header = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("Header must be used within a LanguageProvider")
  const { translations } = languageContext
  return (
    <div data-aos="fade-down">
      <header
        className="border-b-[0.2px] border-neutral-800 p-2 fixed w-full  z-[99] bg-[#171916]"
        color="olive">
        <Container style={{ marginLeft: 20, marginRight: 20 }}>
          <Flex align="center">
            <div className="flex justify-between items-center w-full">
              <div className="max-sm:hidden">
                <Text weight="bold">{translations.name}</Text>
              </div>
              <NavigationMenu>
                <NavigationMenuList className="flex gap-5">
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-2 py-2 text-[16px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link href="/">{translations.about}</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link href="/">{translations.experience}</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link href="/">{translations.cases}</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <TranslationSwitcher onLanguageChange={languageContext.handleLanguageChange} />
            </div>
          </Flex>
        </Container>
      </header>
    </div>
  )
}

export default Header
