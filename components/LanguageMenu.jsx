import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { useRouter } from 'next/router'

export default function LanguageMenu() {

    const router = useRouter()

    const languages = [
        {value: 'en', text: 'English'},
        {value: 'ar', text: 'العربية'}
    ]

    const handleLanguage = (e) => {
        if (e.target.value === router.locale) return;

        document.cookie = `NEXT_LOCALE=${e.target.value}; max-age=31536000; path=/`
        router.replace(router.asPath, undefined, { locale: e.target.value })
        setTimeout(() => window.location.reload(), 300)
    }

    return (
        <Menu as="div" className="relative w-full md:w-auto inline-block text-left">
            <div>
                <Menu.Button className="flex w-full border border-gray-300 dark:border-none md:rounded-md shadow-sm px-2 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none md:hover:ring-2 ring-gray-300 justify-between transition-all">
                {router.locale === 'en' ? 'English' : 'العربية'}
                <IoIosArrowDown className={`${router.locale === 'en' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="block origin-top-right md:absolute right-0 md:mt-2 w-full md:w-36 md:rounded-md md:shadow-lg bg-white dark:bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {languages.map((language) => (
                        <Menu.Item key={language.value}>
                            <button
                            value={language.value}
                            onClick={handleLanguage}
                            className={`${router.locale === language.value && 'bg-gray-200 dark:bg-gray-800 pointer-events-none'} w-full block px-4 py-2 mb-1 text-sm  hover:bg-gray-100 dark:hover:bg-gray-700`}>
                                {language.text}
                            </button>
                        </Menu.Item>
                    ))}
                </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
