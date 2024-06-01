import styled, { css } from 'styled-components'
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root)`
  position: relative;
  all: unset;
  width: 3.25rem;
  height: 1.5rem;
  min-width: 3.25rem;
  min-height: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.danger_500};
  &[data-state='checked'] {
    border: 1px solid ${({ theme }) => theme.colors.success_500};
  }
  border-radius: 9999px;
  transition: 0.3s ease all;
  cursor: pointer;
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  transform: translateX(4px);
  background: ${({ theme }) => theme.colors.danger_500};
  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors.success_500};
    transform: translateX(calc(3.25rem - 1rem - 4px));
  }
  transition: all 0.2s ease;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const SwitchLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.typography.text.md};
    color: ${theme.colors.gray_700};
    font-weight: ${theme.typography.weight.semibold};
  `}
`
