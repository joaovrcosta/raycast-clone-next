import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'

interface TextareaProps {
  backgroundColor: ColorThemeType
  sizeOf: S.sizeVariants
  placeholder: string
  isFocused?: boolean
  hug?: boolean
}

export default function Textarea({
  sizeOf,
  backgroundColor,
  placeholder,
  isFocused,
  hug,
}: TextareaProps) {
  return (
    <>
      <S.TextareaContainer>
        <S.Textarea
          placeholder={placeholder}
          background={backgroundColor}
          sizeOf={sizeOf}
          isFocused={isFocused}
          hug={hug}
        ></S.Textarea>
      </S.TextareaContainer>
    </>
  )
}
