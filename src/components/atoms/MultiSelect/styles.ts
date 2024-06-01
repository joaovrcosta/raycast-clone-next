import styled, { css } from 'styled-components'
import { contrastingColor } from '@/core/utils/contrast'

export type backgroundVariants =
  | 'primary_500'
  | 'secondary_500'
  | 'success_500'
  | 'danger_500'
  | 'black'
  | 'white'

interface SelectIconProps {
  sizeOf: 'md' | 'lg'
}

interface SelectProps extends SelectIconProps {
  background: backgroundVariants
  hasIcon?: boolean
  hug?: boolean
}

export const SelectClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray_100};

  cursor: pointer;

  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_200};
  }
`

export const SelectItem = styled.div`
  color: ${({ theme }) => theme.colors.gray_800};

  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-wrap: nowrap;
`

export const SelectListItem = styled.div`
  color: ${({ theme }) => theme.colors.gray_900};
  font-size: ${({ theme }) => theme.typography.text.sm};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: auto;
  height: 2.25rem;

  padding: 0 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
  transition: 0.3s ease all;
`

export const SelectList = styled.div<SelectProps>`
  position: absolute;
  bottom: -0.25rem;
  transform: translateY(100%);

  left: 0;
  width: 100%;

  z-index: 10;

  background-color: ${({ background, theme }) => theme.colors[background]};

  // borderbottom on selectList item but on the last one
  ${SelectListItem}:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
  }

  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 4px;

  /* box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray_400}; */

  max-height: 150px;
  overflow-y: auto;
`

export const Select = styled.div<SelectProps>`
  display: flex;
  overflow-x: hidden;
  max-width: 16rem;
  text-wrap: nowrap;

  outline: none;
  border: 1px solid transparent;

  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0.5rem 0.75rem;
      min-height: 3.13rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.5rem 0.55rem;
      min-height: 2.625rem;
    `}

  ${SelectItem} {
    ${({ sizeOf }) =>
      sizeOf == 'lg' &&
      css`
        font-size: ${({ theme }) => theme.typography.text.xs};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        padding: 0.15rem 0.35rem;

        ${SelectClose} {
          width: 1rem;
          height: 1rem;
        }
      `}

    ${({ sizeOf }) =>
      sizeOf == 'md' &&
      css`
        font-size: ${({ theme }) => theme.typography.text.xs};
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        padding: 0.1rem 0.25rem;

        ${SelectClose} {
          width: 0.75rem;
          height: 0.75rem;
        }
      `}
  }

  ${({ hasIcon }) =>
    hasIcon
      ? css`
          border-radius: 0 4px 4px 0px;
        `
      : css`
          border-radius: 4px;
        `}

  padding-right: 3rem;

  width: ${({ sizeOf }) => {
    if (sizeOf == 'md') {
      return '13rem'
    }
    return '18.75rem'
  }};

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        max-width: 20rem;
      `
    }
  }}

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    color: ${({ theme }) => theme.colors.gray_700};
  `}

  background-color: ${({ theme, background }) => theme.colors[background]};

  color: ${({ theme, background }) => {
    const isConstrasting = contrastingColor(theme.colors[background])
    return isConstrasting ? theme.colors.black : theme.colors.white
  }};

  border: 1px solid
    ${({ theme, background }) =>
      background == 'white' ? theme.colors.gray_200 : 'transparent'};

  &:disabled {
    cursor: text;
  }

  &:focus {
    border: 1px solid
      ${({ theme, background }) =>
        background == 'white' ? theme.colors.gray_800 : 'rgba(0, 0, 0, 0.15)'};
  }

  position: relative;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: 0.3s ease all;

  p {
    user-select: none;
  }
`

interface ISelectBox {
  hug: boolean
  background: backgroundVariants
  collapsed?: boolean
}

export const SelectBox = styled.div<ISelectBox>`
  flex: 1;

  position: relative;

  width: fit-content;
  max-width: 16rem;

  ${({ hug }) =>
    hug &&
    css`
      width: 100%;
      max-width: 20rem;
    `}

  height: 100%;

  img {
    position: absolute;
    right: 15px;
    top: calc(50% + 1.5px);
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;

    filter: ${({ theme, background }) => {
      const isConstrasting = contrastingColor(theme.colors[background])
      return isConstrasting ? 'invert(1)' : 'invert(0)'
    }};

    ${({ collapsed }) =>
      collapsed &&
      css`
        transform: translateY(-50%) rotate(180deg);
      `}

    transition: 0.3s ease all;
  }
`

interface ISelectContainer extends SelectIconProps {
  hug: boolean
}

export const SelectContainer = styled.div<ISelectContainer>`
  display: flex;
  align-items: center;
  z-index: 999;
  max-width: 16rem;

  min-height: 2.25rem;

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      min-height: 3.13rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      min-height: 2.625rem;
    `}

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        max-width: 20rem;
      `
    }
  }}

  position: relative;
`

export const PlaceholderIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_500};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.75rem;

  border-radius: 4px 0 0 4px;

  color: white;

  height: 100%;
`
