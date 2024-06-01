import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

export type backgroundVariants = 'primary_500' | 'white' | 'gray_900'
export type sizeVariants = 'md' | 'lg'

interface InputProps extends BoxShadowProps {
  background: backgroundVariants
  sizeOf: sizeVariants
  hasIcon?: boolean
  isFocused?: boolean
}

interface BoxShadowProps {
  boxShadow?: boolean
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'md':
      return css`
        padding: 0 0.5rem;
      `
    case 'lg':
      return css`
        padding: 0 0.75rem;
      `
  }
}

const baseProps = css<InputProps>`
  width: 100%;
  width: -webkit-fill-available;
  outline: none;
  border: 1px solid transparent;

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border: 1px solid transparent;
    color: ${theme.colors.gray_900};
    font-size: ${theme.typography.text.xs};
    font-weight: ${theme.typography.weight.medium};
  `}

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0 0.75rem;
      font-size: ${({ theme }) => theme.typography.text.md};
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0 0.5rem;
      font-size: ${({ theme }) => theme.typography.text.sm};
    `}


  ${({ hasIcon }) =>
    hasIcon
      ? css`
          border-radius: 0 4px 4px 0px;
        `
      : css`
          border-radius: 8px;
        `}


  &:disabled {
    cursor: text;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_600};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  &:focus {
    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        border: 1px solid ${theme.colors.white};
        box-shadow: 0 0 0 3px ${theme.colors.gray_300};
        /* transition: 0.2s ease all; */
      `}
  }

  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `}

  display: block;
  height: 100%;
  height: -webkit-fill-available;

  transition: 0.3s ease all;
`

export const Input = styled.input<InputProps>`
  ${baseProps}

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0.75rem 1rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.5rem;
      width: 100%;
    `}
`

interface InputBoxInterface {
  hasError: boolean
  hug?: boolean
}

export const InputBox = styled.div<InputBoxInterface>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1.5rem !important;
    `}
`

export const InputWithMask = styled(InputMask)<InputProps>`
  ${baseProps}

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0.75rem 1rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.5rem;
    `}
`

export const InputError = styled.div`
  position: absolute;
  margin-top: 0.25rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

interface InputContainerInterface {
  hug?: boolean
  sizeOf: sizeVariants
}

export const InputContainer = styled.div<InputContainerInterface>`
  display: flex;
  align-items: center;
  height: 46px;

  width: ${({ sizeOf }) => (sizeOf == 'lg' ? '300px' : '200px')};

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
      `
    }
  }}

  border: 1px solid ${({ theme }) => theme.colors.gray_200};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
  }

  border-radius: 4px;

  transition: 0.3s ease all;
`

export const PlaceholderIcon = styled.div<BoxShadowProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_100};

  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0.75rem;

  border-radius: 4px 0 0 4px;

  height: 100%;

  color: white;

  transition: 0.3s ease all;
`

export const InputLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.text.sm};
  margin-bottom: 1rem;
`
