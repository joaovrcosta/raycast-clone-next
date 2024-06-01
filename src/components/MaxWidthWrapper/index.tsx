import { ReactNode } from 'react'
import { MainContainer } from './styles'

export function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return <MainContainer>{children}</MainContainer>
}
