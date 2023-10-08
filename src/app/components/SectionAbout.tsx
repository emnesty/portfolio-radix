"use client"

import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Badge, Container, Flex, Heading, HoverCard, Link, Section, Text, Tooltip } from "@radix-ui/themes"
import Image from "next/image"
import React, { useContext } from "react"
import { LanguageContext } from "./LanguageProvider"

const SectionAbout = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("SectionHero must be used within a LanguageProvider")
  const { translations } = languageContext

  return (
    <Section>
      <Container mt="8" mb="8">
        <Flex gap="6" justify="between" align="center">
          <div>
            <Image style={{ borderRadius: 8 }} src="/img/MY2.jpg" width={500} height={500} alt="My Picture" />
          </div>
          <Flex direction="column" gap="2">
            <Heading>Sobre</Heading>
            <Text style={{ maxWidth: 500 }}>
              Me chamo Luciano e trabalho com tecnologia a mais de 10 anos, hoje atuo como Designer de Produto
              na AmbevTech, empresa do grupo Ambev / Anheuser-Busch InBev.
            </Text>
            <Text style={{ maxWidth: 500 }} mt="4">
              Como Designer de Produto, procuro atuar de ponta a ponta durante todo o processo de concepção de
              negócio, participando de refinamentos com stackholders, desenvolvedores e analistas de negócio,
              garantindo que o usuário seja levado em conta em todas as discussões.
            </Text>
            <Flex direction="column" gap="4">
              <Text weight="bold" mt="2">
                Algumas das minhas skills
              </Text>
              <Badge radius="full" size="2">
                Designer
                <Badge>UI/UX Design</Badge>
                <Badge>Research</Badge>
                <Badge>Discovery</Badge>
                <Badge>Figma</Badge>
                <Badge>Usability Tests</Badge>
                <Tooltip content={translations.muchmore}>
                  <Badge>...</Badge>
                </Tooltip>
              </Badge>
              <Badge radius="full" size="2">
                Front-end
                <Badge>HTML</Badge>
                <Badge>CSS/SASS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>NextJS</Badge>
                <Badge>ReactJS</Badge>
                <Badge>RadixUI</Badge>
                <Tooltip content={translations.muchmore}>
                  <Badge>...</Badge>
                </Tooltip>
              </Badge>
              <Text weight="bold" mt="2">
                Mais informações sobre minha carreira
              </Text>
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
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionAbout
