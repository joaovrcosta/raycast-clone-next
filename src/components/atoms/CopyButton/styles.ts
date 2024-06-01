import styled, { css } from 'styled-components';
import { AiOutlineCopy } from 'react-icons/ai';
import { ColorThemeType } from '@/core/constants/theme';

export type sizeVariants = 'sm' | 'md' | 'lg';

interface ICopyButton {
  variant: sizeVariants;
  backgroundColor: ColorThemeType;
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

export const Button = styled.button<ICopyButton>`
  ${({ variant }) => sizeVariants(variant)}
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    transition: 0.3s ease all;
  }
`;

export const CopyIcon = styled(AiOutlineCopy)`
  line-height: 0;
`;
