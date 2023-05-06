import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LogoCard = ({ LogoImage }) => {
    return (
        <div className='md:mt-0 mt-5'>
            <Link href="/">
                <Image src={`${LogoImage}`} height='30' width='120' alt='logo' className=' md:h-[100px] md:w-[300px] h-[50px] w-[180px]
                 4xl:h-[250px] 4xl:w-[500px] 3xl:h-[300px] 3xl:w-[500px] ' />
            </Link>
        </div>
    )
}

export default LogoCard