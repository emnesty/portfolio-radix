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
      <Container id="about" className="mt-8 mb-8 mr-[15px] ml-[15px]">
        <Flex className="flex justify-between items-center max-lg:flex max-lg:flex-col">
          <div data-aos="zoom-in-up">
            <Image
              className="max-lg:w-[400px] max-lg:h-[500px] rounded-lg max-lg:mb-8"
              src="/images/MY2.webp"
              width={500}
              height={500}
              alt="My Picture"
            />
          </div>
          <Flex direction="column">
            <Flex className="flex flex-col max-[950px]:text-center max-[950px]:justify-center max-[950px]:items-center">
              <div data-aos="fade-left" data-aos-duration="900">
                <Heading>Sobre</Heading>
              </div>
              <div data-aos="fade-left" data-aos-duration="800" className="max-w-[500px]">
                <Text>
                  Me chamo Luciano e trabalho com tecnologia a mais de 10 anos, hoje atuo como Designer de
                  Produto na AmbevTech, empresa do grupo Ambev / Anheuser-Busch InBev.
                </Text>
              </div>
              <div data-aos="fade-left" data-aos-duration="700">
                <Separator my="3" size="4" />
              </div>
              <div data-aos="fade-left" data-aos-duration="600" className="max-w-[500px]">
                <Text>
                  Como Designer de Produto, procuro atuar de ponta a ponta durante todo o processo de
                  concepção de negócio, participando de refinamentos com stackholders, desenvolvedores e
                  analistas de negócio, garantindo que o usuário seja levado em conta em todas as discussões.
                </Text>
              </div>
            </Flex>
            <Flex
              className="flex flex-col max-[950px]:text-center max-[950px]:justify-center max-[950px]:items-center"
              gap="4">
              <div data-aos="fade-left" data-aos-duration="500" className="mt-2">
                <Text weight="bold">Algumas das minhas skills</Text>
              </div>
              <div data-aos="fade-left" data-aos-duration="500">
                <Text>Product Design</Text>
              </div>
              <div data-aos="fade-left" data-aos-duration="400">
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
              </div>
              <div data-aos="fade-left" data-aos-duration="300">
                <Text>Frontend</Text>
              </div>
              <div data-aos="fade-left" data-aos-duration="200">
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
                <div className="mt-4">
                  <Text weight="bold">Mais informações sobre minha carreira</Text>
                </div>
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Link target="_blank" href="https://www.linkedin.com/in/lucianoclecio/">
                      <Flex className="flex max-[950px]:text-center max-[950px]:justify-center max-[950px]:items-center mt-4 gap-4">
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
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default SectionAbout
