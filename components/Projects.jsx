import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { projectsData, otherProjects } from '../data/projects'
import { useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io'
import { useRouter } from 'next/router'

export default function Projects() {

    const { t } = useTranslation()

    const [showOther, setShowOther] = useState(false)
    const router = useRouter()

    return (
        <div className="w-full h-full flex flex-col">
            <h1 className='text-[2.3rem]'> {t('home:projects')} </h1>

            <div className='flex flex-col justify-between w-full h-full mt-8'>
                {projectsData.map((project) => (
                    <Card {...project} key={project.name} />
                ))}
            </div>

            <div className={`border border-gray-200 dark:border-gray-700 p-2 mt-8`}>

                <div className='overflow-hidden'>
                
                    <button className='flex w-full h-8 items-center cursor-pointer' onClick={() => setShowOther(!showOther)}>
                        <div className={`${showOther ? router.locale === 'en' ? 'rotate-90' : 'rotate-[-90deg]' : ''} transition-transform`}> 
                            {router.locale === 'en' ? <IoMdArrowDropright size={20} /> : <IoMdArrowDropleft size={20} />}
                        </div>
                        {t('home:other_projects')}
                    </button>

                    <div className={`${showOther ? 'max-h-[500px]' : 'max-h-0'} transition-all duration-250 ease-in-out`}>
                        <ul className='h-full list-disc px-10 child:pt-2 py-2'>
                            {otherProjects.map((project) => (
                                <li key={project.name}> 
                                    <div className='flex flex-col'>
                                        {project.name} :
                                        <a href={project.link} target="_blank" rel="noreferrer" className='a_link'> {project.link} </a> 
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ img, path, name, description, githubLink, tools }) => {

    const { t } = useTranslation()

    return (
        <div className='w-full items-center overflow-hidden bg-white dark:bg-black my-4 p-6 border border-gray-200 dark:border-gray-700 rounded'>
            <div className='flex md:h-[274px] h-auto flex-col md:flex-row'>
                
                <a href={path} target="_blank" className='md:w-[45%] h-full md:min-h-[274px] overflow-hidden border border-gray-700 rounded flex justify-center'>
                    <div className='hover:brightness-75'>
                        <img src={img} alt={name} className='md:min-w-[437px] md:h-[274px] aspect-[16/10] md:aspect-auto bg-fixed' />
                    </div>
                </a>

                <div className='flex-grow md:h-full flex flex-col justify-between mt-6 md:mt-0 md:mx-6'>
                    <div className='flex flex-col'>
                        <span className='text-gray-500 uppercase text-sm mb-2'> {t('home:name_placeholder')} </span>
                        <h6> {name} </h6>
                    </div>

                    <div className='mt-5 md:mt-0 flex flex-col max-w-[480px]'>
                        <span className='text-gray-500 uppercase text-sm mb-2'> {t('home:description_placeholder')} </span>
                        <span className='text-sm text-justify'> {t(`home:${description}`)} </span>
                    </div>

                    <div className='mt-5 md:mt-0 flex overflow-hidden flex-col'>
                        <span className='text-gray-500 uppercase text-sm mb-2'> {t('home:github_placeholder')} </span>
                        <a href={githubLink} target="_blank"  className='a_link'> {githubLink} </a>
                    </div>

                    <div className='mt-5 md:mt-0 flex flex-col'>
                        <span className='text-gray-500 uppercase text-sm mb-2'> {t('home:tools_placeholder')} </span>
                        <ul className='flex flex-col md:flex-row ml-[-0.25rem]'>
                            {tools.map((tool) => (
                                <li className='bg-gray-200 rounded dark:bg-gray-600 ring-gray-300 px-2 mx-1 my-2 md:my-0 max-w-[270px]' key={tool}> {tool} </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}