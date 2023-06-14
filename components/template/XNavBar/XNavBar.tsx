"use client"
import Link from "next/link"
import Image from "next/image"
import { XNavBarStyled } from "./style"
import Xbutton from "@/components/XButton"

const XNavBar = () => {
  const handleClick = () => {

  }
  return (
    <XNavBarStyled>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-4">
        <Link href={'/'} className="flex justify-center items-center">
          <Image src="/images/logo.svg" alt="logo" width={118} height={15} className="object-contain"/>
        </Link>
        <Xbutton
          title="Sign In"
          type="button"
          size="small"
          onClick={handleClick}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </XNavBarStyled>
  )
}

export default XNavBar
