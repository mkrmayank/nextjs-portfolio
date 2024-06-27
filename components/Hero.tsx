import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magicbutton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Portfolio developed with Next.js
                </h2>

                <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Turning Complex Challenges into Seamless Solutions' />

                <p className='text-center md:tracking-wider m-4 text-sm md:text-lg lg:text-2xl opacity-50'>
                Greetings, explore the creativity crafted with code and passion. 
                {/*I&apos;m Mayank Kumar, a passionate software developer with a B.Tech in Computer Science from IIIT Dharwad. 
                I love working with languages like Python, Java, and 
                Kotlin, and frameworks such as React.js, Django, and 
                AWS. My journey in full-stack development has been 
                exciting and challenging, and I've had the privilege 
                of leading IIIT Dharwad's Technical Club and E-Cell. 
                These experiences have honed my skills and fueled my 
                passion for solving problems creatively. I'm always 
                eager to take on new challenges and contribute to 
                innovative projects that make a difference. */}

                </p>

                <a href="#about"><MagicButton title='Show My Work' /></a>
                    
            </div>

        </div>    
    </div>
  )
}

export default Hero
