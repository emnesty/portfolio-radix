"use client"
import React, { useContext } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Button, Container, DropdownMenu, Flex, Link, Text } from "@radix-ui/themes"
import { LanguageContext } from "./LanguageProvider"
import TranslationSwitcher from "./TranslationSwitcher"
import { Link as ScrollLink } from "react-scroll"

import {
  CaretDownIcon,
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@radix-ui/react-menubar"
import { ThemeSwitcher } from "./ThemeSwitcher"

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
              <div>
                <Text weight="bold">{translations.name}</Text>
              </div>

              <div className="min-[630px]:hidden">
                <Flex gap="4">
                  <TranslationSwitcher onLanguageChange={languageContext.handleLanguageChange} />
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        <HamburgerMenuIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="w-64 min-[630px]:w-auto">
                      <DropdownMenu.Item>
                        <Link>
                          <ScrollLink to="about" smooth={true} duration={500}>
                            {translations.about}
                          </ScrollLink>
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <Link>
                          <ScrollLink to="experience" smooth={true} duration={500}>
                            {translations.experience}
                          </ScrollLink>
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <Link>
                          <ScrollLink to="cases" smooth={true} duration={500}>
                            {translations.cases}
                          </ScrollLink>
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>
              </div>

              <NavigationMenu className="max-sm:hidden">
                <NavigationMenuList className="flex gap-5">
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-2 py-2 text-[16px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link>
                      <ScrollLink to="about" smooth={true} duration={500}>
                        {translations.about}
                      </ScrollLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link>
                      <ScrollLink to="experience" smooth={true} duration={500}>
                        {translations.experience}
                      </ScrollLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="hover:bg-slate-800 focus:shadow-slate-800 group flex  items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                    <Link>
                      <ScrollLink to="cases" smooth={true} duration={500}>
                        {translations.cases}
                      </ScrollLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="max-sm:hidden">
                <TranslationSwitcher onLanguageChange={languageContext.handleLanguageChange} />
              </div>
            </div>
          </Flex>
        </Container>
      </header>
    </div>
  )
}

export default Header
