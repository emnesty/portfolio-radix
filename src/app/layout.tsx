import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@radix-ui/themes/styles.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Luciano Silva",
  description: "Luciano Silva UX/UI Designer - Front-End Developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
