import { ColorThemeType } from '@/core/constants/theme'
import styled, { css } from 'styled-components'

export type sizeVariants = 'md' | 'lg'
interface ITextarea {
  background: ColorThemeType
  sizeOf: sizeVariants
  hasIcon?: boolean
  isFocused?: boolean
  hug?: boolean
}

export const TextareaContainer = styled.div``

export const Textarea = styled.textarea<ITextarea>`
  background-color: ${({ theme, background }) => theme.colors[background]};
  padding: 10px 1rem;
  border-radius: 8px;
  border-color: 1px solid #707070;
  outline: none;
  width: 34.25rem;

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.625rem 1rem;
      font-size: ${({ theme }) => theme.typography.text.md};
    `}
  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.typography.text.md};
    `}

    
    ${({ isFocused }) =>
    isFocused &&
    css`
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary_500};
      border-color: ${({ theme }) => theme.colors.white};
      transition: 0.3s ease all;
    `}

  &::placeholder {
    height: fit-content;
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        max-width: 780px;
      `
    }
  }}
`
