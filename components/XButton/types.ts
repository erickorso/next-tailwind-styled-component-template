import { MouseEventHandler } from "react"

export type XButtonType = {
    title: string,
    containerStyles: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
} 