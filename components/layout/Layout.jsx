import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {

  return (
    <>
      <Meta />
      <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-darkColor transition-background-color duration-500 ease-out'>
        <Header />
        <main className='flex flex-grow pt-[5rem] px-6 min-h-[650px]'>
            <div className='flex w-full flex-grow flex-col justify-center max-w-5xl mx-auto pb-12'>
                {children}
            </div>
        </main>
        <Footer />
      </div>
    </>
  )
}