import { ColorThemeType } from '@/core/constants/theme';
import * as S from './styles';
import { Tooltip } from '@/components/molecules/Tooltip';

interface CopyButtonProps {
  text: string;
  backgroundColor: ColorThemeType;
  tooltipName: string;
  variant: S.sizeVariants;
}

export function CopyButton({
  text,
  backgroundColor = 'white',
  tooltipName,
  variant,
}: CopyButtonProps) {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Tooltip content={tooltipName}>
      <S.Button
        onClick={handleClick}
        backgroundColor={backgroundColor}
        variant={variant}
      >
        <S.CopyIcon size={16} />
      </S.Button>
    </Tooltip>
  );
}
