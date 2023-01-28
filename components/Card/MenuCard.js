import React from 'react'
import Image from 'next/image'

const MenuCard = () => {
    return (
        <>

            <div className='relative'>
                <div className=' shadow-md '>
                    <Image src="/images/door.png" width={300} height={350} />

                    <h2 className='text-center font-bold  '>Start</h2>
                    <p className='text-center font-bold py-2 opacity-0 hover:opacity-100'>Have any quistion get in touch </p>

                </div>
                <div className=' absolute top-0 right-0 shadow-md opacity-0 hover:opacity-100 hover:text-voilet'>
                    <Image src="/images/door.png" width={300} height={350} />

                    <h2 className='text-center font-bold  '>Start</h2>
                    <p className='text-center    text-gray py-2'>Have any quistion get in touch </p>

                </div>

            </div>
        </>
    )
}

export default MenuCard