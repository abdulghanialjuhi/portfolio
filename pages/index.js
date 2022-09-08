import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useRouter } from 'next/router'

export default function Home() {

  const { t } = useTranslation()

  const { locale } = useRouter()

  return (
    <>
      <div className='w-full max-w-[600px] mx-auto min-h-[710px] flex flex-col pt-12 md:pt-20 items-center'>

        <div className='h-[150px] w-[150px] bg-white rounded-[50%] overflow-hidden mb-4'>
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image src="/personal.jpg" alt="me" layout='fill' />
          </div>
        </div>

        <span className='uppercase text-[12px] md:text-sm text-gray-600 dark:text-gray-300'> {t('home:span_title')} </span>
       
        <div className='inline-block'>

          <div className='text-center'>
            <h1 className={`pt-4 ${locale === 'ar' && 'ar-font'}`}>{t('home:greeting')} <span className='text-primaryBlue'> {t('common:name')} </span></h1>
            <h1 className={`py-2 ${locale === 'ar' && 'ar-font'}`}>{t('home:main_title')} </h1>
          </div>

          <div className='flex'>
            <p className='flex-grow w-0 text-sm text-gray-600 dark:text-gray-300 text-justify '> {t('home:descreption')} </p>
          </div>

          <div className='flex w-full justify-end mt-6'>
            <button onClick={() => window.location = '#contact'} className='btn-primary'> {t('home:contact_me')} </button>
          </div>  
        
        </div>

 
    
      </div>

      <section id='skills' className='min-h-screen pt-24'>
        <Skills />
      </section>

      <section id='projects' className='min-h-screen pt-24'>
        <Projects />
      </section>

      <section id='contact' className='min-h-screen pt-24'>
        <Contact />
      </section>   
    </>
  )
}


