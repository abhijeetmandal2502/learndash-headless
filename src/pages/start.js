import StartComponent from 'components/IwannaTech/StartComponent';
import React, { Children, useCallback, useEffect, useState } from 'react'
import styles from '../styles/MenuComponent.module.css'
import Image from 'next/image';
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
import Link from 'next/link';
import { useRef } from 'react';
import LogoCard from 'components/card/LogoCard';


const Start = () => {

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
                <WhyUs activeTabIndex={activeTabIndex} />,
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
                <WhyYou activeTabIndex={activeTabIndex} />,
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
                <GetStarted activeTabIndex={activeTabIndex} />,
            background: styles.getstartedbg
        },
    ];

    //animate tab integator pointer move
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
    // ((activeTabIndex * 30) + 'px')
    const activeTab = ((activeTabIndex * 30) + 'px')
    const movePointerTop = () => {
        setActiveTabIndex(activeTabIndex + 1)
    }

    useEffect(() => {

        positionFun()

    }, [activeTabIndex])


    //console.log('activeTabIndex', activeTabIndex)

    const [positionTop, setPositionTop] = useState('')
    const positionFun = (() => {
        if (activeTabIndex == 0) {
            setPositionTop('firstPosition')
        }
        else if (activeTabIndex == 1) {
            setPositionTop('secondPosition')
        } else if (activeTabIndex == 2) {
            setPositionTop('thirddPosition')
        }
        else if (activeTabIndex == 3) {
            setPositionTop('fourthPosition')
        }
        else if (activeTabIndex == 4) {
            setPositionTop('fifthPosition')
        }
        else if (activeTabIndex == 5) {
            setPositionTop('sixthPosition')
        }
        else if (activeTabIndex == 6) {
            setPositionTop('seventhPosition')
        }
        else if (activeTabIndex == 7) {
            setPositionTop('eighthPosition')
        }
        else if (activeTabIndex == 8) {
            setPositionTop(' ninthPosition')
        } else if (activeTabIndex == 9) {
            setPositionTop(' tenthPosition')
        }
        else if (activeTabIndex == 10) {
            setPositionTop('eleventhPosition')
        } else {

        }
    })



    return (
        <>
            <div className={`relative grid grid-cols-12  ${tabsData[activeTabIndex].background} ${styles.aboutMain} h-screen md:overflow-hidden overflow-y-scroll`}>

                <div className=' flex flex-col   md:col-span-11 col-span-12 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-10 3xl:space-y-24 md:p-10 z-10'>
                    <div className={`flex md:hidden justify-between items-center space-x-5 md:pt-10 cursor-pointer md:bg-transparent bg-black md:px-0 px-3 md:pb-0 pb-5 `}>
                        <LogoCard LogoImage="/images/WhiteLogo.svg" />
                        <Link href="/">
                            <div className='flex md:hidden items-center justify-center mt-5    '
                            >
                                <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                    <p className='font-semibold 3xl:text-[25px] text-white'>Close </p>
                                    <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                                </div>
                            </div>
                        </Link>
                    </div>



                    <div className='md:block hidden'>
                        <div className='2xl:pl-14 md:pl-14 2xl:mt-2 mt-1 '>
                            <div className={`flex justify-between items-center space-x-5 cursor-pointer `}>
                                <Link href="/">
                                    <Image src='/images/WhiteLogo.svg' height='30' width='120' alt='logo' className='max-sm:h-[40px] max-sm:[50px] 2xl:h-[120px] 2xl:w-[310px] 3xl:h-[180px] 3xl:w-[500px]  h-[100px] w-[250px]' />
                                </Link>
                            </div>
                            <button className={`flex items-center space-x-1 bg-black text-white px-5 py-2 3xl:px-3 3xl:py-2.5 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-1`} onClick={() => { router.push('/') }} >
                                <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='text-md 3xl:text-2xl font-semibold'>lobby</span></button>
                        </div>
                    </div>

                    <div className='grid grid-cols-12  md:pl-2 md:px-0 pl-5 '>
                        <div className=" md:col-span-2 flex -space-x-[3px] ">
                            {/* Loop through tab data and render button for each. */}

                            {/* pointer circle for desktop  */}
                            <div className=' hidden md:block relative w-[0.4px] h-[400px] 3xl:h-[528px] mt-4 3xl:mt-[25px] bg-white'>
                                <div className={`absolute ${activeTabIndex === 0 ? 'md:mt-[339.2px] mt-[339.2px] 3xl:mt-[476px]' : 'mt-[340px] 3xl:mt-[476.2px] '}  ${styles.transformTopBottomIndicater}  left-[-49px] top-[99px] md:top-2 3xl:top-[9.5px]`} style={selectStyles}>
                                    <svg>
                                        <circle cx="50" cy={50} r="10" stroke="white" stroke-width="2" fill="none">
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            {/* pointer circle for mobile  */}
                            <div className=' md:hidden block relative w-[0.4px] h-[400px]  mt-4  bg-white'>
                                <div className={`absolute  -mt-[48px]   left-[-49px] ${positionTop}`} >
                                    <svg>
                                        <circle cx="50" cy={50} r="10" stroke="white" stroke-width="2" fill="none">
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className=' flex flex-col  justify-start items-start '>
                                {tabsData.map((tab, i) => {
                                    return (
                                        <div key={i} className='flex  justify-start items-center '>

                                            {/* for desktop */}
                                            <div className={` hidden md:block relative w-6 h-9 ${i === activeTabIndex
                                                ? styles.dotsBorder
                                                : ""
                                                }}`}
                                                ref={navRef}
                                                onClick={() => { setActiveTabIndex(i) }}
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

                                            {/* for mobile */}

                                            <div className={` md:hidden block relative w-6 h-9 ${i === activeTabIndex
                                                ? styles.dotsBorder
                                                : ""
                                                }}`}

                                                onClick={() => { setActiveTabIndex(i) }}
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

                                                className={` md:block hidden text-white opacity-[0.6] text-[18px] 3xl:text-[28px] py-[3px] cursor-pointer transition-all ease-in-out duration-500 hover:font-bold hover:opacity-[1] ${styles.shadowHover}   ${i === activeTabIndex
                                                    ? `font-bold opacity-[1] hover:[20px] 3xl:hover:[30px] ${styles.shadow}`
                                                    : ""
                                                    } `}
                                                // Change the active tab on click.
                                                onClick={() => { setActiveTabIndex(i) }}
                                                ref={el => (buttonRefs[i] = el)}
                                            >
                                                {tab.label}
                                            </p>


                                            {activeTabIndex < 11 ? <div className={` z-[1000] absolute bottom-5 left-1/2  -translate-x-1/2 block md:hidden `} onClick={() => { movePointerTop() }}
                                            >
                                                <div className={`${styles.vertmoveDown}`}>
                                                    <Image src="/start/SlideUpIcon.svg" width={25} height={25} />
                                                </div>
                                            </div> : ""}
                                            {activeTabIndex > 0 ? <div className={`  rotate-180 absolute top-24 left-1/2 -translate-x-1/2 z-[1000]  block md:hidden `} onClick={() => { }} >
                                                <div className={`${styles.vertmoveDown}`}
                                                >
                                                    <Image src="/start/SlideUpIcon.svg" width={25} height={25} />
                                                </div>
                                            </div> : ""}
                                        </div>
                                    );
                                })}
                            </div>
                        </div >
                        {/* Show active tab content. */}
                        <div className={`pb-4 -mt-4 col-span-10 md:col-span-10 z-0 ${styles.fadeAnimation}`} >
                            <div>{tabsData[activeTabIndex].content}</div>
                        </div >
                    </div >
                </div >
                <div className='col-span-12  p-4 max-sm:invisible md:col-span-1 hidden md:flex justify-center items-center relative h-screen w-full border-l border-white z-50 '>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                            onClick={() => { router.push('/') }}>
                            <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                <p className='font-semibold text-white 3xl:text-[30px] '>Close </p>
                                <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                            </div>
                        </div>
                        <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                            <MusicCard textColor="text-white" />
                        </div>
                    </div>
                </div>




                {activeTabIndex < 11 ? <div className={`${styles.arrowUpDown} z-[1000] absolute bottom-5 left-1/2 md:block hidden `}>
                    <SlArrowDown size={20} className={`${styles.one} text-white`} />
                    <SlArrowDown size={20} className={`${styles.two} text-white`} />
                    <SlArrowDown size={20} className={`${styles.three} text-white`} />
                </div> : ""}
                {activeTabIndex > 0 ? <div className={`${styles.arrowUpDown} z-[1000] absolute top-5 left-1/2 md:block hidden  `}>
                    <SlArrowUp size={20} className={`${styles.one} text-white`} />
                    <SlArrowUp size={20} className={`${styles.two} text-white`} />
                    <SlArrowUp size={20} className={`${styles.three} text-white`} />
                </div> : ""}

                {/* SHOW MORE SHOW LESSS BUTTON FOR MOBILE */}




            </div >

        </>
    )
}

export default Start

