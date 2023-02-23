
import Image from 'next/image'
import React from 'react'

const YourInstructor = () => {
    return (
        <div className='flex  justify-center px-16'>
            <div className='rounded-full px-10'>
                <Image src="/images/GaelWood.png" width={800} height={800} alt="Instructor" />
            </div>
            <div className=''>
                <h5 className='text-voilet traking-[0.02em] font-semibold text-[19px] '>about your instructor</h5>
                <h2 className='text-[61px] py-4'>Geal Wood</h2>
                <p className='text-[19px] font-normal leading-[140%] not-italic '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </div>
    )
}

export default YourInstructor