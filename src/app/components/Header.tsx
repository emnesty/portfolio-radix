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
              {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>

                  <div className="md:hidden w-full md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav> */}

              {/* <Menubar className="flex bg-white p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA4">
                <MenubarMenu>
                  <MenubarTrigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <HamburgerMenuIcon />
                  </MenubarTrigger>
                  <MenubarPortal>
                    <MenubarContent
                      className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                      align="start"
                      sideOffset={5}
                      alignOffset={-3}>
                      <MenubarItem className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                        <Link href="/">{translations.about}</Link>
                      </MenubarItem>
                      <MenubarItem className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                        <Link href="/">{translations.experience}</Link>
                      </MenubarItem>
                      <MenubarItem className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                        <Link href="/">{translations.cases}</Link>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarPortal>
                </MenubarMenu>
              </Menubar> */}
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
                        <ScrollLink to="about" smooth={true} duration={500}>
                          {translations.about}
                        </ScrollLink>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <ScrollLink to="experience" smooth={true} duration={500}>
                          {translations.experience}
                        </ScrollLink>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <ScrollLink to="cases" smooth={true} duration={500}>
                          {translations.cases}
                        </ScrollLink>
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
                      {" "}
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
