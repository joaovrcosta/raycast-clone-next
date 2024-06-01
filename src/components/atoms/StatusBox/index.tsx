import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'

interface StatusBoxProps {
  backgroundColor: ColorThemeType
  textColor: ColorThemeType
  variant: S.sizeVariants
  rounding: 'rounded' | 'rounded-none'
  content: string
  children: React.ReactNode
}

export default function StatusBox({
  variant,
  backgroundColor,
  rounding,
  textColor,
  content,
  children,
}: StatusBoxProps) {
  return (
    <S.StatusBox
      backgroundColor={backgroundColor}
      textColor={textColor}
      variant={variant}
      rounding={rounding}
    >
      {content}
      <S.Icon>{children}</S.Icon>
    </S.StatusBox>
  )
}
