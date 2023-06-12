'use client'
import { FC } from 'react'
import Image from 'next/image'
import { XButtonType } from './types'
import { ButtonStyled } from './style'

const XButton: FC<XButtonType> = ({
    title,
    containerStyles,
    handleClick}
) => {
  return (
    <ButtonStyled
        disabled={false}
        type={'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {}}
    >
        <span className={`flex-1 ${handleClick}`}>
            {title}
        </span>
    </ButtonStyled>
  )
}

export default XButton
