import React, { useState } from 'react'
import MusicCard from 'components/card/MusicCard'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import Nav from './Nav'
import Contact from '../Menu/Contact'
import { BiArrowBack } from 'react-icons/bi'
import styles from '../../src/styles/MenuComponent.module.css'

const MenuComponent = ({ HideMenuMethod, On }) => {
    const [show, setShow] = useState(false);



    if (On === true) {
        setTimeout(() => {
            setShow(true)
        }, 1500)
    }

    if (On === false) {
        setTimeout(() => {
            setShow(false)
        }, 50)
    }

    console.log('HideMenuMethod', HideMenuMethod);
    console.log('On', On);
    return (
        <>
            <div className={`grid grid-cols-12 md:h-screen bg-[url('/images/menu-bg.png')] bg-cover bg-center bg-no-repeat overflow-x-hidden`}>

                <div className='col-span-11 p-10 '>

                    {On ? <div className={`flex justify-between items-center space-x-5 cursor-pointer ${!show ? styles.hide : styles.aboutMain}`}>
                        <Image src='/images/black-bg-logo.png' height='30' width='120' alt='logo' className='max-sm:h-[40px] max-sm:[50px] h-[70px] w-[250px]' />
                        <div className='flex max-sm:visible invisible items-center justify-center space-x-2 '>
                            <p className='font-semibold text-lg'>menu</p>
                            <Image src="/images/menuIcon.png" width={30} height={30} alt="menu" className='max-sm:h-5 max-sm:w-5' />
                        </div>
                    </div> : ""}


                    {On ? <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-1.5 rounded-3xl my-5 ${!show ? styles.hide : styles.aboutMain}`} onClick={() => { HideMenuMethod() }} >
                        <BiArrowBack size={20} className="text-white" /><span className='text-sm'>lobby</span></button> : ""}

                    {On ? <div className={`flex justify-between  mt-20  ${!show ? styles.hide : styles.aboutMain}`}>
                        <Contact />
                        <Nav />

                    </div> : ""}

                </div>

                <div className='col-span-1 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-white '>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center   absolute top-5 left-1/4' onClick={() => HideMenuMethod()}>
                            <div className={`flex space-x-3 bg-transparent items-center `} >
                                <p className='font-semibold text-white'>Close </p>
                                <div className=''>
                                    <AiOutlineClose size={20} className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className=' absolute bottom-5 left-1/3'>
                            <MusicCard />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MenuComponent