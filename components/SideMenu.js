import React from 'react'
import Image from 'next/image'
import MusicCard from './card/MusicCard'


const SideMenu = ({ HideMenuMethod }, { ShowMenuMethod }, On) => {
    return (
        <>
            <div className=' cursor-pointer'>
                <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/4'>
                    <div className='flex items-center justify-center space-x-2' onClick={() => ShowMenuMethod()}>
                        <p className='font-semibold'>menu</p>
                        <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" />
                    </div>

                    {/* <div className={`flex items-center justify-center space-x-2 ${On ? text - white : ""}`} onClick={() => HideMenuMethod()}>
                        <p className='font-semibold'>Close</p>
                        <GrClose />
                    </div> */}
                </div>
                <div className=' absolute bottom-5 left-1/3'>
                    <MusicCard />
                </div>
            </div>
        </>
    )
}

export default SideMenu