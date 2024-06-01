import { ColorThemeType } from '@/core/constants/theme'
import styled, { css } from 'styled-components'

export type sizeVariants = 'sm' | 'md'

interface IStatusBox {
  variant: sizeVariants
  backgroundColor: ColorThemeType
  textColor: ColorThemeType
  rounding: 'rounded' | 'rounded-none'
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.text.xs};
        width: 5.875rem;
        padding: 0.375rem;
      `
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.typography.text.sm};
        width: 6.25rem;
        padding: 0.375rem;
      `
  }
}

export const StatusBox = styled.div<IStatusBox>`
  display: flex;
  justify-content: center;
  font-weight: 600;

  cursor: pointer;

  ${({ variant }) => sizeVariants(variant)};

  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  color: ${({ theme, textColor }) => theme.colors[textColor]};

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '24px'
      case 'rounded-none':
        return '0'
      default:
        return '8px'
    }
  }};

  &:hover {
    opacity: 0.9;
  }

  transition: 0.3s ease all;
`

export const Icon = styled.div``
