
import Image from 'next/image'
import React from 'react'

const YourInstructor = () => {
    return (
        <div className='md:flex  justify-center md:px-16'>
            <div className='rounded-full flex justify-center md:px-10'>
                <Image src="/images/GaelWood.png" width={800} height={800} alt="Instructor" className='md:w-[800px] md:h-[800px] w-[125px] h-[125px]' />
            </div>
            <div className=''>
                <h5 className='text-voilet traking-[0.02em] font-semibold text-[19px] md:text-left text-center '>about your instructor</h5>
                <h2 className='md:text-[61px] text-[30px] py-4 md:text-left text-center '>Geal Wood</h2>
                <p className='md:text-[19px] text-[16px] font-normal leading-[140%] not-italic md:text-left text-center  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </div>
    )
}

export default YourInstructor