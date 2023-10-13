import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@radix-ui/themes/styles.css"
import { ThemeProvider } from "./components/ThemeProvider"
import AOSInit from "./components/AOSInit"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Luciano Silva UX/UI Designer - Front-End Developer",
  description:
    "Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo.",
  metadataBase: new URL("https://lucianosilva.dev/"),
  openGraph: {
    type: "website",
    url: "https://lucianosilva.dev/",
    title: "Luciano Silva UX/UI Designer - Front-End Developer",
    description:
      "Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo.",
    siteName: "Luciano Silva UX/UI Designer - Front-End Developer",
    images: [
      {
        url: "https://www.lucianosilva.dev/images/opengraph-image.jpg",
      },
    ],
  },
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AOSInit />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
