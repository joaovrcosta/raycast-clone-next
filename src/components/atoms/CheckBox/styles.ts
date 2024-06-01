import styled, { css } from 'styled-components';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Text } from '../Text';
import { ColorThemeType } from '@/core/constants/theme';

export type sizeVariants = 'sm' | 'md';

interface ICheckBox {
  variant: sizeVariants;
  backgroundColor: ColorThemeType;
  borderColor: ColorThemeType;
  rounding?: 'rounded' | 'rounded-none';
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        width: 1rem;
        height: 1rem;
      `;
    case 'md':
      return css`
        width: 1.5rem;
        height: 1.5rem;
      `;
  }
};

export const CheckboxRoot = styled(CheckboxRadix.Root)<ICheckBox>`
  ${({ variant }) => sizeVariants(variant)}
  all: unset;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  margin-right: 1rem;

  border: 1px solid ${({ theme, borderColor }) => theme.colors[borderColor]};

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.25rem';
      case 'rounded-none':
        return '0';
      default:
        return '0.25rem';
    }
  }};

  :hover {
    opacity: 0.8;
    transition: 0.3s ease all;
  }
`;

export const CheckboxIndicator = styled(CheckboxRadix.Indicator)`
  color: ${({ theme }) => theme.colors.primary_500};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  user-select: none;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
