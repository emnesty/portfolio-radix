import { Theme } from "@radix-ui/themes"
import SectionAbout from "./components/SectionAbout"
import Header from "./components/Header"
import LanguageProvider from "./components/LanguageProvider"
import SectionHero from "./components/SectionHero"
import SectionInfiniteMarquee from "./components/SectionInfiniteMarquee"

export default function Home() {
  return (
    <LanguageProvider>
      <Theme accentColor="orange" grayColor="olive">
        <Header />
        <SectionHero />
        <SectionInfiniteMarquee />
        <SectionAbout />
      </Theme>
    </LanguageProvider>
  )
}
