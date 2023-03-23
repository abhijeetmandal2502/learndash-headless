import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={`  ${Styles.imageDiv}`}>
                <Image src="/images/doorframe.svg" width={200} height={200} className="h-[200px]" alt="door" />
                <div className={`${Styles.child} absolute md:top-[9px] top-[8px] 2xl:top-[7px] xl:top-[8px] lg:top-[7px] left-[37.5px] max-[992px]:hidden h-[100%] w-[100%]`}>
                    <div className='md:w-[95px] md:h-[95px] xl:w-[98px] xl:h-[98px] lg:w-[97px] lg:h-[97px]'>
                        <Image className={``} src="/images/doorgate.svg" width={98} height={98} alt="door" />
                    </div>
                    <Image className={`absolute top-[78px] left-[80px] `} src="/images/doorHandle.svg" width={3} height={3} alt="door" />
                </div>
                {/* for small device tablet */}
                {/* <div className={`${Styles.child} absolute top-[33px]  left-[26.5px] lg:hidden`}>
                    <Image className={``} src="/images/doorgate.svg" width={70} height={70} alt="door" />
                    <Image className={`absolute top-[57px] left-[55px] `} src="/images/doorHandle.svg" width={3} height={3} alt="door" />
                </div> */}


            </div>
        </div>
    )
}

export default Door