import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-gray-600'>I can build your idea into reality</p>
                <h1 className='py-4'>
                    Hi, I'm <span className='text-[#f37d91]' >Sindi</span> Boshielo
                </h1>
                <h1 className='py-2'>
                    Aspiring Software Developer
                </h1>
                <p className='py-4 sm:max-w-[70%] m-auto'>
                    I’m focused on building responsive front-end web applications and android applications while
                    learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/https://www.linkedin.com/in/sindi-hope-boshielo-557342212/'
              
            >
              <div className='rounded-full shadow-lg shadow-pink-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-pink-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:hopesindisiweboshielo@gmail.com'>
              <div className='rounded-full shadow-lg shadow-pink-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-pink-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Main