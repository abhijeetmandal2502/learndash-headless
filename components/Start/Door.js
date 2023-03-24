import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={`  ${Styles.imageDiv}`}>
                <Image src="/images/doorframe.svg" width={200} height={200} className="h-[200px] 3xl:h-[420px] 3xl:w-[420px]" alt="door" />
                <div className={`${Styles.child} absolute md:top-[9px] top-[8px] 2xl:top-[7px] 3xl:top-[16px] xl:top-[8px] lg:top-[7px] left-[37.5px] 3xl:left-[80px] max-[992px]:hidden h-[100%] w-[100%]`}>
                    <div className='md:w-[95px] md:h-[95px] xl:w-[98px] xl:h-[98px] 3xl:w-[205px] 3xl:h-[195px] lg:w-[97px] lg:h-[97px]'>
                        <Image className={``} src="/images/doorgate.svg" width={205} height={195} alt="door" />
                    </div>
                    <div className='absolute top-[78px] left-[80px]  3xl:w-[5px] 3xl:h-[5px] 3xl:top-[175px] 3xl:left-[150px] w-[3px] h-[3px]'>
                        <Image className={` `} src="/images/doorHandle.svg" width={10} height={10} alt="door" />
                    </div>

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