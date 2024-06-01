import styled, { keyframes } from "styled-components";
import * as SliderRadix from "@radix-ui/react-slider";

export const SliderRoot = styled(SliderRadix.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

export const SliderTrack = styled(SliderRadix.Track)`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

export const SliderRange = styled(SliderRadix.Range)`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  border-radius: 9999px;
  height: 100%;
`;

export const SliderThumb = styled(SliderRadix.Thumb)`
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.black};
  width: 20px;
  height: 20px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 75, 255, 0.3);
  }
`;
