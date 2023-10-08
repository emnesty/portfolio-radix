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
    <Section className="bg-[url('/img/background-pattern-3.png')] bg-no-repeat bg-center bg-cover flex w-full h-[530px] mb-10">
      <Container style={{ marginLeft: 15, marginRight: 15 }}>
        <Flex justify="between">
          <Flex direction="column" justify="center">
            <Text>{translations.text}</Text>
            <Heading as="h1" weight="bold" mt="4" style={{ maxWidth: 600, fontSize: 60, lineHeight: 1 }}>
              UX/UI Designer, Front-end developer.
            </Heading>
            <Text mt="4" style={{ maxWidth: 600 }}>
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
          <div>
            <Image style={{ borderRadius: 8 }} src="/img/MY.jpeg" width={300} height={300} alt="My Picture" />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionHero
