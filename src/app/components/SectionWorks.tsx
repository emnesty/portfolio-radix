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
} from "@radix-ui/themes"
import Image from "next/image"
import React, { useContext } from "react"
import { projetosData } from "../projetosData"
import { LanguageContext } from "./LanguageProvider"

const SectionWorks = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("Header must be used within a LanguageProvider")
  const { translations } = languageContext

  return (
    <Section>
      <Container>
        <Heading>Trabalhos e Cases</Heading>
        <Text>Alguns dos meus trabalhos e cases enquanto Designer e Desenvolvedor Frontend.</Text>
        <Grid
          columns="3"
          width="auto"
          gap="4"
          mt="8"
          className="max-xl:grid-cols-2 max-xl:grid max-md:grid-cols-1">
          {projetosData.map((projeto, index) => (
            <Link href={`/projetos/${projeto.id}`} key={projeto.id}>
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
                  <Button variant="outline">{translations.view}</Button>
                  <Flex gap="2"></Flex>
                </Flex>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default SectionWorks
