import React from 'react'
import Image from 'next/image'
import MusicCard from './card/MusicCard'
import styles from '../src/styles/NewIndex.module.css'


const SideMenu = ({ ShowMenuMethod }) => {

    const textColor = 'text-black'

    return (
        <>
            <div className=' cursor-pointer'>
                <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/2 -translate-x-1/2'>
                    <div className='flex items-center justify-center space-x-2' onClick={() => ShowMenuMethod()}>
                        <p className='font-semibold dubblelargef'>menu</p>
                        <svg width="24" height="24" className={`${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                            <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                            <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                        </svg>
                    </div>

                    {/* <div className={`flex items-center justify-center space-x-2 ${On ? text - white : ""}`} onClick={() => HideMenuMethod()}>
                        <p className='font-semibold'>Close</p>
                        <GrClose />
                    </div> */}
                </div>
                <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
                    <MusicCard textColor={textColor} />
                </div>
            </div>
        </>
    )
}

export default SideMenu