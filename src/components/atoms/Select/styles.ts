import styled, { css } from 'styled-components'
import { ColorThemeType } from '/core/constants/theme'

interface SelectIconProps {
  sizeOf: 'md' | 'lg'
}

interface SelectProps extends SelectIconProps {
  background: ColorThemeType
  hasIcon?: boolean
  hug?: boolean
  collapsed: boolean
}

export const SelectClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray_200};
  padding: 0.68rem;

  svg {
    min-width: 16px;
    min-height: 16px;
  }
  cursor: pointer;

  transition: 0.3s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_500};
  }
`

export const SelectItem = styled.div`
  color: ${({ theme }) => theme.colors.gray_800};

  background-color: ${({ theme }) => theme.colors.gray_100};
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;
`

interface ISelectListItem {
  selected: boolean
}

export const SelectListItem = styled.div<ISelectListItem>`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: ${({ theme }) => theme.typography.text.sm};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: auto;
  height: 2.25rem;

  padding: 0 0.5rem;

  border: 1px solid transparent;

  transition: 0.3s ease all;

  ${({ selected }) =>
    selected
      ? css`
          color: ${({ theme }) => theme.colors.primary_500};
          /* background-color: ${({ theme }) => theme.colors.gray_200}; */
        `
      : css`
          &:hover {
            color: ${({ theme }) => theme.colors.gray_700};
            cursor: pointer;
            /* background-color: ${({ theme }) => theme.colors.gray_100}; */
          }
        `}
`

export const SelectList = styled.div<SelectProps>`
  position: absolute;
  transform: translateY(100%);

  left: 0;
  bottom: 0;
  width: 100%;

  z-index: 10;

  background-color: ${({ background, theme }) => theme.colors[background]};

  // borderbottom on selectList item but on the last one
  ${SelectListItem}:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
  }

  border: 0.5px solid ${({ theme }) => theme.colors.gray_200};
  border-top: none;
  border-radius: 0 0 4px 4px;

  max-height: 150px;
  overflow-y: auto;
`

export const Select = styled.div<SelectProps>`
  cursor: pointer;
  width: auto;

  outline: none;
  border: 1px solid transparent;

  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0.75rem 0.75rem;
      min-height: 3rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.5rem 0.35rem;
      min-height: 2.625rem;
    `}

  ${SelectItem} {
    ${({ sizeOf }) =>
      sizeOf == 'lg' &&
      css`
        font-size: ${({ theme }) => theme.typography.text.sm};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        padding: 0.35rem 0.85rem;

        ${SelectClose} {
          width: 1rem;
          height: 1rem;
        }
      `}

    ${({ sizeOf }) =>
      sizeOf == 'md' &&
      css`
        font-size: ${({ theme }) => theme.typography.text.sm};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        padding: 0.1rem 0.45rem;

        ${SelectClose} {
          width: 0.75rem;
          height: 0.75rem;
        }
      `}
  }

  ${({ hasIcon, collapsed }) =>
    hasIcon
      ? css`
          border-radius: 0 4px 4px 0px;
        `
      : css`
          border-radius: ${collapsed ? '4px' : '4px 4px 0 0'};
        `}

  padding-right: 3rem;

  width: ${({ sizeOf }) => {
    if (sizeOf == 'md') {
      return '13rem'
    }
    return '20rem'
  }};
  max-width: 780px;

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        max-width: 100%;
      `
    }
  }}

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    color: ${({ theme }) => theme.colors.gray_700};
  `}

  background-color: ${({ theme, background }) => theme.colors[background]};

  color: ${({ theme, background }) => theme.colors.gray_100};

  border: 1px solid ${({ theme, background }) => theme.colors.gray_200};
  ${({ theme, collapsed }) =>
    !collapsed &&
    css`
      /* border-bottom: none; */
    `}

  &:disabled {
    cursor: text;
  }

  &:focus {
    border: 1px solid ${({ theme, background }) => theme.colors.gray_400};
  }

  position: relative;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  transition: 0.3s ease all;
`

interface ISelectBox {
  hug: boolean
  background: ColorThemeType
  collapsed?: boolean
}

export const SelectBox = styled.div<ISelectBox>`
  flex: 1;

  position: relative;

  width: fit-content;
  max-width: 780px;

  ${({ hug }) =>
    hug &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  height: 100%;

  img {
    position: absolute;
    right: 15px;
    top: calc(50%);
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;
    filter: invert(1);

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

export const SelectContainer = styled.button<ISelectContainer>`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  z-index: 999;

  display: flex;
  align-items: center;

  min-height: 2.25rem;

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      min-height: 3rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      min-height: 2.25rem;
    `}

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        /* max-width: 780px; */
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
