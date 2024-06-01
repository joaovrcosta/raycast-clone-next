import {
  ReactNode,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import * as S from './styles'

type SelectAppProps = SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: 'md' | 'lg'
  className?: string
  background?: S.backgroundVariants
  hug?: boolean
  placeholder?: string
  placeholderIcon?: ReactNode | string
  options: string[]
  onActionChange: (newItems: string[]) => void
}

import downArrow from '/public/assets/img/icons/arrow-down.png'
import Image from 'next/image'
import { BiX } from 'react-icons/bi'
import { Text } from '../Text'
import { AnimatePresence, motion } from 'framer-motion'
import { useFetch } from 'hooks/SwrFetch'

export function MultiSelect({
  variant = 'lg',
  className,
  placeholder,
  placeholderIcon,
  background = 'white',
  hug = false,
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  onActionChange,
}: SelectAppProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const firstChildRef = useRef<HTMLDivElement>(null)
  const secondChildRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    // set scroll x to max
    if (selectRef.current) {
      selectRef.current.scrollLeft = selectRef.current.scrollWidth
    }
  }, [selectedItems])

  return (
    <S.SelectContainer sizeOf={variant} hug={hug}>
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
          ref={selectRef}
          hug={hug}
          onClick={() => {
            if (selectedItems.length !== options.length) {
              setCollapsed(!collapsed)
            }
          }}
          hasIcon={!!placeholderIcon}
          background={background}
          sizeOf={variant}
        >
          {selectedItems.length == 0 && (
            <Text size="sm" weight="regular" color="gray_700">
              {placeholder}
            </Text>
          )}
          {selectedItems.map((item) => (
            <AnimatePresence key={item}>
              <S.SelectItem
                as={motion.div}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={(event) => {
                  // cancelar o evento de click se estiver algum item hovered
                  event.stopPropagation()
                }}
              >
                {item}
                <S.SelectClose
                  onClick={() => {
                    setSelectedItems(selectedItems.filter((i) => i !== item))
                    onActionChange(selectedItems.filter((i) => i !== item))
                  }}
                >
                  <BiX size={14} />
                </S.SelectClose>
              </S.SelectItem>
            </AnimatePresence>
          ))}
        </S.Select>
        <Image
          src={downArrow}
          alt={`Down arrow select`}
          width={10}
          height={10}
        />
      </S.SelectBox>
      <AnimatePresence>
        {!collapsed && selectedItems.length !== options.length && (
          <S.SelectList
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            sizeOf={variant}
            background={background}
          >
            {options
              .filter((item) => !selectedItems.includes(item))
              .map((option, index) => (
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
                      if (selectedItems.includes(option)) {
                        setSelectedItems(
                          selectedItems.filter((item) => item !== option)
                        )
                        onActionChange(
                          selectedItems.filter((item) => item !== option)
                        )
                      } else {
                        setSelectedItems([...selectedItems, option])
                        onActionChange([...selectedItems, option])
                      }
                    }}
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
