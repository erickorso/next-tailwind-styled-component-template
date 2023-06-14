'use client'
import { FC } from 'react'
import Image from 'next/image'
import { XButtonType } from './types'
import { ButtonStyled } from './style'

const XButton: FC<XButtonType> = ({
  title,
  containerStyles,
  onClick,
  size
}) => {
  return (
    <ButtonStyled
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles} ${size ? size : ''}`}
      onClick={() => onClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </ButtonStyled>
  )
}

export default XButton
