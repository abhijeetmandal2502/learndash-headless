import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const SimplyChoose = ({ startMethodHide }) => {
    return (
        <>
            <div className=' flex flex-col justify-between'>
                <div className=''>
                    {/* <Lobby /> */}
                    <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl my-5' onClick={() => startMethodHide()}>
                        <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm'>lobby</span></button>
                </div>


                <div className='pt-32 '>
                    <h2 className='text-6xl'>simply choose.</h2>
                    <p className='text-2xl py-5'>smile, you can’t make a bad choice.</p>
                </div>
            </div>
        </>
    )
}

export default SimplyChoose