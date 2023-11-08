/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { FC, ReactNode, useContext, useEffect } from "react"
import { Container, Flex, Heading, HoverCard, Link, Section, Strong, Text } from "@radix-ui/themes"
import Image from "next/image"
import { LanguageContext } from "./LanguageProvider"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const SectionHero = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("SectionHero must be used within a LanguageProvider")
  const { translations } = languageContext

  return (
    <Section className="bg-[url('/images/background-pattern-3.png')] bg-no-repeat bg-center bg-cover flex w-full h-[530px] mb-10 ">
      <Container className="max-[950px]:text-center">
        <Flex className="max-lg:mt-10 justify-between	max-sm:mt-12 max-[950px]:justify-center">
          <Flex className="flex flex-col justify-center items-center">
            <div data-aos="fade-up" data-aos-duration="1500">
              <Text>{translations.text}</Text>
            </div>
            <div data-aos="fade-up" data-aos-duration="1400">
              <Heading
                className="w-full max-w-[600px] max-sm:max-w-[400px] mt-4"
                size={{
                  initial: "8",
                  sm: "9",
                  md: "9",
                  xl: "9",
                }}
                as="h1"
                weight="bold">
                UX/UI Designer, Frontend developer.
              </Heading>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="w-full max-w-[450px] max-sm:max-w-[380px] mt-8">
              <Text>{translations.textdescription}</Text>
            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
              <Flex align="center" gap="6" className="max-[950px]:justify-center">
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link target="_blank" href="https://www.linkedin.com/in/lucianoclecio/">
                      <Flex align="center" gap="2" mt="4">
                        <LinkedInLogoIcon />
                        LinkedIn
                      </Flex>
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content size="1">
                    <Text as="div" size="1" style={{ maxWidth: 325 }}>
                      {translations.linkedintooltip}
                    </Text>
                  </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link target="_blank" href="https://github.com/emnesty">
                      <Flex align="center" gap="2" mt="4">
                        <GitHubLogoIcon />
                        Github
                      </Flex>
                    </Link>
                  </HoverCard.Trigger>
                  <HoverCard.Content size="1">
                    <Text as="div" size="1" style={{ maxWidth: 325 }}>
                      {translations.githubtooltip}
                    </Text>
                  </HoverCard.Content>
                </HoverCard.Root>
              </Flex>
            </div>
          </Flex>
          <div data-aos="zoom-in-up" className="max-[950px]:hidden">
            <Image
              style={{ borderRadius: 8 }}
              src="/images/MY.webp"
              width={300}
              height={300}
              alt="My Picture"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionHero
