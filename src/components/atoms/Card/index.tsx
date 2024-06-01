import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'

interface CardProps {
  backgroundColor: ColorThemeType
  borderColor?: ColorThemeType
  variant: S.sizeVariants
  boxShadow: boolean
  rounding: 'rounded' | 'rounded-none'
  hug?: boolean
  hugVertical?: boolean
  children: React.ReactNode
}

export default function Card({
  backgroundColor,
  borderColor,
  variant,
  boxShadow,
  rounding,
  children,
  hug = true,
  hugVertical = false
}: CardProps) {
  return (
    <S.Card
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      variant={variant}
      boxShadow={boxShadow}
      rounding={rounding}
      hug={hug}
      hugVertical={hugVertical}
    >
      {children}
    </S.Card>
  )
}
