"use client"

import { Badge, Container, Flex, Heading, Section, Text, Tooltip } from "@radix-ui/themes"
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
        <Flex gap="6" justify="between">
          <div>
            <Image style={{ borderRadius: 8 }} src="/img/MY2.jpg" width={550} height={550} alt="My Picture" />
          </div>
          <Flex direction="column" gap="2">
            <Heading>Sobre mim</Heading>
            <Text style={{ maxWidth: 500 }}>
              Me chamo Luciano e trabalho com tecnologia a mais de 10 anos, hoje atuo como Designer de Produto
              na AmbevTech, empresa do grupo Ambev / Anheuser-Busch InBev{" "}
            </Text>
            <Flex direction="column" gap="4">
              <Text weight="bold" mt="2">
                Empresas das quais já tive o prazer se realizar contribuições
              </Text>
              <Badge radius="full" size="2">
                <Badge>UI/UX Design</Badge>
                <Badge>Research</Badge>
                <Badge>Discovery</Badge>
                <Badge>Figma</Badge>
                <Badge>Usability Tests</Badge>
                <Tooltip content={translations.muchmore}>
                  <Badge>...</Badge>
                </Tooltip>
              </Badge>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionAbout
