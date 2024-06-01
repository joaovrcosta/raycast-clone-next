import { ColorThemeType } from '@/core/constants/theme';
import styled, { css } from 'styled-components';

export type sizeVariants = 'sm' | 'md' | 'lg';

interface ICircleIcon {
  backgroundColor: ColorThemeType;
  variant: sizeVariants;
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.5rem;
      `;
    case 'md':
      return css`
        padding: 1rem;
      `;

    case 'lg':
      return css`
        padding: 1.5rem;
      `;
  }
};

export const Container = styled.div<ICircleIcon>`
  ${({ variant }) => sizeVariants(variant)}
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  line-height: 0;
`;
