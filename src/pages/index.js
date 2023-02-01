import MenuCard from 'components/card/MenuCard'
import MenuCardSmall from 'components/card/MenuCardSmall'
import WelcomeBackModel from 'components/WelcomeBackModel'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaAlignLeft } from 'react-icons/fa'
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import MusicCard from 'components/card/MusicCard'

const Test = () => {
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    const HandleClick = () => {
        setTimeout(() => { setOpen(true) }, 100)
    }

    const changeDuration = () => {

        setTimeout(() => setOpen(false), 1200);
        setTimeout(() => setDown(false), 1200);
    }




    console.log('open', open);
    console.log('down', down);

    return (
        <>
            {/* <WelcomeBackModel /> */}

            <Head> LearnDash </Head>
            <div className={`grid grid-cols-1 md:grid-cols-12   md:h-screen bg-[url('/images/bg-image.png')] bg-cover bg-center bg-no-repeat`}>

                <div className='flex flex-col justify-between p-10 col-span-6'>
                    <Image src='/images/logo.png' height='70' width='250' alt='logo' />
                    <div className='w-full'>
                        <p className='text-5xl'>massage ce.</p>
                        <p className='text-5xl'> simplified. </p>
                    </div>
                </div>


                {!open ? <div className='col-span-5 grid grid-cols-12 animateMain '>
                    <div className='col-span-6 md:h-screen md:col-span-6'>
                        <div className='grid md:h-full grid-cols-1 divide-y-[1px] divide-bordergray md:border-0 border-y-[1px] border-bordergray'>
                            <div className='flex flex-col justify-center border-l border-l-bordergray  p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/start.png' height='100' width='100' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 lineUp font-semibold md:text-center'>Start</h3>
                                        <p className='mt-2 hide  md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container border-l border-l-bordergray' onClick={() => HandleClick()}>

                                <div className='flex space-x-4 md:block md:space-x-0 image-card '>
                                    <Image alt='start' src='/images/Im-Back.png' height='65' width='65' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 lineUp font-semibold md:text-center'>I Am Back</h3>
                                        <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>

                    <div className='col-span-12 md:h-screen md:col-span-6 border-l border-bordergray'>
                        <div className='grid h-full grid-cols-1 divide-y-[1px] divide-bordergray'>
                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/Concierge.png' height='65' width='65' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 font-semibold md:text-center lineUp'>Concierge</h3>
                                        <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/NCBTMB-Approved.png' height='120' width='120' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='mt-4 font-semibold md:text-center lineUp'>NCBTMB Approved</h3>
                                        <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                    <Image alt='start' src='/images/Teacher-Lounge.png' height='70' width='51' className='md:mx-auto ' />
                                    <div className='w-full'>
                                        <h3 className='font-semibold lineUp md:text-center md:mt-4'>Teachers Lounge</h3>
                                        <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> : ""}

                {open ? <div className={` col-span-5 relative  animateUp ${down == true ? 'animateDown' : ""} `} >
                    <div className=" my-10  px-10">
                        <div className="w-full  m-auto bg-transparent  border border-bordergray p-4 lg:max-w-sm">
                            <div className='flex justify-between items-center'>
                                <h2 className='font-semibold py-2'>Welcome Back !</h2>
                                <button onClick={() => { setDown(true); changeDuration() }}><AiOutlineClose /></button>
                            </div>

                            <form className="">
                                <div className="mb-2">
                                    <label
                                        for="email"
                                        className="block text-sm font-semibold text-gray-800"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray   focus:outline-none "
                                        placeholder='enter your mail'
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="password"
                                        className="block text-sm font-semibold text-gray-800"

                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="block w-full px-4 py-2 mt-2  bg-white border  border-bordergray    focus:outline-none "
                                        placeholder='**********'
                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-1 items-center'>

                                        <div class="form-check">
                                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>

                                        <p>remember me</p>
                                    </div>
                                    <Link href="#">
                                        <p className='font-bold'>forget Password</p>
                                    </Link>

                                </div>
                                <div className="mt-6 mx-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                    : ""}



                <div className='col-span-12 p-4 md:col-span-1 relative h-screen w-full border-l border-bodergray '>
                    <div className='flex items-center justify-center space-x-2 absolute top-1'>
                        <p className='font-semibold'>menu</p>
                        <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" />
                    </div>
                    <div className=' absolute bottom-5 '>
                        <MusicCard />
                    </div>
                </div>

            </div>



        </>
    )
}

export default Test