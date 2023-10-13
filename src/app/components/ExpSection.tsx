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
            <Text weight="bold">Product Designer</Text>
            <Badge ml="2" color="green">
              Atual
            </Badge>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Criando protótipos de soluções para a logística interna do produto (WMS e Logan) em diferentes
            níveis de fidelidade com as ferramentas mais recentes, conduzindo pesquisas e testes de
            usabilidade, e colaborando com a equipe para brainstorming de novas características e definição de
            critérios de sucesso. Fomento a cultura e prática de UX alinhadas às necessidades do negócio. Uso
            diário de ferramentas como Figma, Maze, FullStory, entre outras, para documentação e geração de
            insumos decisórios, além de apresentar descobertas e resultados das pesquisas e testes de
            usabilidade à equipe, conduzindo entrevistas com usuários.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[100%] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Nov 2020
            </Badge>
            <Text weight="bold">Senior Support Analyst</Text>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Como Especialista em Suporte e Sustentação, auxiliei no gerenciamento do WMS na AmBev, atuando na
            resolução de incidentes via ServiceNow, análises via SQL Server e monitoramento dos serviços do
            sistema. Também prestei suporte ao sistema PromaX ERP utilizado pela AmBev no Brasil, acompanhando
            o processo de faturamento desde a emissão do pedido até a entrega ao cliente. Trabalhei em
            conjunto com usuários finais e outras áreas de TI para garantir a continuidade operacional dos
            sistemas e a satisfação do cliente interno e externo.
          </Text>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[280px] before:px-px before:bg-[#FFA057] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#F76B15] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <Badge className="sm:absolute left-0 inline-flex items-center justify-center font-semibold uppercase  mb-3 sm:mb-0">
              Out 2015
            </Badge>
            <Text weight="bold">Support Analyst</Text>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Prestei suporte aos sistemas PromaX, WMS e UNIDOCS na AmBev, acompanhando o faturamento,
            gerenciamento de carregamentos e emissão de documentos de transporte. Atendi usuários, resolvi
            incidentes via ServiceNow, realizei análises via SQL Server e MongoDB, gerei scripts SQL, analisei
            logs, acompanhei Jiras e monitorei serviços via painéis e alertas PINPOINT.
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
            <Flex gap="2">
              <Text weight="bold">Support Assistant</Text>
              <Badge radius="full">mai de 2014 - out de 2015 · 1 ano 6 meses</Badge>
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
            <Flex gap="2">
              <Text weight="bold">Support and Monitoring - Internship</Text>
              <Badge radius="full">jun de 2013 - fev de 2014 · 9 meses</Badge>
            </Flex>
          </div>
          <Text className="text-[#FFFFFFAF]">
            Suporte ao sistema FIS da Volkswagen, incluindo monitoramento em tempo real, análise de logs,
            resolução de incidentes seguindo normas SLA e ITIL, além de manutenção de bancos de dados IBM DB2.
            Comunicação com o Front Office sobre incidentes. Suporte ao sistema LINCS para controle de
            fornecimento JIT, resolução de incidentes via Service Center Cosima, manutenção e gestão do banco
            de dados MS SQL Server, incluindo Backup, Restore e manipulação de registros das tabelas.
          </Text>
        </div>
      </div>
    </Container>
  )
}

export default ExpSection
