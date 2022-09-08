import { useRef, useState } from 'react'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import animationStyle from '../styles/animation.module.css'
import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'
import Modal from './Modal'

export default function Contact() {

    const { t } = useTranslation()

    const [animateText, setAnimateText] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')

    const send = axios.create({
        withCredentials: true,
    });

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const handleOnBlur = () => {
        if (!messageRef.current.value > 0) {
            setAnimateText(false)
        }
    }
    
    const handleOnFocus = () => {
        setAnimateText(true)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setMessage('')
        setLoading(true)

        let fd = new FormData()

        fd.append('name', nameRef.current.value)
        fd.append('email', emailRef.current.value)
        fd.append('message', messageRef.current.value)
    
        send.post('https://portfoio-next-email.herokuapp.com/send_email', fd)
        .then((res) => {
            if (res.data.success) {
                setMessage(t('common:success'))
                e.target.reset();
            } else {
                setMessage(t('common:failed'))
            }
        })
        .catch((err) => {
            setMessage(t('common:failed'))
        }).finally(() => {
            setShowModal(true)
            setLoading(false)
        })
    }

    const handleCheckEmail = () => {
        console.log('blr');
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <h1 className='text-[2.6rem]'> {t('home:contact')}  </h1>
            
            {/* <div className='flex items-center justify-between sm:justify-evenly w-full p-4'>
                <a href='https://twitter.com/abdulghani_18' target="_blank" rel="noreferrer">
                    <div className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg'>
                        <FiTwitter size={24} strokeWidth={1} />
                    </div>
                </a>
                <a href= 'https://github.com/abdulghanialjuhi/next-movie-app' target="_blank" rel="noreferrer" >
                    <div className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg'>
                        <FiGithub size={24} strokeWidth={1} />
                    </div>
                </a>
                <a href="mailto:gfyjd@hotmail.com">
                    <div className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg'>
                        <FiMail size={24}  strokeWidth={1}/>
                    </div>
                </a>
            </div> */}

            <div className="flex flex-col h-full w-full pt-14">
                <h4 className='mx-auto'> {t('home:contact_title')} </h4>
                <div className='mt-6 flex flex-row justify-center items-center'>

                    <form className='max-w-[500px] my-auto w-full' onSubmit={handleOnSubmit}>
                    <InputField inputRef={nameRef} placeHolder={t('home:name_placeholder')} type="text" />

                    <InputField inputRef={emailRef} placeHolder={t('home:email_placeholder')} onAbort={handleCheckEmail} type='email' />

                    <div className='w-full relative flex mb-8'>
                        <div className={`${animationStyle['input-container']} ${animateText ? 'bg-transparent' : 'bg-gray-200 dark:bg-gray-800'}`}>

                        <h6 className={`before:border-t-gray-50 dark:before:border-t-darkColor before:border-t-2 flex px-[10px] ${animateText ? animationStyle['animate-place-holder'] : 'top-[12px]'}`} > {t('home:massage_placeholder')} </h6>

                        <textarea className='w-full h-full border-none bg-transparent z-[2] resize-none p-[10px]' ref={messageRef} rows="7" cols="70" required={true} type="text" onChange={handleOnFocus} onBlur={handleOnBlur} onFocus={handleOnFocus} />

                        </div>
                    </div>

                    <div className='w-full h-[3rem] flex justify-center items-center bg-primaryBlue rounded text-white'>
                        {!loading ? <input className='w-full h-full cursor-pointer rounded hover:ring-2 transition-all' value={t('home:send_massage')} type='submit' onSubmit={handleOnSubmit} /> : <h3> {t('home:sending_massage')} </h3>}

                    </div>
                    </form>

                </div>
            </div>

            {/* modal window message */}

            <Modal setOpenModal={setShowModal} openModal={showModal}>
                <div className='w-[90%] max-w-[450px] bg-gray-300 dark:bg-[#0a0a0a] flex justify-center p-2'>
                    <div className='w-full h-[80px] bg-gray-50 dark:bg-black flex justify-center items-center'>
                        <h3 className=''> {message} </h3>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const InputField = ({ inputRef, placeHolder, ...restProps }) => {

    const [animateText, setAnimateText] = useState(false)
  
    const handleOnBlur = () => {
      if (!inputRef.current.value > 0) {
          setAnimateText(false)
      }
    }
  
    const handleOnFocus = () => {
      setAnimateText(true)
    }
  
    return (
      <div className='w-full h-12 relative flex mb-8'>
        <div className={`${animationStyle['input-container']} ${animateText ? 'bg-transparent' : 'bg-gray-200 dark:bg-gray-800'}`}>   

          <h6 className={`before:border-t-gray-50 dark:before:border-t-darkColor before:border-t-2 flex px-[10px] ${animateText ? animationStyle['animate-place-holder'] : 'top-[12px]'}`} > {placeHolder} </h6>

          <input onChange={handleOnFocus} className='w-full h-full border-none bg-transparent z-[2] p-[10px]' ref={inputRef} required={true} onBlur={handleOnBlur} onFocus={handleOnFocus} {...restProps} />

        </div>
      </div>
    )
  }