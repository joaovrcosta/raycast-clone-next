import { ColorThemeType } from '@/core/constants/theme';
import * as S from './styles';

interface CircleIconProps {
  children: React.ReactNode;
  backgroundColor: ColorThemeType;
  variant?: S.sizeVariants;
}

export function CircleIcon({
  children,
  backgroundColor,
  variant = 'md',
}: CircleIconProps) {
  return (
    <S.Container backgroundColor={backgroundColor} variant={variant}>
      {children}
    </S.Container>
  );
}
