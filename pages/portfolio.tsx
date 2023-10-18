// pages/portfolio.tsx
import { projetosData } from "../src/app/projetosData"
import Link from "next/link"

interface Projeto {
  id: number
  title: string
  description: string
  imgsrc: string
  badges: string[]
}

const Portfolio = () => {
  return (
    <div>
      {projetosData.map((projeto: Projeto) => (
        <Link href={`/projetos/${projeto.id}`} key={projeto.id}>
          <div>{projeto.title}</div>
          {/* ... outros detalhes */}
        </Link>
      ))}
    </div>
  )
}

export default Portfolio
