import * as S from "./styles";
import { Text } from "../Text";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";

interface RadioBoxProps {
  name: string;
  children: React.ReactNode;
  isCreditCard?: boolean;
}

export function RadioBox({ name, children, isCreditCard }: RadioBoxProps) {
  return (
    <div>
      <S.RadioContainer>
        <S.RadioBoxTitleContainer>
          {!isCreditCard && (
            <S.PaymentMethodCheckbox>
              <S.CheckboxInput type="checkbox" />
              <Text color="black" weight="semibold" size="sm">
                {name}
              </Text>
            </S.PaymentMethodCheckbox>
          )}
          {isCreditCard && (
            <>
              <S.PaymentMethodCheckbox>
                <S.CheckboxInput type="checkbox" />
                <Text color="black" weight="semibold" size="sm">
                  {name}
                </Text>
              </S.PaymentMethodCheckbox>
              <S.CreditCardIconsContainer>
                <FaCcMastercard size={24} />
                <RiVisaFill size={24} style={{ marginLeft: "4px" }} />
                <SiAmericanexpress size={24} style={{ marginLeft: "4px" }} />
              </S.CreditCardIconsContainer>
            </>
          )}
        </S.RadioBoxTitleContainer>
        <S.PaymentMethodIconContainer>{children}</S.PaymentMethodIconContainer>
      </S.RadioContainer>
    </div>
  );
}
