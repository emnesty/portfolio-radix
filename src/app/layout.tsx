import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@radix-ui/themes/styles.css"
import { ThemeProvider } from "./components/ThemeProvider"
import AOSInit from "./components/AOSInit"
import { DefaultSeo } from "next-seo"
import { NextSeo } from "next-seo"
import SEO from "./components/SeoConfig"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Luciano Silva",
  description: "Luciano Silva UX/UI Designer - Front-End Developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AOSInit />
        <NextSeo
          title="Luciano Silva UX/UI Designer - Front-End Developer"
          description="Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional. Sinta-se à vontade para se conectar comigo no LinkedIn e explorar meus projetos no Github para ter uma visão mais aprofundada do meu expertise técnico e criativo."
          canonical="https://lucianosilva.dev"
          openGraph={{
            url: "https://lucianosilva.dev",
            title: "Luciano Silva UX/UI Designer - Front-End Developer",
            description:
              "Olá, sou Luciano Silva, um UX/UI Designer e Desenvolvedor Frontend com experiência em grandes empresas de tecnologia. Neste portfólio, você poderá explorar meus trabalhos criativos, recomendações e habilidades adquiridas ao longo da minha jornada profissional.",
            images: [
              {
                url: "https://lucianosilva.dev/share-og.jpg",
                width: 1200,
                height: 630,
                alt: "Imagem de compartilhamento de Luciano Silva",
                type: "image/jpeg",
              },
            ],
            siteName: "Portfólio Luciano Silva",
          }}
          twitter={{
            handle: "@LockerzLBR",
            site: "@lucianosilva.dev",
            cardType: "summary_large_image",
          }}
        />
        {/* <DefaultSeo {...SEO} /> Use o DefaultSeo com as suas configurações de SEO */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
