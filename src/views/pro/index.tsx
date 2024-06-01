import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { BsPatchCheck } from 'react-icons/bs'
import { Button } from '@/components/atoms/Button'
import proImg from '@/assets/hero.webp'
import Image from 'next/image'
import verified from '@/assets/verifyed.svg'
import lineLeft from '@/assets/line-left.svg'
import lineRight from '@/assets/line-left.svg'
import aiCaseImg from '@/assets/show-case-image-1.jpg'
import { AiOutlineOpenAI } from 'react-icons/ai'

const ProPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <S.HeroImage>
          <Image src={proImg} alt="" width={1204} />
        </S.HeroImage>
        <S.HeroWrapper>
          <S.Hero>
            <S.HeroText>
              <S.HeroBadgeContainer>
                <Image src={verified} alt="" />
                <Text size="sm" color="blue_100" weight="medium">
                  Raycast Pro
                </Text>
              </S.HeroBadgeContainer>
              <Heading size="xl" weight="medium">
                New Level Unlocked
              </Heading>
              <Text size="lg" weight="medium">
                Turn Pro to harness the power of AI, make Raycast your own with
                custom themes, keep your Macs in sync and more.
              </Text>
            </S.HeroText>
            <S.ComparePlansContainer>
              <Button>Compare Plans</Button>
              <Text color="gray_200">Starting at $8/month</Text>
            </S.ComparePlansContainer>
          </S.Hero>
        </S.HeroWrapper>
        <S.AiCaseTitle>
          <S.AiShowCase>
            <Image src={lineLeft} alt="" />
            <span>AI</span>
            <Image src={lineRight} alt="" />
          </S.AiShowCase>
          <S.AiCaseText>
            <Text size="xl" weight="semibold" color="white">
              Your Mac just got smarter.
            </Text>
            <Text size="xl" color="gray_200">
              AI where it’s most useful - on your OS.
            </Text>
          </S.AiCaseText>
        </S.AiCaseTitle>
        <S.AiCaseImage>
          <Image src={aiCaseImg} alt="" />
          <S.AiShowCaseDescription>
            <div>
              <S.AiShowCaseText size="lg" color="gray_950">
                <strong>Ask Anything, Anytime,</strong> Anywhere. Quick AI
                combines the power of AI with the web to answer any question.
              </S.AiShowCaseText>
            </div>
            <div>
              <S.AiShowCaseText size="lg" color="gray_950">
                <strong>Always On ChatGPT.</strong> Stuck while coding? Need
                help writing an email? Meet your new virtual assistant.
              </S.AiShowCaseText>
            </div>
            <div>
              <S.AiShowCaseText size="lg" color="gray_950">
                <strong>Your Automation Assistant.</strong> Create your own AI
                Commands to automate repetitive tasks and eliminate chores.
              </S.AiShowCaseText>
            </div>
          </S.AiShowCaseDescription>
        </S.AiCaseImage>
        <S.AllModels>
          <S.AiModelsContainer>
            <S.AiModelsScroolBar>
              <S.AiModel>
                <AiOutlineOpenAI size={24} color="#fff" />
                <Text>OpenAI</Text>
              </S.AiModel>
              <S.AiModel>
                <AiOutlineOpenAI size={24} color="#fff" />
                <Text>OpenAI</Text>
              </S.AiModel>
              <S.AiModel>
                <AiOutlineOpenAI size={24} color="#fff" />
                <Text>OpenAI</Text>
              </S.AiModel>
              <S.AiModel>
                <AiOutlineOpenAI size={24} color="#fff" />
                <Text>OpenAI</Text>
              </S.AiModel>
              <S.AiModel>
                <AiOutlineOpenAI size={24} color="#fff" />
                <Text>OpenAI</Text>
              </S.AiModel>
            </S.AiModelsScroolBar>
          </S.AiModelsContainer>
          <S.AiModelTextContainer>
            <Text size="xl" weight="semibold" color="white">
              One Interface.
            </Text>
            <Text size="xl" weight="semibold" color="white">
              Dozens of models.
            </Text>
            <Text size="lg" color="gray_200">
              Choose a faster model when speed matters and a smarter one for
              more complex tasks.
            </Text>
          </S.AiModelTextContainer>
        </S.AllModels>
      </MaxWidthWrapper>
    </>
  )
}

export default ProPage
