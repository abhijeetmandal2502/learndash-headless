import React, { useState } from 'react'
import Image from 'next/image'
import { BsPlay } from 'react-icons/bs'

const MusicCard = ({ textColor }) => {
    const [musicOn, setMusicOn] = useState(false);
    return (
        <>
            {musicOn ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOn(false)}>
                <p className={`font-semibold dubblelargef ${textColor} `}>on</p>
                <Image src="/images/sound.gif" width={25} height={25} alt="sound" className='4xl:w-[100px] 4xl:h-[100px] 3xl:w-[80px] 3xl:h-[80px]' />
            </div> : ""}

            {!musicOn ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOn(true)}>
                <p className={` font-semibold dubblelargef ${textColor}`}>off</p>
                <BsPlay size={30} className={`${textColor} 4xl:w-[100px] 4xl:h-[100px] 3xl:w-[80px] 3xl:h-[80px]`} />
            </div> : ""}
        </>
    )
}

export default MusicCard