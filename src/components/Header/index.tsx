import { MaxWidthWrapper } from '../MaxWidthWrapper'
import * as S from './styles'
import raycastlogo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from '../atoms/Button'
import { FaApple } from 'react-icons/fa'

export function Header() {
  return (
    <S.HeaderContainer>
      <MaxWidthWrapper>
        <S.Wrapper>
          <S.HeaderContent>
            <S.LogoContainer>
              <Image src={raycastlogo} alt="Raycast Logo" />
            </S.LogoContainer>
            <S.NavigationContainer>
              <S.NavLink href="/hore">Store</S.NavLink>
              <S.NavLink href="/pro">Pro</S.NavLink>
              <S.NavLink href="/hore">Teams</S.NavLink>
              <S.NavLink href="/hore">Developers</S.NavLink>
              <S.NavLink href="/hore">Changelog</S.NavLink>
              <S.NavLink href="/hore">Blog</S.NavLink>
              <S.NavLink href="/hore">Pricing</S.NavLink>
            </S.NavigationContainer>
            <S.SecondaryContainer>
              <S.NavLink href="/hore">Log in</S.NavLink>
              <Button>
                <FaApple size={18} color="#2f3031" /> Download
              </Button>
            </S.SecondaryContainer>
          </S.HeaderContent>
        </S.Wrapper>
      </MaxWidthWrapper>
    </S.HeaderContainer>
  )
}
