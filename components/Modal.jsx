import React, { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import styles from '../styles/animation.module.css'

export default function Modal({ children, setOpenModal, openModal }) {

  const [transtion, setTranstion] = useState(false)

  useEffect(() => {
    if (openModal === false) {
      document.body.style.overflow = ''
      setTimeout(() => setTranstion(false), 500)
      
    } else if (openModal === true) {
      document.body.style.overflow = 'hidden'
      setTranstion(true)
    }

  },[openModal])

  return (
    <>
      {
      transtion && <Portal node={document && document.getElementById('root')} >
        <div onClick={() =>  setOpenModal(false)} className={openModal ? styles['full-payload'] :  styles['full-payload hide-modal']}>
            {children}
        </div>
        </Portal>
        }
      </>
    );
}
