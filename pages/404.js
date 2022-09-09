import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function NotFound() {

    const { t } = useTranslation()

    return (
        <div className='w-full max-w-[600px] mx-auto flex flex-col pt-12 md:pt-20 items-center h-full'>
            <h2> {t("common:not_found")} </h2>

            <Link href='/'>
                <a className='a_link mt-6'>
                {t("common:go_home")}
                </a>    
            </Link>
        </div>
    )
}
