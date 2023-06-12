'use client'
import React from 'react'
import XButton from '@/components/XButton'
import Image from 'next/image'
import { HeroStyled } from './style'
import { motion } from 'framer-motion'

function Hero() {

  const handleScroll = () => {

  }

  return (
    <HeroStyled>
      <div className='hero__side hero__side--left flex-1'>
        <h1 className='hero__title'>Find your next car!</h1>
        <p className='hero__subtitle'>Effortless booking process</p>
        <XButton
          title={'Explore'}
          containerStyles={'bg-blue-500 text-white rounded-full mt-10'}
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__side hero__side--right">
        <motion.div
          animate={{x:0}} initial={{x:-100}}
          className="hero__image">
          <Image src='/images/hero.png' alt='hero' width={500} height={400}/>
        </motion.div>
        <div className="hero__image-overlay">
          <Image src='/images/hero-bg.png' alt='hero' width={500} height={400}/>
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
