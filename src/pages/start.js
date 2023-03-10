import StartComponent from 'components/IwannaTech/StartComponent';
import React, { Children, useEffect, useState } from 'react'
import styles from '../styles/MenuComponent.module.css'
import Image from 'next/image';
import LogoCard from 'components/card/LogoCard';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import MusicCard from 'components/card/MusicCard';
import { useRouter } from 'next/router'
import WhyTech from 'components/IwannaTech/WhyTech';
import WhyUs from 'components/IwannaTech/WhyUs';
import WhyNow from 'components/IwannaTech/WhyNow';
import Needed from 'components/IwannaTech/Needed';
import Ncbtmb from 'components/IwannaTech/Ncbtmb';
import WhyYou from 'components/IwannaTech/WhyYou';
import NowWhat from 'components/IwannaTech/NowWhat';
import Create from 'components/IwannaTech/Create';
import NeverAlone from 'components/IwannaTech/NeverAlone';
import Commission from 'components/IwannaTech/Commission';
import GetStarted from 'components/IwannaTech/GetStarted';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

import { useRef } from 'react';
const Start = () => {

    // const [containerWidth, setContainerWidth] = useState();



    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
            id: 1,
            label: "start",
            content: <StartComponent />,
            background: styles.iwannaTechStart
        },
        {
            id: 2,
            label: "why teach",
            content:
                <WhyTech />,
            background: styles.whyTechbg
        },
        {
            id: 3,
            label: "why us",
            content:
                <WhyUs />,
            background: styles.whyUsbg
        },
        {
            id: 4,
            label: "why now",
            content:
                <WhyNow />,
            background: styles.whyNowbg
        },
        {
            id: 5,
            label: "needed",
            content:
                <Needed />,
            background: styles.neededbg
        },
        {
            id: 6,
            label: "ncbtmb",
            content:
                <Ncbtmb />,
            background: styles.ncbtmbbg
        },
        {
            id: 7,
            label: "why you",
            content:
                <WhyYou />,
            background: styles.whyyoubg
        },
        {
            id: 8,
            label: "now what",
            content:
                <NowWhat />,
            background: styles.nowwhatbg
        },
        {
            id: 9,
            label: "create",
            content:
                <Create />,
            background: styles.createbg
        },
        {
            id: 10,
            label: "never alone",
            content:
                <NeverAlone />,
            background: styles.neverAlonebg
        },
        {
            id: 11,
            label: "commission",
            content:
                <Commission />,
            background: styles.commissionbg
        },
        {
            id: 12,
            label: "get started",
            content:
                <GetStarted />,
            background: styles.getstartedbg
        },
    ];
    const containerRef = useRef();
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        setHeight(activeTabIndex * 36.66)

    }, [activeTabIndex])



    console.log('activeTabIndex', height)

    return (
        <>
            <div className={`relative grid grid-cols-12  ${tabsData[activeTabIndex].background} ${styles.aboutMain} `}>

                <div className='md:col-span-11 col-span-12 p-10 2xl:pl-20 md:pl-20'>
                    <div className={`flex justify-between items-center space-x-5 cursor-pointer `}>
                        <LogoCard LogoImage="/images/WhiteLogo.svg" />
                    </div>

                    <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { handleClickLobby() }} >
                        <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button>

                    <div className='grid grid-cols-12 pt-10 '>
                        <div className="col-span-2 md:col-span-2 flex -space-x-1 ">
                            {/* Loop through tab data and render button for each. */}
                            <div className='w-[0.4px] h-[440px] mt-4 bg-white'></div>

                            <div className=' flex flex-col  justify-start items-start'>
                                {tabsData.map((tab, idx) => {
                                    return (
                                        <div key={idx} className='flex space-x-1 justify-start items-center'>
                                            <div className={` relative w-10 h-10 ${idx === activeTabIndex
                                                ? styles.dotsBorder
                                                : ""
                                                }}`}>
                                                <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                                                    <Image src="/images/iwannaTechdot.svg" width={10} height={10} alt="i wanna tech dot" />
                                                </div>
                                                <div
                                                    className={`  
                                                                    ${idx === activeTabIndex ? styles.scaleEnterActive : styles.scaleLeaveActive}
                                                                     absolute top-[-30px] left-[-45px] w-full 
                                                                     ${styles.shadow}`}


                                                >

                                                    <svg height="100" width="100">
                                                        <circle cx="50" cy="50" r="10" stroke="white" stroke-width="2" fill="none" />
                                                    </svg>

                                                </div>

                                            </div>
                                            <button

                                                className={`text-white opacity-[0.6] text-[18px] py-[5.5px] cursor-pointer transition-all ease-in-out duration-500 hover:font-bold hover:opacity-[1] ${styles.shadowHover}   ${idx === activeTabIndex
                                                    ? `font-bold opacity-[1] hover:[20px] ${styles.shadow}`
                                                    : ""
                                                    }`}
                                                // Change the active tab on click.
                                                onClick={() => setActiveTabIndex(idx)}>
                                                {tab.label}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div >
                        {/* Show active tab content. */}
                        <div div className={`py-4 col-span-10 md:col-span-10 ${styles.fadeAnimation}`} >
                            <div>{tabsData[activeTabIndex].content}</div>
                        </div >
                    </div >
                </div >
                <div className='col-span-12  p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-white '>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                            onClick={() => { router.push('/') }}>
                            <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                <p className='font-semibold text-white'>Close </p>

                                <AiOutlineClose size={20} className="text-white" />

                            </div>
                        </div>
                        <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                            <MusicCard textColor="text-white" />
                        </div>
                    </div>
                </div>

                {activeTabIndex < 11 ? <div className={`${styles.arrowUpDown} z-[1000] absolute bottom-5 left-1/2`}>
                    <SlArrowDown size={20} className={`${styles.one} text-white`} />
                    <SlArrowDown size={20} className={`${styles.two} text-white`} />
                    <SlArrowDown size={20} className={`${styles.three} text-white`} />
                </div> : ""}
                {activeTabIndex > 0 ? <div className={`${styles.arrowUpDown} z-[1000] absolute top-5 left-1/2`}>
                    <SlArrowUp size={20} className={`${styles.one} text-white`} />
                    <SlArrowUp size={20} className={`${styles.two} text-white`} />
                    <SlArrowUp size={20} className={`${styles.three} text-white`} />
                </div> : ""}
            </div >

        </>
    )
}

export default Start

