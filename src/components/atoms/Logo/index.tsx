import Image from 'next/image'
import * as S from './styles'

import LogoImagePrimary from '@/../public/logos/logo-white.svg'
import LogoOrangeWhite from '@/../public/logos/logo-orange-white.png'
import LogoOrangeBlue from '@/../public/logos/logo-orange-blue.png'
import ConvertePayWhiteOrange from '@/../public/logos/logo-convertepay-white-orange.png'
import ConvertePayOrangeBlue from '@/../public/logos/logo-convertepay-orange-blue.png'
import WhiteIcon from '@/../public/logos/icone_branco.png'
import OrangeIcon from '@/../public/logos/icone_laranja.png'
import BlueIcon from '@/../public/logos/icone_azul.png'

interface ILogo {
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'primary'
    | 'orange-white'
    | 'orange-blue'
    | 'convertepay-white-orange'
    | 'convertepay-orange-blue'
    | 'white-icon'
    | 'blue-icon'
    | 'orange-icon'
  alt?: string
}

const getVariantLogo = [
  { variant: 'primary', logo: LogoImagePrimary },
  { variant: 'orange-white', logo: LogoOrangeWhite },
  { variant: 'orange-blue', logo: LogoOrangeBlue },
  { variant: 'convertepay-white-orange', logo: ConvertePayWhiteOrange },
  { variant: 'convertepay-orange-blue', logo: ConvertePayOrangeBlue },
  { variant: 'white-icon', logo: WhiteIcon },
  { variant: 'blue-icon', logo: OrangeIcon },
  { variant: 'orange-icon', logo: BlueIcon },
]

export function Logo({
  size = 'md',
  variant = 'primary',
  alt = 'Logo Converte.me',
}: ILogo) {
  return (
    <S.Logo size={size}>
      <Image
        src={
          getVariantLogo.find((item) => item.variant === variant)?.logo ||
          '/logos/logo.svg'
        }
        alt={alt}
        width={193}
        height={27}
      />
    </S.Logo>
  )
}
