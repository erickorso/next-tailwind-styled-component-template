"use client"
import Link from "next/link"
import Image from "next/image"
import XButton from "@/components/XButton"
import { XNavBarStyled } from "./style"

const XNavBar = () => {
  return (
    <XNavBarStyled>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={'/'} className="flex justify-center items-center">
          <Image src="/images/logo.svg" alt="logo" width={118} height={15} className="object-contain"/>
        </Link>
      </nav>
    </XNavBarStyled>
  )
}

export default XNavBar
