import Link from 'next/link'
import React from 'react'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {

  const { t } = useTranslation()


  return (
    <footer className='flex w-full pb-8 px-6'>
      <div className='flex flex-col w-full border-t border-gray-200 dark:border-gray-800 pt-8 justify-between justify-items-center max-w-5xl mx-auto '>


        <div className='flex w-full max-w-4xl mx-auto justify-between mb-4'>
          <div className='flex flex-col w-[40%]'>
            <NavLink path='/' name={t('common:home_link')} />
            <NavLink path='/about' name={t('common:about_link')} />
            <NavLink path='/#skills' name={t('common:skills_link')} />
          </div>

          <div className='flex flex-col w-[40%]'>
            <NavLink path='/#projects' name={t('common:projects_link')} />
            <NavLink path='/#contact' name={t('common:contact_link')} />
          </div>
          
        </div>

        <div className='flex flex-col w-full items-center'>
          <div className='flex w-full max-w-[400px] justify-between mb-3 child:m-2'>

          <a href='https://twitter.com/abdulghani_18' target="_blank" rel="noreferrer">
            <div className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-black dark:hover:text-white'>
              <FiTwitter strokeWidth={1} size={24} />
            </div>
          </a>

          <a href="mailto:gfyjd@hotmail.com">
          <div className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-gray-500 hover:text-black dark:hover:text-white'>
            <FiMail size={24}  strokeWidth={1} />
          </div>
          </a>
         
          <a href='https://github.com/abdulghanialjuhi/next-movie-app' target="_blank" rel="noreferrer" >
            <div className=' p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-black dark:hover:text-white'>
              <FiGithub strokeWidth={1} size={24} />
            </div>
          </a>
          </div>


        <span className=' mb-8'> &copy; {t('common:name')} {new Date().getFullYear()} </span>
        </div>

      </div>

    </footer>
  )
}

const NavLink = ({ path, name }) => {

  return (
    <Link href={path}>
      <a 
      className='w-full py-2 px-3 md:mt-0 uppercase text-sm font-medium border-b-0 rounded-md text-gray-500 hover:text-gray-700 '>
        {name}
        </a>
      </Link>
  )
}