import { MouseEventHandler } from "react"

export type XButtonType = {
    title: string,
    containerStyles: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit",
    size?: "normal" | "small",
} 