import Image from 'next/image'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { frontEndSkills, backEndSkills } from '../data/skills'

export default function Skills() {

    const { t } = useTranslation()

    return (
        <div className="w-full h-full flex flex-col">
            <h1 className='text-[2.3rem]'> {t('home:skills_title')} </h1>

            <div className="flex flex-col md:flex-row h-full justify-between w-full pt-14">

                <section className="flex flex-col w-full md:w-[45%]">

                    <h3 className='text-center'> {t('home:frontend_skills')} </h3>
                    <div className='grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2'>
                        {frontEndSkills.map((skill) => (
                            <DisplaySkill key={skill.name} {...skill}  />
                        ))}
                    </div>

                </section>

                <section className="flex flex-col w-full md:w-[45%] mt-8 md:mt-0">

                    <h3 className='text-center'> {t('home:backend_skills')} </h3>
                    <div className='grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2'>
                        {backEndSkills.map((skill) => (
                            <DisplaySkill key={skill.name} {...skill}  />
                        ))}
                    </div>

                </section>

            </div>
        </div>
    )
}

const DisplaySkill = ({ name, experience, img }) => {

    const { t } = useTranslation()


    return (
        <div className='border border-grey-200 dark:border-gray-800 rounded p-4 w-full max-w-[500px] bg-white dark:bg-gray-900 text-start hover:bg-transparent dark:hover:bg-transparent cursor-pointer'>
            <div className='h-[32px] w-[32px] bg-white rounded-[50%] overflow-hidden'>
                <Image src={img} alt={name} width='32' height='32' className='rounded-full' />
            </div>
            <h6 className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                {name}
            </h6>
            <small className='mt-1 text-gray-700 dark:text-gray-400'> {t(`home:${experience}`)} </small>
        </div>
    )   
}