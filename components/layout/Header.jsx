import { useState, useEffect } from 'react'
import { MdOutlineLightMode, MdNightlightRound, MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import LanguageMenu from '../LanguageMenu'
import Link from 'next/link'
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'

export default function Header() {

  const [mount, setMount] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [linksAnimate, setLinksAnimate] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  const { t } = useTranslation()

  useEffect(() => setMount(true), [])

  useEffect(() => {
    if (!mobileMenu) {
      setTimeout(() => setLinksAnimate(false), 500)
    } else {
      setLinksAnimate(true)
    }
  }, [mobileMenu])
  
  const toggleMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false)
      document.body.style.overflow = ''
    } else {
      setMobileMenu(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const linkArray = [t('common:home_link'), t('common:about_link'), t('common:skills_link'), t('common:projects_link'), t('common:contact_link')]

  return (
    <div className='fixed w-full left-0 right-0 z-50'>
      <nav 
      className={`${mobileMenu ? 'h-screen bg-white dark:bg-black left-0 ease-out duration-500 transition-height' : 'h-[5rem] ease-out duration-500 transition-all bg-gray-100 dark:bg-darkColor'} flex justify-between max-w-[1090px] mx-auto px-6 pt-2 overflow-hidden md:overflow-visible `}>

        <div className='flex flex-col md:flex-row items-center min-h-[5rem] md:justify-between w-full md:w-auto'>

          {/* toggle theme and hamburger button on mobile screen */}
          <div className='w-full flex min-h-[5rem] ml-[-0.60rem] items-center justify-between md:hidden'>

          <div className='flex p-2 rounded active:scale-75' onClick={toggleMenu}>
            {mobileMenu ? <MdClose size={20} /> :<GiHamburgerMenu size={20} />}
          </div>

          {mount && (
            <button className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all' onClick={handleToggleTheme} >
              {resolvedTheme === 'dark' ? <MdOutlineLightMode size={19} /> : <MdNightlightRound size={19} />}
            </button>
          )}

          </div>
          {mount && (
            <div className={`flex flex-col md:flex-row w-full md:w-auto justify-evenly ml-[-0.45rem] mb-8 md:mb-0`}>
            {linkArray.map((link, index) => (
              <NavLink key={link} name={link} index={index} linksAnimate={linksAnimate} setMobileMenu={setMobileMenu} />
            ))}
            </div>
          )}
         

          {/* language menu on moblie screen */}
          <div className='md:hidden w-full'>
            <LanguageMenu />
          </div>
         
        </div>

        <div className={`hidden md:flex items-center w-[90%] md:w-[20%] justify-between`}>
           <LanguageMenu />
          {mount && (
            <button className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all' onClick={handleToggleTheme} >
              {resolvedTheme === 'dark' ? <MdOutlineLightMode size={19} /> : <MdNightlightRound size={19} />}
            </button>
          )}
        </div>

      </nav>
     
    </div>
  )
}

const NavLink = ({ name, index, linksAnimate, setMobileMenu }) => {

  // to access paths in arabic and english languages
  const paths = ['/', '/about', '/#skills', '/#projects', '/#contact']

  const path = paths[index]

  const router = useRouter()
  const isActive = router.asPath === path;

  const handleOnClick = () => {
    setMobileMenu(false)
    document.body.style.overflow = ''
  }

  return (
    <Link href={path}>
      <a style={{ transitionDelay: linksAnimate && `${index * 75}ms` }} onClick={handleOnClick}
       className={`${!linksAnimate ? `scale-0 md:scale-100 translate-y-[-30px] md:translate-y-0` : `scale-100 transtion duration-200 ease-in translate-y-0`} w-[5rem] md:w-full py-3 px-2 mt-2 md:mt-0 md:py-2 md:px-3 uppercase text-sm font-medium border-b-0 rounded-md hover:bg-gray-200  dark:hover:bg-gray-800  ${isActive ? 'dark:text-white text-black' : 'text-gray-300'}`}>
        {name}
      </a>
    </Link>
  )
}