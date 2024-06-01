import styled, { css } from 'styled-components'
import { ColorThemeType } from '@/core/constants/theme'
import { contrastingColor } from '@/core/utils/constract'

export type roundingVariants = 'rounded' | 'rounded-full' | 'rounded-none'
export type sizeVariants = 'sm' | 'md' | 'lg'
export type fillVariants = 'contained' | 'outlined'

interface IButton {
  backgroundColor: ColorThemeType
  variant: sizeVariants
  rounding: roundingVariants
  fill: fillVariants
  hug: boolean
  boxShadow: boolean
  loading: boolean
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.text.xs};
        padding: 0.5rem 1.5rem;
        height: 2.25rem;
      `
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.typography.text.sm};
        padding: 0.5rem 0.75rem;
        height: 40px;
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.text.md};
        padding: 0.75rem 2.25rem;
        height: 3rem;
      `
  }
}

export const Button = styled.button<IButton>`
  font-family: 'Inter', sans-serif;
  white-space: nowrap;

  ${({ variant }) => sizeVariants(variant)}
  height: 36px;

  border: 1px solid transparent;

  color: white;

  background-color: ${({ theme, backgroundColor, fill }) =>
    fill == 'contained' ? theme.colors[backgroundColor] : 'transparent'};

  color: ${({ theme, backgroundColor, fill }) => {
    if (fill == 'outlined') {
      return theme.colors[backgroundColor]
    }
    const isConstrasting = contrastingColor(theme.colors[backgroundColor])
    return isConstrasting ? theme.colors.gray_800 : theme.colors.gray_100
  }};

  border: ${({ fill, theme, backgroundColor }) => {
    switch (fill) {
      case 'outlined':
        return `1px solid ${theme.colors[backgroundColor]}`
    }
  }};

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.5rem'
      case 'rounded-full':
        return '9999px'
      case 'rounded-none':
        return '0'
      default:
        return '0.25rem'
    }
  }};

  box-shadow: ${({ boxShadow }) =>
    boxShadow
      ? '0 0 0 2px rgba(0, 0, 0, .5), 0 0 14px 0 hsla(0, 0%, 100%, .19), inset 0 -1px .4px 0 rgba(0, 0, 0, .2), inset 0 1px .4px 0 #fff;'
      : 'none'};

  ${({ hug }) =>
    css`
      width: ${!hug ? 'fit-content' : '100%'};
    `}

  cursor: pointer;

  ${({ loading }) =>
    loading
      ? css`
          opacity: 0.5;
          cursor: default;
          pointer-events: none;
        `
      : css`
          &:hover {
            background-color: white;
            /* opacity: 0.8; */
          }
        `}

  /* icons support */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 14px;

  font-weight: 600;

  transition: 0.3s ease all;

  &:disabled {
    pointer-events: none;
  }
`
