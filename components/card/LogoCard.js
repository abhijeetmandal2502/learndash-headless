import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LogoCard = ({ LogoImage }) => {
    return (
        <div className='md:mt-0 mt-5'>
            <Link href="/">
                <Image src={`${LogoImage}`} height='30' width='120' alt='logo' className=' md:h-[100px] md:w-[300px] h-[50px] w-[180px]
                 4xl:h-[400px] 4xl:w-[700px] 3xl:h-[300px] 3xl:w-[500px] ' />
                {/* <div className='flex max-sm:visible invisible md:hidden items-center justify-center space-x-2 '>
                    <p className='font-semibold text-lg'>menu</p>
                    <Image src="/images/menuIcon.png" width={30} height={30} alt="menu" className='max-sm:h-5 max-sm:w-5' />
                </div> */}
            </Link>
        </div>
    )
}

export default LogoCard