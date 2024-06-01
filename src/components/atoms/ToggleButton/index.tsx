import * as S from './styles'
import { useEffect, useState } from 'react'

interface SwitchProps {
  label: string
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  defaultChecked?: boolean
}

export function ToggleButton({
  label,
  defaultChecked,
  onCheckedChange,
  checked: propChecked // Renomeamos a propriedade checked para propChecked
}: SwitchProps) {
  const [checked, setChecked] = useState(defaultChecked || false) // Estado interno para armazenar o estado atual do componente

  // Função para lidar com mudanças no estado do componente
  const handleCheckedChange = (newChecked: boolean) => {
    setChecked(newChecked) // Atualiza o estado interno
    if (onCheckedChange) {
      onCheckedChange(newChecked) // Chama a função de callback, se fornecida
    }
  }

  // Atualiza o estado interno quando defaultChecked é alterado
  useEffect(() => {
    if (defaultChecked !== undefined && defaultChecked !== checked) {
      setChecked(defaultChecked)
    }
  }, [defaultChecked])

  return (
    <S.Container>
      <S.SwitchRoot
        defaultChecked={defaultChecked}
        checked={propChecked !== undefined ? propChecked : checked} // Usa propChecked se fornecido, caso contrário, usa o estado interno
        onCheckedChange={handleCheckedChange} // Usa a função de tratamento de mudança de estado interna
      >
        <S.SwitchThumb />
      </S.SwitchRoot>
      <S.SwitchLabel>{label}</S.SwitchLabel>
    </S.Container>
  )
}
