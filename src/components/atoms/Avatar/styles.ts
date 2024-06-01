import { ColorThemeType } from '@/core/constants/theme';
import styled, { css } from 'styled-components';

export type sizeVariants = 'sm' | 'lg' | 'xl';

interface IAvatarWrapper {
  borderColor: ColorThemeType;
  variant: sizeVariants;
  innerborderWidth?: number;
}

interface IAvatarImage {
  variant: sizeVariants;
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        width: 2rem;
        height: 2rem;
      `;
    case 'lg':
      return css`
        width: 3rem;
        height: 3rem;
      `;
    case 'xl':
      return css`
        width: 6rem;
        height: 6rem;
      `;
  }
};

export const AvatarWraper = styled.div<IAvatarWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid ${({ theme, borderColor }) => theme.colors[borderColor]};
  padding: ${({ innerborderWidth }) => innerborderWidth}px;
  cursor: pointer;
`;

export const AvatarImage = styled.img<IAvatarImage>`
  ${({ variant }) => sizeVariants(variant)}
  border-radius: 50%;
  object-fit: cover;
`;
