import { Container } from "@radix-ui/themes"
import React from "react"

const SectionFooter = () => {
  return (
    <footer className="bg-neutral-800 rounded-lg shadow m-4 dark:bg-gray-800">
      <Container>
        <div className="w-full flex items-center justify-center mx-auto max-w-screen-xl p-4 md:flex md:items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://lucianosilva.dev/" className="hover:underline">
              Luciano Silva
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default SectionFooter
