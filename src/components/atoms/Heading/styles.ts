import styled from 'styled-components'
import {
  ColorThemeType,
  TitleFontSize,
  WeightFont,
} from '@/core/constants/theme'

interface HeadingProps {
  size?: TitleFontSize
  color?: ColorThemeType
  weight?: WeightFont
  uppercase?: boolean
}

export const Heading = styled.h1<HeadingProps>`
  ${({ theme, size, color, weight, uppercase }) => `
    color: ${color ? theme.colors[color] : 'inherit'};
    font-size: ${size ? theme.typography.heading[size] : 'inherit'};
    font-weight: ${weight ? theme.typography.weight[weight] : 'inherit'};
    text-transform: ${uppercase ? 'uppercase' : 'inherit'};
  `}
  margin-bottom: 0;
  line-height: normal;
  transition: 0.3s ease all;
  font-family: Inter;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  /* -webkit-text-fill-color: transparent; */
`
