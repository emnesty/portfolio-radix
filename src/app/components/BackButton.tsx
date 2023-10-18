// components/BackButton.tsx
import React from "react"
import { useRouter } from "next/router"
import { Button } from "@radix-ui/themes"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

const BackButton = () => {
  const router = useRouter()

  return (
    <Button variant="outline" onClick={() => router.back()}>
      <ArrowLeftIcon width="16" height="16" />
      Voltar
    </Button>
  )
}

export default BackButton
