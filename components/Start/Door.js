import React from 'react'
import Styles from '../../components/card/animatedDoor/Door.module.css';
import Image from 'next/image'

const Door = () => {
    return (
        <div className='flex justify-center '>
            <div className={` hidden md:block ${Styles.imageDiv}`}>
                <Image
                    src="/images/doorframe.svg"
                    width={200} height={200}
                    className="
                    h-[70px]
                 md:h-[200px] 
                 4xl:h-[420px] 
                 4xl:w-[420px] 
                 3xl:h-[250px] 
                 3xl:w-[250px]
                 medium:h-[150px] 
                 medium:w-[150px]
                 "

                    alt="door"
                />
                <div
                    className={`
                 ${Styles.child} 
                 absolute 
                 md:top-[9px]
                 md:left-[37.5px] 
                 sm:left-[40px]
                 top-[1px] 
                 left-[38px]
                 medium:top-[5px]
                 medium:left-[28px]  
                 2xl:top-[7px] 
                 4xl:top-[16px] 
                 3xl:top-[10px] 
                 xl:top-[8px] 
                 lg:top-[7px] 
                 4xl:left-[80px] 
                 3xl:left-[48px] 
                 h-[100%]
                 w-[100%]`}>
                    <div
                        className='
                        w-[36px]
                        h-[36px]
                    md:w-[95px] 
                    md:h-[95px] 
                    xl:w-[98px] 
                    xl:h-[98px] 
                    4xl:w-[205px] 
                    4xl:h-[195px] 
                    3xl:w-[122px] 
                    3xl:h-[105px] 
                    lg:w-[97px] 
                    lg:h-[97px]
                    medium:h-[74px] 
                    medium:w-[74px]
                    '>
                        <Image
                            className={``}
                            src="/images/doorgate.svg"
                            width={205}
                            height={195}
                            alt="door" />
                    </div>
                    <div
                        className='
                    absolute 
                    w-[2px]
                    h-[2px]
                    top-[25px] 
                    left-[25px] 
                    md:w-[3px]
                    md:h-[3px]
                    md:top-[78px] 
                    md:left-[80px] 
                    
                    medium:top-[60px] 
                    medium:left-[60px] 
                    3xl:w-[5px] 
                    3xl:h-[5px] 
                    4xl:top-[175px] 
                    4xl:left-[150px] 
                    3xl:top-[100px] 
                    3xl:left-[100px] 
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