import React, { useState } from 'react'
import Image from 'next/image'
import { BsPlay } from 'react-icons/bs'

const MusicCard = ({ textColor }) => {

    const [musicOn, setMusicOn] = useState(false);



    return (
        <>


            {musicOn ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOn(false)}>
                <p className={`font-semibold ${textColor}`}>on</p>
                <Image src="/images/sound.gif" width={25} height={25} alt="sound" />
            </div> : ""}

            {!musicOn ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOn(true)}>
                <p className={`font-semibold ${textColor}`}>off</p>
                {/* <Image src="/images/sound.png" width={25} height={25} alt="sound" /> */}

                <BsPlay size={30} className={`${textColor}`} />
            </div> : ""}



        </>
    )
}

export default MusicCard