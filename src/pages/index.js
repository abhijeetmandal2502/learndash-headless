
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import MusicCard from 'components/card/MusicCard'
import styles from '../styles/NewIndex.module.css'
import LoginModel from 'components/LoginModel';


const Home = () => {


    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    const parentDivShow = styles.parentchildon;
    const parentDivHide = styles.parentchildoff;
    const childrenDivShow = styles.childparenton;
    const childrenDivHide = styles.childparentoff;
    const anmationEnd = styles.animationEndHideChild;
    const scaleUp = styles.modelScaleUpAnimation;
    const scaleDown = styles.modelScaleDownAnimation;

    const [showParent, setShowParent] = useState("");
    const [hideParent, setHideParent] = useState("");
    const [showChild, setShowChild] = useState("");
    const [hideChild, setHideChild] = useState("");

    const HandleClick = () => {
        setTimeout(() => { setOpen(true) }, 100)
        setHideParent(parentDivHide)
        setShowChild(childrenDivShow)
    }
    const changeDuration = () => {
        setTimeout(() => setOpen(false));
        setTimeout(() => setHideChild(childrenDivHide))
        setTimeout(() => setShowParent(parentDivShow))
        setTimeout(() => setHideChild(true), 2000)
        setTimeout(() => setDown(false));
    }

    return (
        <>

            <Head> LearnDash </Head>


            <div className={`grid grid-cols-12 md:h-screen bg-[url('/images/bg-image.png')] bg-cover bg-center bg-no-repeat`}>

                <div className='flex flex-col justify-between p-10 col-span-12 md:col-span-6'>
                    <div className='flex justify-between items-center space-x-5 cursor-pointer '>
                        <Image src='/images/logo.png' height='30' width='120' alt='logo' className='max-sm:h-[40px] max-sm:[50px] h-[70px] w-[250px]' />
                        <div className='flex max-sm:visible invisible items-center justify-center space-x-2 '>
                            <p className='font-semibold text-lg'>menu</p>
                            <Image src="/images/menuIcon.png" width={30} height={30} alt="menu" className='max-sm:h-5 max-sm:w-5' />
                        </div>
                    </div>
                    <div className='w-full pb-8'>
                        <p className='md:text-7xl text-4xl font-normal py-2'>massage ce.</p>
                        <p className='md:text-7xl text-4xl font-normal py-2'> simplified. </p>
                    </div>
                </div>


                <div className='col-span-12 md:col-span-5 z-10 relative'>
                    <div className={` grid grid-cols-12 ${!open ? showParent : hideParent}`}>
                        <div className='col-span-12 md:h-screen md:col-span-6'>
                            <div className='grid md:h-full grid-cols-1 divide-y-[1px] divide-bordergray md:border-0 border-y-[1px] border-bordergray'>
                                <div className='flex flex-col justify-center md:border-l md:border-l-bordergray cursor-pointer  p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/start.png' height='200' width='200' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 lineUp font-semibold md:text-center'>start</h3>
                                            <p className='mt-2 hide  md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col z-40 justify-center cursor-pointer  p-2 zoom-effect-container md:border-l md:border-l-bordergray' onClick={() => { HandleClick(); }}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card '>
                                        <Image alt='start' src='/images/Im-Back.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 lineUp font-semibold md:text-center'>i’m back</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-12 md:h-screen md:col-span-6 md:border-l md:border-l-bordergray'>
                            <div className='grid h-full grid-cols-1 divide-y-[1px] divide-bordergray'>
                                <div className='flex flex-col justify-center p-2 zoom-effect-container cursor-pointer '>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/Concierge.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center lineUp'>concierge</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <Image alt='start' src='/images/NCBTMB-Approved.png' height='120' width='120' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center lineUp'>ncbtmb approved</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>check if your state is approved</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <Image alt='start' src='/images/Teacher-Lounge.png' height='70' width='51' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='font-semibold lineUp md:text-center md:mt-4'>teacher’s lounge</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={` col-span-12 md:col-span-5 z-5 absolute  ${hideChild ? anmationEnd : ""} ${open ? showChild : hideChild}  `} >
                        <div className=" relative mt-10  ">
                            <div className={` bg-transparent relative  border border-bordergray ${open ? scaleUp : scaleDown} `}>
                                <div className='flex justify-between '>
                                    <h2 className=' font-normal py-2 pb-4'>Welcome Back !</h2>

                                </div>
                                <button className='absolute top-4 right-4' onClick={() => { changeDuration(); }}><AiOutlineClose /></button>

                                <LoginModel />
                            </div>

                        </div>
                    </div>


                </div>


                <div className='col-span-1 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray '>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/4'>
                            <p className='font-semibold'>menu</p>
                            <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" />
                        </div>
                        <div className=' absolute bottom-5 left-1/3'>
                            <MusicCard />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home