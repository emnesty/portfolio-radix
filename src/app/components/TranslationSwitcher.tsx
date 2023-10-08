// Importando as dependências necessárias
import { Select } from "@radix-ui/themes"

// Definindo a interface para as propriedades do componente
interface TranslationSwitcherProps {
  onLanguageChange?: (value: string) => void
}

// Adicionando a propriedade onLanguageChange ao componente
const TranslationSwitcher: React.FC<TranslationSwitcherProps> = ({ onLanguageChange }) => {
  // Renomeando a função para evitar confusão, pois não estamos mais atualizando o estado local
  const handleLanguageChange = (value: string) => {
    // console.log("handleLanguageChange called with value:", value) // Adicionado log
    if (onLanguageChange) {
      onLanguageChange(value)
    }
  }

  return (
    <Select.Root onValueChange={handleLanguageChange}>
      {" "}
      {/* Adicionando a função handleLanguageChange ao evento onValueChange */}
      <Select.Trigger placeholder="Português" defaultValue="pt" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Languages</Select.Label>
          <Select.Item value="pt">Português</Select.Item>
          <Select.Item value="en">English</Select.Item>
          <Select.Item value="es">Spanish</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default TranslationSwitcher
