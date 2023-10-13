import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@radix-ui/themes/styles.css"
import { ThemeProvider } from "./components/ThemeProvider"
import AOSInit from "./components/AOSInit"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <title>Luciano Silva UX/UI Designer - Front-End Developer</title>
        <meta
          name="description"
          content="Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo."
        />
        <meta property="og:title" content="Luciano Silva UX/UI Designer - Front-End Developer" />
        <meta
          property="og:description"
          content="Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo."
        />
        <meta property="og:url" content="https://lucianosilva.dev" />
        <meta property="og:image" content="https://lucianosilva.dev/share-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lucianosilva.dev" />
        <meta name="twitter:creator" content="@LockerzLBR" />
        <meta name="twitter:title" content="Luciano Silva UX/UI Designer - Front-End Developer" />
        <meta
          name="twitter:description"
          content="Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo."
        />
        <meta name="twitter:image" content="https://lucianosilva.dev/opengraph-image.jpg" />
        <link rel="canonical" href="https://lucianosilva.dev" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#171916" />
      </Head>
      <body className={inter.className}>
        <AOSInit />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
