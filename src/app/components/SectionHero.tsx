/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useContext } from "react"
import { Container, Flex, Heading, HoverCard, Link, Section, Strong, Text } from "@radix-ui/themes"
import Image from "next/image"
import { LanguageContext } from "./LanguageProvider"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const SectionHero = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("SectionHero must be used within a LanguageProvider")
  const { translations } = languageContext

  return (
    <Section className="bg-[url('/img/background-pattern-3.png')] bg-no-repeat bg-center bg-cover flex w-full h-[530px] mb-10 ">
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex className="max-lg:mt-10 max-sm:mt-12" justify="between">
          <Flex direction="column" justify="center">
            <Text>{translations.text}</Text>
            <Heading
              className="w-full max-w-[600px] mt-4"
              size={{
                initial: "7",
                sm: "9",
                md: "9",
                xl: "9",
              }}
              as="h1"
              weight="bold">
              UX/UI Designer, Frontend developer.
            </Heading>
            <Text className="w-full max-w-[550px] max-sm:max-w-[420px] mt-8">
              {translations.textdescription}
            </Text>
            <Flex align="center" gap="6">
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
          </Flex>
          <div className="max-lg:hidden">
            <Image
              style={{ borderRadius: 8 }}
              src="/images/MY.jpeg"
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
