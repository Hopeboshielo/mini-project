import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#f37d91]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-500'>
            / / I am not your average developer
          </p>
          <p className='py-2'>
            My name is Sindi Hope Boshielo, I'm 23 years old and I recently graduated from varsity with a Bcom Degree in Information Management.
            This is where I learnt more in fields of <span className='text-[#f37d91]' ><i>software development.</i></span>
            I have worked through a couple tasks throughout my studies and with the knowledge and expertise I possess, I'm willing to apply my knowledge into practise, even when I don't
            have real-life working experience.
          </p>
          <p className='py-2'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning the fundamentals of web development (html, css & javascript) and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
        </div>
        <div className=' flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src='/../public/assets/me.jpg'  alt="/" width='500' height='800'/>
    
        </div>
      </div>
    </div>
  )
}

export default About