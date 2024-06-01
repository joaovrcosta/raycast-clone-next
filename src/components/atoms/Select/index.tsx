import {
  ReactNode,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as S from './styles'

interface IAction {
  item: string
  type: 'removed' | 'added'
}

type SelectAppProps = SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: 'md' | 'lg'
  className?: string
  background?: ColorThemeType
  hug?: boolean
  placeholderIcon?: ReactNode | string
  defaultSelectedItem?: string
  options: string[]
  placeholder?: string
  onActionChange: (newItem: string | null) => void
  canUnselect?: boolean
}

import downArrow from '/public/assets/img/icons/arrow-down.png'
import Image from 'next/image'
import { BiX } from 'react-icons/bi'
import { AnimatePresence, motion } from 'framer-motion'
import { Text } from '../Text'
import { ColorThemeType } from '/core/constants/theme'

export function Select({
  variant = 'lg',
  className,
  placeholderIcon,
  background = 'white',
  hug = false,
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  onActionChange,
  defaultSelectedItem,
  placeholder,
  canUnselect,
}: SelectAppProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    defaultSelectedItem || null
  )

  useEffect(() => {
    setSelectedItem(defaultSelectedItem || null)
  }, [defaultSelectedItem])

  const [collapsed, setCollapsed] = useState<boolean>(true)

  const firstChildRef = useRef<HTMLDivElement>(null)
  const secondChildRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const adjustChildHeight = () => {
      if (!secondChildRef.current) return

      const secondChildHeight = secondChildRef.current.offsetHeight
      if (firstChildRef.current) {
        firstChildRef.current.style.height = secondChildHeight + 'px'
      }
    }

    const resizeObserver = new ResizeObserver(adjustChildHeight)

    if (secondChildRef.current && secondChildRef.current instanceof Element) {
      resizeObserver.observe(secondChildRef.current)
    }

    return () => {
      if (secondChildRef.current && secondChildRef.current instanceof Element) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(secondChildRef.current)
      }
    }
  }, [])

  return (
    <S.SelectContainer
      type="button"
      sizeOf={variant}
      hug={hug}
      onBlur={() => {
        setCollapsed(true)
      }}
    >
      {placeholderIcon && (
        <S.PlaceholderIcon ref={firstChildRef}>
          {placeholderIcon}
        </S.PlaceholderIcon>
      )}
      <S.SelectBox
        ref={secondChildRef}
        collapsed={collapsed}
        background={background}
        hug={hug}
        className={className}
      >
        <S.Select
          hug={hug}
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          hasIcon={!!placeholderIcon}
          background={background}
          sizeOf={variant}
          collapsed={collapsed}
        >
          {selectedItem == null ? (
            <Text
              size="sm"
              weight="medium"
              color="gray_600"
              style={{ cursor: 'pointer' }}
            >
              {placeholder || 'Selecione uma opção'}
            </Text>
          ) : (
            <S.SelectItem
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              {selectedItem}
              {canUnselect && (
                <S.SelectClose
                  onClick={() => {
                    setSelectedItem(null)
                    onActionChange(null)
                  }}
                >
                  <BiX size={14} />
                </S.SelectClose>
              )}
            </S.SelectItem>
          )}
        </S.Select>
        <Image
          src={downArrow}
          alt={`Down arrow select`}
          width={10}
          height={10}
        />
      </S.SelectBox>
      <AnimatePresence>
        {!collapsed && (
          <S.SelectList
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            sizeOf={variant}
            background={background}
            collapsed={collapsed}
          >
            {options.map((option, index) => (
              <AnimatePresence key={index}>
                <S.SelectListItem
                  as={motion.div}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.1,
                  }}
                  onClick={() => {
                    setSelectedItem(option)
                    onActionChange(option)
                  }}
                  selected={selectedItem == option}
                >
                  {option}
                </S.SelectListItem>
              </AnimatePresence>
            ))}
          </S.SelectList>
        )}
      </AnimatePresence>
    </S.SelectContainer>
  )
}
