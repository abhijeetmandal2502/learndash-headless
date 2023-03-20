import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={`  ${Styles.imageDiv}`}>
                <Image src="/images/doorframe.svg" width={200} height={200} className="h-[200px]" alt="door" />
                <div className={`${Styles.child} absolute top-[7px] left-[37.5px] max-[768px]:hidden`}>
                    <Image className={``} src="/images/doorgate.svg" width={98} height={98} alt="door" />
                    <Image className={`absolute top-[78px] left-[80px] `} src="/images/doorHandle.svg" width={3} height={3} alt="door" />
                </div>
                {/* for small device tablet */}
                <div className={`${Styles.child} absolute top-[33px] left-[26.5px] min-[992px]:hidden`}>
                    <Image className={``} src="/images/doorgate.svg" width={70} height={70} alt="door" />
                    <Image className={`absolute top-[57px] left-[55px] `} src="/images/doorHandle.svg" width={3} height={3} alt="door" />
                </div>


            </div>
        </div>
    )
}

export default Door