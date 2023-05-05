import React, { useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'


const WhyUs = ({ activeTabIndex }) => {

    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 2) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation} max-h-screen  `}>

                {/* image for mobile */}
                <div className={`relative  col-span-12 md:col-span-8  2xl:hidden md:hidden ${loading ? styles.tranatationNone : 'opacity-0'} -mt-2 ${styles.imgcenter} `}>

                    <div className={` relative  flex  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[260px]  '>
                            <div className={`w-[175px] absolute bottom-[46px] right-[0px]`}>

                                <Image src='/images/RectangleWhyUs.png' width={400} height={400} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[28deg] absolute top-[130px] -right-[50.5px]  z-10 `}>
                                <Image src='/images/SubtractYellow.png' width={400} height={300} alt="wanna tech png" className={` w-[200px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[40px]  -right-[10px] ${styles.imgRotate} w-[210px]`}>
                            <Image src='/images/man.png' width={500} height={350} alt="wanna tech png" className={` `} />
                        </div>
                        {/* logo for mobile */}
                        <div className=' absolute top-20 left-3'>
                            <Image src="/images/WhiteLogo.svg" width="100" height="200" alt="tech logo" />
                        </div>

                    </div>
                </div>


                <div className='col-span-12 md:col-span-4 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold md:text-[40px] triplelargef ${styles.shadow} md:leading-[80px] tracking-wide`}>Why Us?</h2>
                        <h4 className='mediumf md:text-[35px] font-semibold 3xl:py-8 py-4'>because we’re</h4>
                        <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" />
                        <p className='text-white font-bold smallf pt-5'>You’ve probably already explored around and noticed we do things a little differently from other online ce sites!
                            <br></br><br></br>
                            We’re happy to disrupt the universe, and we’d love to have you part of it!</p>

                    </div>
                </div>
                <div className={`relative col-span-12 md:col-span-8 h-[100vh] 2xl:block 3xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'} mt-5 `}>
                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/RectangleWhyUs.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                <Image src='/images/SubtractYellow.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[60px] ${styles.imgRotate}    w-[560px]`}>
                            <Image src='/images/man.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>

                {/* for extra large device */}

                <div className={`relative col-span-12 md:col-span-8 h-[100vh] 3xl:block 2xl:hidden md:hidden hidden ${loading ? styles.tranatationNone : 'opacity-0'} mt-5 `}>
                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[600px]  '>
                            <div className={`w-[600px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/RectangleWhyUs.png' width={1000} height={600} alt="wanna tech png" className={` w-[600px]`} />
                            </div>
                            <div className={`-rotate-[28deg] absolute -bottom-[233px] -right-[100.5px]  z-10  `}>
                                <Image src='/images/SubtractYellow.png' width={1000} height={600} alt="wanna tech png" className={` w-[650px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[27px]  right-[60px] ${styles.imgRotate}    w-[670px]`}>
                            <Image src='/images/man.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>

                {/* for tablet*/}

                <div className={`relative col-span-12 md:col-span-8 h-[100vh] 2xl:hidden md:block hidden ${loading ? styles.tranatationNone : 'opacity-0'} -mt-2  `}>

                    <div className={` relative  flex xl:mr-20 md:-mr-10 mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[400px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/RectangleWhyUs.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[32deg] absolute -bottom-[130px] -right-[80.5px]  z-10 `}>
                                <Image src='/images/SubtractYellow.png' width={1000} height={600} alt="wanna tech png" className={` w-[450px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[40px]  right-[0px] ${styles.imgRotate} w-[500px]`}>
                            <Image src='/images/man.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs