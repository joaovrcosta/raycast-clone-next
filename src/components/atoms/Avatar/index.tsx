import { ColorThemeType } from '@/core/constants/theme';
import * as S from './styles';

interface AvatarProps {
  borderColor: ColorThemeType;
  variant: S.sizeVariants;
  imageUrl: string;
  innerborderWidth?: number;
}

export default function Avatar({
  variant,
  borderColor,
  imageUrl,
  innerborderWidth = 0,
}: AvatarProps) {
  return (
    <S.AvatarWraper
      borderColor={borderColor}
      variant={variant}
      innerborderWidth={innerborderWidth}
    >
      <S.AvatarImage src={imageUrl} variant={variant} />
    </S.AvatarWraper>
  );
}
