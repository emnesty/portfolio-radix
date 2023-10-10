"use client"

import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import {
  Badge,
  Container,
  Flex,
  Grid,
  Heading,
  HoverCard,
  Link,
  Section,
  Separator,
  Text,
  Tooltip,
} from "@radix-ui/themes"
import Image from "next/image"
import React, { useContext } from "react"
import { LanguageContext } from "./LanguageProvider"

const SectionAbout = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("SectionHero must be used within a LanguageProvider")
  const { translations } = languageContext

  return (
    <Section>
      <Container className="mt-8 mb-8 mr-[15px] ml-[15px]">
        <Flex className="flex justify-between gap-1.5 items-center max-lg:flex max-lg:flex-col">
          <div>
            <Image
              className="max-lg:w-[400px] max-lg:h-[500px] rounded-lg max-lg:mb-8"
              src="/images/MY2.jpg"
              width={500}
              height={500}
              alt="My Picture"
            />
          </div>
          <Flex direction="column" gap="2">
            <Heading>Sobre</Heading>
            <Text style={{ maxWidth: 500 }}>
              Me chamo Luciano e trabalho com tecnologia a mais de 10 anos, hoje atuo como Designer de Produto
              na AmbevTech, empresa do grupo Ambev / Anheuser-Busch InBev.
            </Text>
            <Separator my="3" size="4" />
            <Text style={{ maxWidth: 500 }}>
              Como Designer de Produto, procuro atuar de ponta a ponta durante todo o processo de concepção de
              negócio, participando de refinamentos com stackholders, desenvolvedores e analistas de negócio,
              garantindo que o usuário seja levado em conta em todas as discussões.
            </Text>
            <Flex direction="column" gap="4">
              <Text weight="bold" mt="2">
                Algumas das minhas skills
              </Text>
              <Text>Product Design</Text>
              <Grid columns="3" gap="3" className="max-w-[400px]">
                <Badge size="2" className="flex justify-center align-center">
                  UI/UX Design
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  Research
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  Discovery
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  Figma
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  Usability
                </Badge>
              </Grid>
              <Text>Frontend</Text>
              <Grid columns="3" gap="3" className="max-w-[400px">
                <Badge size="2" className="flex justify-center align-center">
                  HTML
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  CSS/SASS
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  JavaScript
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  NextJS
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  TypeScript
                </Badge>
                <Badge size="2" className="flex justify-center align-center">
                  ReactJS
                </Badge>
              </Grid>
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
