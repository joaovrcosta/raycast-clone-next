import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const HeroImage = styled.div`
  position: relative;

  top: 30px;
  z-index: -1;
  width: 100%;

  img {
    height: 500px;
    border-radius: 16px;
    width: 100%;
    object-fit: cover;
    transform: scale(1.2);
  }
`

export const HeroBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #08090b;
  font-size: 14px;
  height: 34px;
  color: ${({ theme }) => theme.colors.blue_100};
  border: 1 solid transparent;
  box-shadow: inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.25);
  gap: 4px;
  border-radius: 16px;
  padding: 6px 12px;
  max-width: 132px;
`

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`

export const Hero = styled.div`
  position: relative;
  top: -220px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 630px;
  text-align: center;
  gap: 1rem;
`
export const HeroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3.5rem;
  max-width: 630px;
`
export const ComparePlansContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const AiShowCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  background: radial-gradient(
    13.65% 50% at center,
    rgba(245, 48, 107, 0.1) 0,
    rgba(255, 103, 167, 0) 100%
  );

  > img:last-child {
    transform: scaleX(-1);
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: #ff6363;
    margin: 0 1rem;
    font-weight: 500;
    font-family: Inter;
    letter-spacing: 0.2px;
    display: inline-flex;
    align-items: center;
  }
`
export const AiCaseTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
  text-align: center;
`

export const AiCaseText = styled.div``

export const AiCaseImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;

  img {
    border-radius: 16px;
    object-fit: cover;
  }
`
export const AiShowCaseDescription = styled.div`
  display: flex;
  padding: 2.5rem 1.5rem;
  gap: 4rem;

  div {
    padding: 2rem 0;
  }
`

export const AiShowCaseText = styled(Text)`
  strong {
    color: ${({ theme }) => theme.colors.gray_600};
  }
`

export const AllModels = styled.div`
  display: flex;
  gap: 32px;
`

export const AiModelsContainer = styled.div``

export const AiModelsScroolBar = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`
export const AiModel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const AiModelTextContainer = styled.div``
