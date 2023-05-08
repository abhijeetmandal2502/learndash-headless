import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={` hidden md:block ${Styles.imageDiv}`}>
                <Image
                    src="/images/doorframe.svg"
                    width={154} height={145}
                    className="w-full h-full"
                    alt="door"
                />
                <div
                    className={`
                 ${Styles.child} 
                 absolute 
                 top-[0px] 
                 left-[29px] 
                 `}>
                    <div
                        className='
                    '>
                        <Image
                            className="w-full h-full"
                            src="/images/doorgate.svg"
                            width={74.5}
                            height={144}
                            alt="door" />
                    </div>
                    <div
                        className='
                    absolute 
                    w-[3px]
                    h-[5px]
                    top-[60px] 
                    left-[50px] 
                    '>
                        <Image className={` `} src="/images/doorHandle.svg" width={10} height={10} alt="door" />
                    </div>

                </div>

            </div>

            {/* for small device tablet */}
            <div className={`${Styles.child}  md:hidden`}>
                <Image className={``} src="/images/start.png" width={180} height={150} alt="door" />
            </div>
        </div>
    )
}

export default Door