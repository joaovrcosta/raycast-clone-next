import styled, { css } from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    transition: 0.5s ease all;
  }
`;

export const PaymentMethodCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray_700};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary_500};
  }
`;

export const PaymentMethodIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CreditCardIconsContainer = styled.div`
  margin-left: 1.35rem;
  gap: 8px;
`;

export const RadioBoxTitleContainer = styled.div`
  display: inline-block;
`;
