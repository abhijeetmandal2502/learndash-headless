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
import classNames from "classnames"

import { useRef } from 'react';
const Start = () => {

    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // const [startInitial, setStartInitial] = useState("mt-[394px]")

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
                <WhyUs state={activeTabIndex} />,
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
                <WhyYou state={activeTabIndex} />,
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
                <GetStarted state={activeTabIndex} />,
            background: styles.getstartedbg
        },
    ];

    //animate tab integator

    const [buttonRefs, setButtonRefs] = useState([])

    useEffect(() => {
        setButtonRefs(prev => prev.slice(0, tabsData.length))
    }, [tabsData.length])

    const navRef = useRef(null)
    const isInitialRender = useRef(true)
    const navRect = navRef.current?.getBoundingClientRect()

    const selectedRect = buttonRefs[activeTabIndex]?.getBoundingClientRect()

    let selectStyles = { opacity: 0 }
    if (navRect && selectedRect) {
        selectStyles.height = selectedRect.height
        selectStyles.transform = `translateY(calc(${(selectedRect.top) -
            navRect.top}px ))`
        selectStyles.opacity = 1
        selectStyles.transition = isInitialRender.current
            ? `opacity 150ms 150ms`
            : `transform 1000ms 0ms, opacity 150ms 150ms, height 150ms`

        isInitialRender.current = false
    }



    //  console.log('selectedRect', selectedRect.top, navRect.top);


    return (
        <>
            <div className={`relative grid grid-cols-12  ${tabsData[activeTabIndex].background} ${styles.aboutMain} `}>

                <div className='md:col-span-11 col-span-12 p-10 2xl:pl-20 md:pl-20 z-10'>
                    <div className={`flex justify-between items-center space-x-5 cursor-pointer `}>
                        <LogoCard LogoImage="/images/WhiteLogo.svg" />
                    </div>

                    <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { handleClickLobby() }} >
                        <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button>

                    <div className='grid grid-cols-12 pt-10 '>
                        <div className="col-span-2 md:col-span-2 flex -space-x-[3px] ">
                            {/* Loop through tab data and render button for each. */}
                            <div className=' relative w-[0.4px] h-[400px] mt-4 bg-white'>

                                <div className={`absolute ${activeTabIndex === 0 ? 'mt-[339.2px]' : 'mt-[340px]'}  ${styles.transformTopBottomIndicater}  left-[-49px] top-2 `} style={selectStyles}>
                                    <svg>
                                        <circle cx="50" cy={50} r="10" stroke="white" stroke-width="2" fill="none">

                                        </circle>
                                    </svg>
                                </div>
                            </div>



                            <div className=' flex flex-col  justify-start items-start '>
                                {tabsData.map((tab, i) => {
                                    return (
                                        <div key={i} className='flex space-x-1 justify-start items-center '>
                                            <div className={` relative w-8 h-9 ${i === activeTabIndex
                                                ? styles.dotsBorder
                                                : ""
                                                }}`}
                                                ref={navRef}
                                            >
                                                <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                                                    <Image src="/images/iwannaTechdot.svg" width={7} height={7} alt="i wanna tech dot" />
                                                </div>
                                                <div
                                                    className={`  
                                                                    ${i === activeTabIndex ? 'opacity-1 transition-all ease-out duration-1000 translate-y-[transformAnimate]' : 'opacity-0'}
                                                                     absolute top-[-30px] left-[-45px] w-full 
                                                                     ${styles.shadow}`}
                                                >
                                                </div>

                                            </div>
                                            <p

                                                className={`text-white opacity-[0.6] text-[18px] py-[3px] cursor-pointer transition-all ease-in-out duration-500 hover:font-bold hover:opacity-[1] ${styles.shadowHover}   ${i === activeTabIndex
                                                    ? `font-bold opacity-[1] hover:[20px] ${styles.shadow}`
                                                    : ""
                                                    } `}
                                                // Change the active tab on click.
                                                onClick={() => setActiveTabIndex(i)}
                                                ref={el => (buttonRefs[i] = el)}
                                            >
                                                {tab.label}
                                            </p>
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

