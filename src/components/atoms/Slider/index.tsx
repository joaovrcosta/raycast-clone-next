import * as S from "./styles";

interface SliderProps {
  defaultValue: number;
  max: number;
  step: number;
}

export function Slider({ defaultValue, max, step }: SliderProps) {
  return (
    <form>
      <S.SliderRoot defaultValue={[defaultValue]} max={max} step={step}>
        <S.SliderTrack>
          <S.SliderRange />
        </S.SliderTrack>
        <S.SliderThumb />
      </S.SliderRoot>
    </form>
  );
}
