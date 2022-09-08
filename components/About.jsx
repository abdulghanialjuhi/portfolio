import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function About() {

    const { t } = useTranslation()

    const router = useRouter()

    const getAge = (dateString) => {
        const ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
    }

    return (
        <div className="w-full h-full flex flex-col pt-6">
            <h1 className='text-[2.6rem]'> {t('about:header')}  </h1>

            <div className="flex flex-col md:flex-row h-full justify-between w-full pt-14">

                <section className="flex flex-col w-full md:w-[45%] md:mb-0 mb-20">
                    <div className='h-[150px] w-[150px] bg-white rounded-[50%] overflow-hidden mb-8'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image src="/personal.jpg" alt="me" layout='fill' />
                        </div>
                    </div>

                    <h2 className="mb-4 text-[26px]"> {t('about:job_title')}  </h2>
                    <p className='mb-4 text-justify'> {t('about:job_description')}   </p>

                    <div className='flex w-full justify-end md:mt-auto mt-7'>
                        <a 
                        href={router.locale === 'en' ? "/resumes/cv.pdf" : "/resumes/cv-ar.pdf"} download='abdulghani'
                        className='btn-primary'> 
                            {t('about:CV_button')} 
                        </a>
                    </div> 

                </section>

                <section className="flex w-full md:w-[45%] flex-col">
                    <h2 className="mb-4 text-[26px]"> {t('about:personal_info')} </h2>

                    <div className='flex w-full flex-col flex-wrap justify-between child:py-1.5'>  
                        <h6>{t('about:name_title')}: {t('common:name')} </h6>
                        <h6> {t('about:age_title')}: {getAge('1998-10-29')} </h6>
                        <h6> {t('about:nationality_title')}: {t('about:nationality')} 🇾🇪 </h6>
                        <h6> {t('about:major_title')}: {t('about:major')} </h6>
                    </div>

                    <div className='md:mt-auto mt-7'>
                        <h3 className='text-2xl'> {t('about:links')} </h3>

                        <ul className='list-disc px-7 mt-4 child:pt-2'>
                            <li> {t('about:twitter')}: <a href='https://twitter.com/abdulghani_18' target="_blank" rel="noreferrer" className='a_link'> @abdulghani_18 </a> </li>
                            <li> {t('about:github')}: <a href='https://github.com/abdulghanialjuhi' target="_blank" rel="noreferrer" className='a_link'> @abdulghanialjuhi </a> </li>
                            <li> {t('about:linkedIn')}: <a href='https://www.linkedin.com/in/abdulghani-aljuhi-6257ba216' target="_blank" rel="noreferrer" className='a_link'> @abdulghani-aljuhi </a> </li>
                            <li> {t('about:telegram')}: <a href='https://t.me/abdulghani18' target="_blank" rel="noreferrer" className='a_link'> @abdulghani18 </a> </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
