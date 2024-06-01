import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.gray_900}; */
  background: rgba(0, 0, 0, 0.01);
`

export const Wrapper = styled.div`
  padding-top: 1rem;

  @media (max-width: 1204px) {
    padding: 1rem 2rem 0 2rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  background: linear-gradient(
    137deg,
    rgba(17, 18, 20, 0.75) 4.87%,
    rgba(12, 13, 15, 0.9) 75.88%
  );

  padding: 1rem 2rem;
  border-radius: 16px;
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  box-shadow: inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.15);
  transition: height 0.3s ease, transform 0.3s ease;
`

export const LogoContainer = styled.div``

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 964px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  padding: 0.75rem 0.5rem;
  font-size: ${({ theme }) => theme.typography.text.sm};
  color: ${({ theme }) => theme.colors.gray_200};
  white-space: nowrap;
  font-weight: 600;
  line-height: normal;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: Inter;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button svg {
    color: ${({ theme }) => theme.colors.gray_900};
  }
`
