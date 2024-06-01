import NumberInput from 'components/forms/NumberInput'
import * as S from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react'
import ReactInputMask from 'react-input-mask'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

type InputAppProps = Props & {
  className?: string
  backgroundColor?: S.backgroundVariants
  variant: S.sizeVariants
  hug?: boolean
  error?: string
  label?: string
  showLabel?: boolean
  placeholderIcon?: ReactNode | string
  crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined // reactmask is using crossOrigin prop and typescript is not recognizing it
  isFocused?: boolean
  boxShadow?: boolean
}

type InputMaskProps = InputAppProps & {
  mask: string | Array<string | RegExp>
  /**
   * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
   */
  maskChar?: string | null | undefined
  maskPlaceholder?: string | null | undefined
  /**
   * Show mask even in empty input without focus.
   */
  alwaysShowMask?: boolean | undefined
  /**
   * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
   */
  inputRef?: React.Ref<HTMLInputElement> | undefined
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputAppProps>(
  (
    {
      className,
      placeholderIcon,
      showLabel,
      boxShadow,
      isFocused,
      label,
      backgroundColor = 'white',
      error,
      variant = 'lg',
      hug,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        <S.InputContainer sizeOf={variant} hug={hug}>
          {placeholderIcon && <S.PlaceholderIcon>{placeholderIcon}</S.PlaceholderIcon>}
          <S.InputBox hug={hug} hasError={!!error} className={className}>
            {showLabel && <S.InputLabel>{label}</S.InputLabel>}
            <S.Input
              hasIcon={!!placeholderIcon}
              background={backgroundColor}
              type="text"
              boxShadow={boxShadow}
              isFocused={isFocused}
              autoComplete="none"
              sizeOf={variant}
              {...rest}
              ref={ref}
            />
            {error && <S.InputError>{error}</S.InputError>}
          </S.InputBox>
        </S.InputContainer>
      </div>
    )
  }
)

const InputMask = forwardRef<ReactInputMask, InputMaskProps>(
  (
    {
      className,
      placeholderIcon,
      isFocused,
      boxShadow,
      showLabel,
      label,
      backgroundColor = 'white',
      error,
      variant = 'md',
      hug,
      mask = '',
      defaultValue,
      ...rest
    },
    ref
  ) => {
    return (
      <S.InputContainer sizeOf={variant} hug={hug}>
        {placeholderIcon && <S.PlaceholderIcon>{placeholderIcon}</S.PlaceholderIcon>}
        <S.InputBox hug={hug} hasError={!!error} className={className}>
          {showLabel && <S.InputLabel>{label}</S.InputLabel>}
          <S.InputWithMask
            hasIcon={!!placeholderIcon}
            background={backgroundColor}
            type="text"
            boxShadow={boxShadow}
            sizeOf={variant}
            isFocused={isFocused}
            autoComplete="none"
            defaultValue={defaultValue}
            {...rest}
            mask={mask}
            ref={ref}
          />
          {error && <S.InputError>{error}</S.InputError>}
        </S.InputBox>
      </S.InputContainer>
    )
  }
)

InputMask.displayName = 'InputMask'

const InputNumberMask = forwardRef<HTMLInputElement, InputAppProps>(
  (
    {
      className,
      placeholderIcon,
      showLabel,
      boxShadow,
      isFocused,
      label,
      backgroundColor = 'white',
      error,
      variant = 'lg',
      hug,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        <S.InputContainer sizeOf={variant} hug={hug}>
          {placeholderIcon && <S.PlaceholderIcon>{placeholderIcon}</S.PlaceholderIcon>}
          <S.InputBox hug={hug} hasError={!!error} className={className}>
            {showLabel && <S.InputLabel>{label}</S.InputLabel>}
            <NumberInput />
            {/* <S.Input
              hasIcon={!!placeholderIcon}
              background={backgroundColor}
              type="text"
              boxShadow={boxShadow}
              isFocused={isFocused}
              autoComplete="none"
              sizeOf={variant}
              {...rest}
              ref={ref}
            /> */}
            {error && <S.InputError>{error}</S.InputError>}
          </S.InputBox>
        </S.InputContainer>
      </div>
    )
  }
)

export { Input, InputMask }
