import { Badge, Container, Flex, Text, Link, Heading } from "@radix-ui/themes"
import React from "react"

const ExpSection = () => {
  return (
    <Container style={{ marginLeft: 15, marginRight: 15 }}>
      <div data-aos="fade-left" data-aos-duration="900">
        <Heading>Experiência</Heading>
      </div>
      <div data-aos="fade-left" data-aos-duration="800" className="max-w-[500px] mb-9">
        <Text>Minha trajetória profissional ao longo dos anos</Text>
      </div>
      <div className="-my-6">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <Flex>
            <Link size="6" weight="bold" href="https://www.ambevtech.com.br/" target="_blank">
              AmbevTech
            </Link>
          </Flex>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[100%] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Mar 2022
            </Badge>
            <Flex gap="2" direction="column">
              <Text weight="bold">Product Designer</Text>
              <Badge radius="full" className="items-center justify-center">
                mar de 2022 - o momento · 1 ano 8 meses
                <Badge color="green">Atual</Badge>
              </Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Desenvolvimento de protótipos para logística interna utilizando ferramentas modernas como Figma e
            Maze, condução de pesquisas de usabilidade e colaboração em brainstormings para aprimorar
            características do produto. Promovendo a cultura de UX alinhada às necessidades empresariais e
            apresentando descobertas e resultados de pesquisas à equipe.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[100%] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Nov 2020
            </Badge>
            <Flex gap="2" direction="column">
              <Text weight="bold">Senior Support Analyst</Text>
              <Badge radius="full" className="items-center justify-center">
                nov de 2020 - mar de 2022 · 1 ano 5 meses
              </Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Auxiliei na gestão do WMS, resolvendo incidentes via ServiceNow e monitorando os serviços do
            sistema. Ofereci suporte ao ERP PromaX, acompanhando o ciclo de faturamento e trabalhando com
            diferentes setores para assegurar a continuidade operacional e a satisfação do cliente.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[300px] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Out 2015
            </Badge>
            <Flex gap="2" direction="column">
              <Text weight="bold">Support Analyst</Text>
              <Badge radius="full" className="items-center justify-center">
                out de 2015 - out de 2020 · 5 anos 1 mês
              </Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Ofereci suporte a diversos sistemas na AmBev, atendendo usuários, gerenciando carregamentos e
            resolvendo incidentes. Realizei análises via SQL Server e MongoDB, além de monitorar serviços,
            garantindo uma operação fluida dos sistemas.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <Link size="6" weight="bold" href="https://www.linx.com.br/" target="_blank">
            Linx
          </Link>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[100%] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              May 2014
            </Badge>
            <Flex gap="2" direction="column">
              <Text weight="bold">Support Assistant</Text>
              <Badge radius="full" className="items-center justify-center">
                mai de 2014 - out de 2015 · 1 ano 6 meses
              </Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Atendimento ao usuário final, análise de problemas, documentação e testes. Consultas via banco de
            dados Postgresql via CMD, análise de logs e simulação de problemas para encaminhamento ao
            Desenvolvimento, atendimento de chamados por chat ou telefone.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <Link size="6" weight="bold" href="https://www.t-systems.com/br/pt" target="_blank">
            T-Systems
          </Link>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[full] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Jun 2013
            </Badge>
            <Flex gap="2" direction="column">
              <Text weight="bold">Support and Monitoring - Internship</Text>
              <Badge radius="full" className="items-center justify-center">
                jun de 2013 - fev de 2014 · 9 meses
              </Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Na Volkswagen, dei suporte ao sistema FIS, monitorando em tempo real, analisando logs e resolvendo
            incidentes conforme normas SLA e ITIL. Prestei assistência ao sistema LINCS, gerenciando o banco
            de dados MS SQL Server, e comunicando incidentes ao Front Office, garantindo a eficiência na
            entrega JIT.
          </Text>
        </div>
      </div>
    </Container>
  )
}

export default ExpSection
