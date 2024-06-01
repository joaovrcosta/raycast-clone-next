import { ColorThemeType } from '@/core/constants/theme';
import * as S from './styles';
import { CheckIcon } from '@radix-ui/react-icons';

interface CheckBoxProps {
  backgroundColor: ColorThemeType;
  variant: S.sizeVariants;
  rounding: 'rounded' | 'rounded-none';
  borderColor: ColorThemeType;
  showLabel: boolean;
  labelText: string;
}

export default function CheckBox({
  labelText,
  backgroundColor,
  variant,
  rounding,
  borderColor = 'white',
  showLabel,
}: CheckBoxProps) {
  return (
    <form>
      <S.Flex>
        <S.CheckboxRoot
          id="c1"
          defaultChecked
          backgroundColor={backgroundColor}
          rounding={rounding}
          borderColor={borderColor}
          variant={variant}
        >
          <S.CheckboxIndicator>
            <CheckIcon />
          </S.CheckboxIndicator>
        </S.CheckboxRoot>
        {showLabel && <S.Label htmlFor="c1">{labelText}</S.Label>}
      </S.Flex>
    </form>
  );
}
