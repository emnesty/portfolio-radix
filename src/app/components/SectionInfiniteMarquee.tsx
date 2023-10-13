"use client"

import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Avatar, Box, Card, Container, Flex, Heading, Link, Quote, Text } from "@radix-ui/themes"
import React, { useContext, useState } from "react"
import { LanguageContext } from "./LanguageProvider"

const SectionInfiniteMarquee = () => {
  const languageContext = useContext(LanguageContext)
  if (!languageContext) throw new Error("InfiniteMarquee must be used within a LanguageProvider")
  const { translations } = languageContext

  const [isPausedLeft, setIsPausedLeft] = React.useState(false)
  const [isPausedRight, setIsPausedRight] = React.useState(false)

  const handleMouseEnterLeft = () => {
    setIsPausedLeft(true)
  }

  const handleMouseLeaveLeft = () => {
    setIsPausedLeft(false)
  }

  const handleMouseEnterRight = () => {
    setIsPausedRight(true)
  }

  const handleMouseLeaveRight = () => {
    setIsPausedRight(false)
  }

  return (
    <Container style={{ marginLeft: 15, marginRight: 15 }}>
      <div data-aos="fade-right" data-aos-duration="1100">
        <Heading as="h1" size="6" mt="4" mb="4">
          {translations.infinitemarqueesectiontitle}
        </Heading>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Text mt="4">
          <Box style={{ maxWidth: 600 }}>{translations.infinitemarqueesectiondescription}</Box>
        </Text>
      </div>
      <Flex direction="column" justify="center" style={{ overflow: "hidden", position: "relative" }}>
        <div
          className="relative flex flex-col pt-12 justify-center overflow-hidden
        before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]
        before:bg-[linear-gradient(to_right,rgba(23,25,22,1)_0%,rgba(255,255,255,0)_100%)]
        before:content-['']
        after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px]
        after:-scale-x-100
        after:bg-[linear-gradient(to_right,rgba(23,25,22,1)_0%,rgba(255,255,255,0)_100%)]
        after:content-['']">
          <div className="relative flex gap-10 overflow-hidden" data-aos="fade-left">
            <div
              className="animate-marquee flex min-w-[200%] shrink-0 items-center justify-around gap-6"
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
              style={{ animationPlayState: isPausedLeft ? "paused" : "running" }}>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/thais_maurin.webp" radius="full" fallback="TM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Thais Maurin
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Product Designer @ AB InBev
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Trabalhar com o Luciano foi uma experiência enriquecedora. É paciente, sempre disposto a
                      ensinar. Me acolheu e auxiliou a entender o contexto do produto, de forma clara,
                      detalhada e positiva...
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/ale.webp" radius="full" fallback="AM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Alexandre Mendonça
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Software Architect @ AmbevTech
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Uma das pessoas mais impressionantes que já conheci. Sem exageros. Quando conheci o
                      Luciano, ele trabalhava como operador de projeção no Cinema, e desde aquela época já
                      tinha um amplo...
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/marllon.webp" radius="full" fallback="MB" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Marllon Bianchini
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Support Analyst @ Group FCamara
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Luciano é um excelente profissional, se destaca pelo empenho e comprometimento, sempre
                      disposto a garantir e entregar aquilo que foi combinado.
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/augusto.webp" radius="full" fallback="AS" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Augusto Schuambach
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Support Analyst @ AmbevTech
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Profissional super criativo e com ótimo relacionamento em equipe.
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
            </div>
            <div
              className="animate-marquee flex min-w-[200%] shrink-0 items-center justify-around gap-6"
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
              style={{ animationPlayState: isPausedLeft ? "paused" : "running" }}>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/thais_maurin.webp" radius="full" fallback="TM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Thais Maurin
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Product Designer @ AB InBev
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Trabalhar com o Luciano foi uma experiência enriquecedora. É paciente, sempre disposto a
                      ensinar. Me acolheu e auxiliou a entender o contexto do produto, de forma clara,
                      detalhada e positiva...
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/ale.webp" radius="full" fallback="AM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Alexandre Mendonça
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Software Architect @ AmbevTech
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Uma das pessoas mais impressionantes que já conheci. Sem exageros. Quando conheci o
                      Luciano, ele trabalhava como operador de projeção no Cinema, e desde aquela época já
                      tinha um amplo...
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/marllon.webp" radius="full" fallback="MB" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Marllon Bianchini
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Support Analyst @ Group FCamara
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Luciano é um excelente profissional, se destaca pelo empenho e comprometimento, sempre
                      disposto a garantir e entregar aquilo que foi combinado.
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="3" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="5" src="/images/augusto.webp" radius="full" fallback="AS" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Augusto Schuambach
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Support Analyst @ AmbevTech
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Profissional super criativo e com ótimo relacionamento em equipe.
                    </Text>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/lucianoclecio/details/recommendations/">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
            </div>
          </div>
        </div>
      </Flex>
      <Flex direction="column" justify="center" style={{ overflow: "hidden", position: "relative" }}>
        <div
          data-aos="fade-right"
          className="relative flex flex-col pt-12 justify-center overflow-hidden
        before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]
        before:bg-[linear-gradient(to_right,rgba(23,25,22,1)_0%,rgba(255,255,255,0)_100%)]
        before:content-['']
        after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px]
        after:-scale-x-100
        after:bg-[linear-gradient(to_right,rgba(23,25,22,1)_0%,rgba(255,255,255,0)_100%)]
        after:content-['']">
          <div className="relative flex gap-10 overflow-hidden">
            <div
              className="animate-marquee flex min-w-[200%] shrink-0 items-center justify-around gap-6 [animation-direction:reverse]"
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
              style={{ animationPlayState: isPausedRight ? "paused" : "running" }}>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="3" align="center">
                  <Avatar size="3" radius="full" fallback="FD" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Flavio D.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Designer UI/UX para aplicativo web
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Excelente profissional
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" src="/images/yeloo.webp" radius="full" fallback="SM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Silvio Matos
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Redesign com Copy de Landing Page
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      O cara é profissional e atencioso, pode contratar sem medo pq ele sabe o que faz!
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" src="/images/bernardo.webp" radius="full" fallback="BB" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Bernardo B.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      UX/UI para LP de vendas do produto feito em framer
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Muito profissional e atencioso. Recomendo.
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="3" align="center">
                  <Avatar size="3" radius="full" fallback="MA" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Marcela A.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Telas software a partir de desenho em papel
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      O Luciano é absolutamente ágil!
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size-="1" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" radius="full" fallback="OS" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Osamad S.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Complete redesign of my website
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Truly exceptional - his professionalism, creativity, and attention to detail in crafting
                      my website exceeded all expectations, and he deserve to be recognized for his talents
                      and entrusted with more high-budgeted projects.
                    </Text>
                    <Link target="_blank" href="https://www.upwork.com/freelancers/~0109cf227e1e473338">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
            </div>
            <div
              className="animate-marquee flex min-w-[200%] shrink-0 items-center justify-around gap-6 [animation-direction:reverse]"
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
              style={{ animationPlayState: isPausedRight ? "paused" : "running" }}>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="3" align="center">
                  <Avatar size="3" radius="full" fallback="FD" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Flavio D.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Designer UI/UX para aplicativo web
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Excelente profissional
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" src="/images/yeloo.webp" radius="full" fallback="SM" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Silvio Matos
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Redesign com Copy de Landing Page
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      O cara é profissional e atencioso, pode contratar sem medo pq ele sabe o que faz!
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" src="/images/bernardo.webp" radius="full" fallback="BB" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Bernardo B.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      UX/UI para LP de vendas do produto feito em framer
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Muito profissional e atencioso. Recomendo.
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size="1" style={{ maxWidth: 400 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" radius="full" fallback="MA" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Marcela A.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Telas software a partir de desenho em papel
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      O Luciano é absolutamente ágil!
                    </Text>
                    <Link target="_blank" href="https://www.99freelas.com.br/user/lucianoclecio">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
              <Card size-="1" style={{ maxWidth: 500 }}>
                <Flex gap="5" align="center">
                  <Avatar size="3" radius="full" fallback="OS" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Osamad S.
                    </Text>
                    <Text as="div" size="1" color="gray">
                      Complete redesign of my website
                    </Text>
                    <Text as="div" size="2" weight="bold">
                      Truly exceptional - his professionalism, creativity, and attention to detail in crafting
                      my website exceeded all expectations, and he deserve to be recognized for his talents
                      and entrusted with more high-budgeted projects.
                    </Text>
                    <Link target="_blank" href="https://www.upwork.com/freelancers/~0109cf227e1e473338">
                      <Flex align="center" gap="2" mt="2">
                        {translations.view}
                        <ArrowTopRightIcon />
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </Card>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  )
}

export default SectionInfiniteMarquee
