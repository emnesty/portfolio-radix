// pages/projetos/[slug].tsx
"use client"

import "@radix-ui/themes/styles.css"
import { ThemeProvider } from "@/app/components/ThemeProvider"
import { Badge, Flex, Container, Heading, Text, Theme, Section, Box, Tooltip, Button } from "@radix-ui/themes"
import { GetStaticPaths, GetStaticProps } from "next"
import { projetosData } from "../../src/app/projetosData"
import BackButton from "@/app/components/BackButton"
import Image from "next/image"
import { useState } from "react"
import { Share1Icon } from "@radix-ui/react-icons"
import readingTime from "reading-time"

interface Projeto {
  id: number
  title: string
  description: string
  descriptiondetails: string
  imgsrc: string
  badges: string[]
}

interface ProjetoProps {
  projeto: Projeto
}

const ProjetoPage = ({ projeto }: ProjetoProps) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const stats = readingTime(projeto.description)

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(`https://localhost:3000/projetos/${projeto.id}`)
      setTooltipVisible(true)
      setTimeout(() => setTooltipVisible(false), 2000) // Esconde o tooltip após 2 segundos
    } catch (error) {
      console.error("Erro ao copiar texto:", error)
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Section>
        <Box
          style={{
            background: "var(--gray-a2)",
            borderRadius: "var(--radius-3)",
            marginLeft: 32,
            marginRight: 32,
          }}>
          <Container style={{ marginLeft: 32, marginRight: 32, paddingTop: 16, paddingBottom: 16 }}>
            <Theme accentColor="orange" grayColor="olive">
              <Flex gap="4" className=" flex items-center">
                <BackButton />
                <Tooltip open={tooltipVisible} content="Link copiado!">
                  <Button variant="outline" onClick={handleShareClick}>
                    <Share1Icon />
                    Compartilhar
                  </Button>
                </Tooltip>
                {/* <Text>Tempo de leitura: {stats.text}</Text> */}
              </Flex>
              <Flex direction="column" gap="2" mt="4">
                <Heading mb="4">{projeto.title}</Heading>

                {/* Imagem do Projeto */}
                <Image
                  src={projeto.imgsrc}
                  alt={projeto.title}
                  width={1060}
                  height={689}
                  layout="responsive"
                />
                {/* Descrição do Projeto */}
                <Text>{projeto.descriptiondetails}</Text>
              </Flex>

              {/* Badges do Projeto */}
              <Flex gap="2" mt="4">
                {projeto.badges.map((badge: string, index: number) => (
                  <Badge key={index} size="2" className="max-w-full">
                    {badge}
                  </Badge>
                ))}
              </Flex>
            </Theme>
          </Container>
        </Box>
      </Section>
    </ThemeProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projetosData.map((projeto: Projeto) => ({
    params: { slug: projeto.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projeto = projetosData.find((projeto: Projeto) => projeto.id.toString() === params?.slug)
  return { props: { projeto } }
}

export default ProjetoPage
