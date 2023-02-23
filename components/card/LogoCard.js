import React from 'react'
import Image from 'next/image'

const LogoCard = ({ LogoImage }) => {
    return (
        <div>
            <Image src={`${LogoImage}`} height='30' width='120' alt='logo' className='max-sm:h-[40px] max-sm:[50px] h-[70px] w-[250px]' />
            <div className='flex max-sm:visible invisible hidden items-center justify-center space-x-2 '>
                <p className='font-semibold text-lg'>menu</p>
                <Image src="/images/menuIcon.png" width={30} height={30} alt="menu" className='max-sm:h-5 max-sm:w-5' />
            </div>
        </div>
    )
}

export default LogoCard