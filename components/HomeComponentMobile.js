import React, { useState } from 'react'
import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import LoginModel from './LoginModel';
import Conceierge from './Conceierge';
import Ncbtmb from './Ncbtmb';
import SimplyChoose from './SimplyChoose';
import LogoCard from './card/LogoCard';
import styles2 from '../components/HomeComponentsMob.module.css'

import styles from '../src/styles/NewIndex.module.css'

const HomeComponentMobile = ({ ShowMenuMethod }) => {

    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState('');
    const menuList = [
        {
            image: "/images/start.png",
            title: "start",
            content: <SimplyChoose />
        },
        {
            image: "/images/IamBack.svg",
            title: "i’m back",
            content: <LoginModel title="welcome back" />
        },
        {
            image: "/images/Concierge.svg",
            title: "concierge",
            content: <Conceierge />
        },
        {
            image: "/images/ncbtmb.svg",
            title: "ncbtmb approved",
            content: <Ncbtmb />
        },
        {
            image: "/images/teacherLounge.svg",
            title: "teacher’s lounge",
            content: <LoginModel title="Teacher s Lounge" />
        },
    ]

    const LogoImage = "/images/Logo.svg"

    // console.log('activeTabIndex', activeTabIndex);

    return (
        <>
            <div className='  relative bg-transparent'>
                <div className={`z-5 ${activeTabIndex == "" ? styles2.MenuShowAnimation : styles2.MenuHideAnimation}`}>

                    <div className='flex justify-between  items-center space-x-5 cursor-pointer px-3'>
                        <LogoCard LogoImage={LogoImage} />
                        {/* menu icon for small device */}
                        <div className=''>
                            <div className='flex items-center justify-center  space-x-2' onClick={() => { ShowMenuMethod() }}>
                                <p className='font-semibold text-xl 4xl:text-[40px] 3xl:text-[30px]'>menu</p>
                                {/* <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" /> */}
                                <svg width="24" height="24" className={` 4xl:w-[50px] 4xl:h-[50px] 3xl:w-[40px] 3xl:h-[40px]  ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className='mb-5'>
                        <p className=' md:text-5xl text-4xl font-normal py-2 px-3'>massage ce.</p>
                        <p className=' md:text-5xl text-4xl  font-normal py-2 px-3'> simplified. </p>
                    </div>

                    {
                        menuList?.map((item, id) => {
                            return (
                                <>
                                    <div className='border-t border-gray' onClick={() => { setActiveTabIndex(id) }}>
                                        <div key={id} className='flex space-x-5 items-center px-3  py-5'>
                                            <Image alt='start' src={item.image} height='80' width='80' />
                                            <h3 className='mt-4 '>{item.title}</h3>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>


                {/* <div className={`bg-black w-[100%] h-screen ${activeTabIndex !== "" ? styles2.righttoleftAnimation : styles2.lefttorightAnimation} `}>


                </div> */}




                <div className={`${activeTabIndex !== "" ? styles2.toggleOn : styles2.toggleOff} w-full h-screen  z-10 ${activeTabIndex === 0 ? "bg-[url('/images/start-bg.png')]" : ""}  `}>
                    <div className='flex justify-between  items-center space-x-5 cursor-pointer px-3'>
                        <LogoCard LogoImage={LogoImage} />
                        <div className='lg:hidden'>
                            <div className='flex items-center justify-center  space-x-2' onClick={() => { ShowMenuMethod() }}>
                                <p className='font-semibold text-xl 4xl:text-[40px] 3xl:text-[30px]'>menu</p>
                                <svg width="24" height="24" className={` 4xl:w-[50px] 4xl:h-[50px] 3xl:w-[40px] 3xl:h-[40px]  ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <button className={`  flex items-center space-x-1 bg-black text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { setActiveTabIndex('') }} >
                        <BiArrowBack size={20} className="text-white " /><span className='text-md 3xl:text-2xl font-semibold'>lobby</span></button>

                    <div className={`text-black ${activeTabIndex === 0 ? 'px-0' : 'px-3'}`}>{menuList[activeTabIndex]?.content}</div>

                </div>
            </div>
        </>
    )
}

export default HomeComponentMobile