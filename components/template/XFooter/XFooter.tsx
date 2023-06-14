import React from 'react'
import { XFooterStyled } from './style'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

function XFooter() {
  return (
    <XFooterStyled className={'flex flex-col text-black-100 mt-5 border-t border-gray-100'}>
      <div className='footer__wrapper flex max-md:flex-col flex-wrap justify-between gap-5 py-10'>
        <div className="footer__logo flex flex-2 flex-col gap-6 justify-start items-start ">
          <Image src="/images/logo.svg" alt='logo' width={118} height={18} className='object-contain'/>
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer-links">
          {
            footerLinks.map(link => (
              <div className="footer__link" key={link.title}>
                <h3 className='font-bold'>{link.title}</h3>
                {
                  link.links.map(item => (
                    <Link key={item.title} href={item.url}          className='footer__link__item text-gray-500'>
                      {item.title}
                    </Link>
                  ))
                }
              </div>
            ))
          }
        </div>

      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>
        <div className="footer__rights">
          <p className='footer__rights__copy footer__rights__link'>Carhub 2023 - All rights reserved</p>
          <Link className='footer__rights__link text-gray-500' href={'/'}>Privacy policy</Link>
          <Link className='footer__rights__link text-gray-500' href={'/'}>Terms of use</Link>
        </div>
      </div>
    </XFooterStyled>
  )
}

export default XFooter
