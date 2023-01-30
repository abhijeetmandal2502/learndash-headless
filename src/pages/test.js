import MenuCard from 'components/card/MenuCard'
import MenuCardSmall from 'components/card/MenuCardSmall'
import WelcomeBackModel from 'components/WelcomeBackModel'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaAlignLeft } from 'react-icons/fa'

const test = () => {

    const [clicked, setClicked] = useState(false);

    const HandleClick = () => {
        setClicked(true)
    }
    return (
        <>
            {/* <WelcomeBackModel /> */}


            <Head> LearnDash </Head>
            <div className={`grid grid-cols-1 md:grid-cols-2 md:divide-bordergray md:divide-x-[1px]  md:h-screen bg-[url('/images/bg-image.png')] bg-cover bg-center bg-no-repeat`}>

                <div className='flex flex-col justify-between p-10'>
                    <Image src='/images/logo.png' height='70' width='250' alt='logo' />
                    <div className='w-full'>
                        <p className='text-5xl'>massage ce.</p>
                        <p className='text-5xl'> simplified. </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:divide-x-[1px] md:divide-bordergray md:grid-cols-7'>
                    <div className='col-span-7 md:h-screen md:col-span-3'>
                        <div className='grid md:h-full grid-cols-1 divide-y-[1px] divide-bordergray md:border-0 border-y-[1px] border-bordergray'>
                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/start.png' height='155' width='180' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 font-semibold md:text-center'>Start</h3>
                                        <p className='mt-2 md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container' onClick={() => HandleClick()}>
                                <WelcomeBackModel />
                            </div>


                        </div>
                    </div>

                    <div className='col-span-7 md:h-screen md:col-span-3'>
                        <div className='grid h-full grid-cols-1 divide-y-[1px] divide-bordergray'>
                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/Concierge.png' height='65' width='65' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 font-semibold md:text-center'>Concierge</h3>
                                        <p className='mt-2 md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/NCBTMB-Approved.png' height='120' width='120' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 font-semibold md:text-center'>NCBTMB Approved</h3>
                                        <p className='mt-2 md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/Teacher-Lounge.png' height='70' width='51' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='font-semibold md:text-center md:mt-4'>Teachers Lounge</h3>
                                        <p className='mt-2 md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-span-7 p-4 md:col-span-1'>
                        <div className='flex items-center justify-center space-x-2'>
                            <p className='font-semibold'>menu</p>
                            <FaAlignLeft />
                        </div>
                    </div>

                    {/* {
                        clicked ? <WelcomeBackModel /> : ""
                    } */}
                </div>

            </div>



        </>
    )
}

export default test