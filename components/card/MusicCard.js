import React, { useState } from 'react'
import Image from 'next/image'

const MusicCard = () => {

    const [musicOn, setMusicOn] = useState(true);
    const [musicOff, setMusicOff] = useState(false);

    return (
        <>
            {/* {musicOff ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOn(true)}>
                <p className='font-semibold'>off</p>
                <Image src="/images/sound.png" width={25} height={25} alt="sound" />
            </div> : ""} */}

            {musicOn ? <div className='flex items-center justify-center space-x-2' onClick={() => setMusicOff(true)}>
                <p className='font-semibold'>on</p>
                <Image src="/images/sound.gif" width={25} height={25} alt="sound" />
            </div> : ""}



        </>
    )
}

export default MusicCard