"use client"

import {
  Container,
  Grid,
  Section,
  Text,
  Strong,
  Inset,
  Card,
  Badge,
  Flex,
  Heading,
  Link,
  Button,
  AlertDialog,
  Dialog,
  DialogClose,
} from "@radix-ui/themes"
import Image from "next/image"
import React, { useContext } from "react"
import { projetosData } from "../projetosData"
import { LanguageContext } from "./LanguageProvider"
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons"

const SectionWorks = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("SectinWorks must be used within a LanguageProvider")
  const { translations } = languageContext
  return (
    <Section>
      <Container id="cases">
        {" "}
        {/*className="mr-[15px] ml-[15px]"> */}
        <Flex className="flex flex-col max-[950px]:text-center max-[950px]:justify-center max-[950px]:items-center">
          <div data-aos="fade-right" data-aos-duration="1100">
            <Heading>Trabalhos e Cases</Heading>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <Text>Alguns dos meus trabalhos e cases enquanto Designer e Desenvolvedor Frontend.</Text>
          </div>
        </Flex>
        <div data-aos="fade-right" data-aos-duration="900">
          <Grid
            columns="3"
            width="auto"
            gap="4"
            mt="8"
            className="max-xl:grid-cols-2 max-xl:grid max-md:grid-cols-1 max-[767px]:justify-center max-[767px]:items-center max-[767px]:flex max-[767px]:flex-col">
            {projetosData.map((projeto, index) => (
              <Card key={index} size="2" style={{ width: 350 }}>
                {" "}
                {/*projeto={projeto} */}
                <Inset side="top" pb="current">
                  <Image
                    style={{ borderRadius: 8 }}
                    src={projeto.imgsrc}
                    width={350}
                    height={350}
                    alt={projeto.title}
                  />
                </Inset>
                <Flex direction="column" gap="2">
                  <Flex gap="2">
                    {projeto.badges.map((badge: string, index: number) => (
                      <Badge key={index} size="1" className="max-w-full">
                        {badge}
                      </Badge>
                    ))}
                  </Flex>
                  <Text as="p" size="3">
                    <Strong>{projeto.title}</Strong> {/* {projeto.description} */}
                  </Text>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button variant="outline">{translations.view}</Button>
                    </Dialog.Trigger>
                    <Dialog.Content style={{ maxWidth: 850 }}>
                      <Dialog.Title>{projeto.title}</Dialog.Title>
                      <Dialog.Description size="2">
                        {projeto.description}
                        <Image
                          className="mt-4"
                          style={{ borderRadius: 8 }}
                          src={projeto.imgsrc}
                          width={1100}
                          height={1100}
                          alt={projeto.title}
                        />
                      </Dialog.Description>
                      <Flex gap="3" mt="4" justify="between">
                        <Flex gap="3">
                          <Button color="orange" variant="soft">
                            <Link target="_blank" href={projeto.github} rel="noopener noreferrer">
                              <Flex align="center" gap="2">
                                <GitHubLogoIcon />
                                Github
                              </Flex>
                            </Link>
                          </Button>
                          <Button color="orange" variant="soft">
                            <Link target="_blank" href={projeto.vercel} rel="noopener noreferrer">
                              <Flex align="center" gap="2">
                                <VercelLogoIcon />
                                Vercel
                              </Flex>
                            </Link>
                          </Button>
                        </Flex>
                        <DialogClose>
                          <Button variant="soft" color="gray">
                            Fechar
                          </Button>
                        </DialogClose>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                  <Flex gap="2"></Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  )
}

export default SectionWorks
