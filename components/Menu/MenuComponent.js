import React, { useEffect, useState } from 'react'
import MusicCard from 'components/card/MusicCard'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import Contact from '../Menu/Contact'
import { BiArrowBack } from 'react-icons/bi'
import styles from '../../src/styles/MenuComponent.module.css'
import LogoCard from 'components/card/LogoCard'
import About from '../About/About'
import { AiOutlineMinus } from 'react-icons/ai'
import Instructors from '../Instructor/Instructors'
import BlogListing from 'components/BlogListing'
import ScrollBtn from 'components/Start/ScrollBtn'
import { FiArrowDown } from 'react-icons/fi'
import stylesScrollBtn from '../Start/Start.module.css'
import StartComponent from 'components/IwannaTech/StartComponent'
import IwannaTech from 'components/TeacherLounge/IwannaTech'
import { useRouter } from 'next/router'




const MenuComponent = ({ HideMenuMethod, On }) => {




    const [show, setShow] = useState(false);
    const [showLogo, setShowLogo] = useState(false)
    const [openTab, setOpenTab] = React.useState(0);

    //  query params 

    const router = useRouter();
    const currentPath = router?.query?.active;


    //handle close

    const HandleCloseBtn = () => {

        router.push({
            pathname: '/',
            query: { active: 'home' }

        })

        if (router.asPath == '/?active=home') {
            HideMenuMethod();

        }

        setOpenTab(0)

    }

    if (On === true) {
        setTimeout(() => {
            setShow(true)
        }, 1500)

        setTimeout(() => {
            setShowLogo(true)
        }, 50)

    }

    if (On === false) {
        setTimeout(() => {
            setShow(false)
            setShowLogo(false)
            setOpenTab(false)
        }, 50)
    }

    //IwannaTech component


    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [lastActive, setLastActive] = useState(false);

    const tabsData = [
        {
            id: 1,
            label: "start",
            content: <StartComponent />,
        },
        {
            id: 2,
            label: "why teach",
            content:
                "2 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.whyTechbg
        },
        {
            id: 3,
            label: "why us",
            content:
                "3 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.whyUsbg
        },
        {
            id: 4,
            label: "why now",
            content:
                "4 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.whyNowbg
        },
        {
            id: 5,
            label: "needed",
            content:
                " 5 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.neededbg
        },
        {
            id: 6,
            label: "ncbtmb",
            content:
                "6 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.ncbtmbbg
        },
        {
            id: 7,
            label: "why you",
            content:
                "7 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.whyyoubg
        },
        {
            id: 8,
            label: "now what",
            content:
                " 8 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.nowwhatbg
        },
        {
            id: 9,
            label: "create",
            content:
                " 9 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.createbg
        },
        {
            id: 10,
            label: "never alone",
            content:
                "10 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.neverAlonebg
        },
        {
            id: 11,
            label: "commission",
            content:
                "11 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.commissionbg
        },
        {
            id: 12,
            label: "get started",
            content:
                "12 Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
            background: styles.getstartedbg
        },
    ];

    // useEffect(() => {

    //     getLastActive();
    // }, [activeTabIndex])

    const getLastActive = () => {

        if ((activeTabIndex > 0) && (lastActive > activeTabIndex)) {

            return setLastActive(true);
        }
        else {

            return setLastActive(false);
        }

    }


    const handleClickLobby = () => {

        router.push({
            pathname: '/',
            query: { active: 'home' }

        })
        HideMenuMethod()

    }

    const textColor = "text-white"

    const LogoImage = "/images/WhiteLogo.svg";




    return (
        <>
            <div
                className={`
                ${styles.defaultBackground}
            grid grid-cols-12 md:h-screen  bg-cover bg-center bg-no-repeat md:overflow-y-hidden overflow-x-hidden
            ${openTab === 1 ? styles.aboutBackground : styles.defaultBackground} 
            ${openTab === 2 ? styles.instructorBackground : styles.defaultBackground} 
            ${openTab === 3 ? styles.blogBackground : styles.defaultBackground} 
            ${openTab === 4 ? styles.iwannaTechStart : styles.defaultBackground} 
            ${activeTabIndex ? tabsData[activeTabIndex].background : styles.defaultBackground}

             `}>

                <div className=' md:col-span-11 col-span-12 p-10 2xl:pl-20 md:pl-20 '>

                    <div className={`flex justify-between items-center space-x-5 cursor-pointer ${!showLogo ? styles.hide : styles.aboutMain}`}>
                        <LogoCard LogoImage={LogoImage} />
                    </div>

                    {On ? <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 ${!show ? styles.hide : styles.aboutMain}`} onClick={() => { handleClickLobby() }} >
                        <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button> : ""}

                    {On ? <div className={`grid grid-cols-12 mt-0 gap-20  ${!show ? styles.hide : styles.aboutMain} mt-20 `} >

                        <div className={` col-span-12  bg-transparent ${(openTab === 4 || openTab === 3 || currentPath == 'blog') ? "col-span-12" : "md:col-span-8"}`}>
                            <div className=" ">
                                <div className="tab-content tab-space ">
                                    <d iv className={`${(openTab > 0 || currentPath == 'blog') ? "hidden" : "block"} ${router.asPath === '/?active=home' ? 'block' : 'hidden'} `}>
                                        <Contact />
                                    </d>
                                    <div className={`${openTab === 1 ? "block" : "hidden"} ${openTab == 1 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  overflow-y-scroll `} id="link1">
                                        <About />
                                    </div>
                                    <div className={`${openTab === 2 ? "block" : "hidden"} ${openTab == 2 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  overflow-y-scroll  `} id="link2">
                                        <Instructors />
                                        <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                                            <FiArrowDown size={25} className={`text-white ${stylesScrollBtn.UpDownAnimation} `} />

                                        </div>
                                    </div>
                                    <div className={` ${(openTab === 3 || currentPath == 'blog') ? "block" : "hidden"} ${openTab == 3 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} ${currentPath == "home" ? 'hidden' : 'block'}  md:h-screen  overflow-y-scroll`} id="link3">
                                        <BlogListing />
                                        <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                                            <FiArrowDown size={25} className={`text-white ${stylesScrollBtn.UpDownAnimation} `} />

                                        </div>
                                    </div>


                                    <div className={`${openTab === 4 ? "block" : "hidden"}`} id="link4">

                                        <div className='grid grid-cols-12 '>
                                            <div className="col-span-3 md:col-span-3 flex -space-x-1 ">
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
                                                                    ${idx === activeTabIndex ? 'opacity-1 transition-all ease-in-out duration-[2s] delay-100' : 'opacity-0 transition-all ease-in-out duration-[2s] delay-100'}
                                                                     absolute top-[-30px] left-[-45px] w-full 
                                                                     ${styles.shadow}`}>

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
                                            </div>
                                            {/* Show active tab content. */}
                                            <div className="py-4 col-span-9 md:col-span-9">
                                                <div>{tabsData[activeTabIndex].content}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul
                            className={`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:col-span-4 col-span-12  ${openTab === 4 || openTab === 3 ? 'hidden' : 'block'} ${router.asPath === '/?active=home' ? 'block' : 'hidden'}  `}
                            role="tablist"
                        >
                            <li className={`${styles.navli} text-white my-4 py-2 text-3xl text-right flex cursor-pointer justify-end items-center ${openTab === 1 ? styles.active : ""}`

                            }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >

                                about

                                <div className={`pl-2 text-4xl ${openTab === 1 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                            </li>
                            <li className={`${styles.navli} text-white my-4 py-2 text-3xl text-right flex cursor-pointer  justify-end items-center ${openTab === 2 ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >

                                our instructors

                                <div className={`pl-2 text-4xl  ${openTab === 2 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                            </li>
                            <li className={`${styles.navli} text-white my-4 py-2 text-3xl text-right flex cursor-pointer  justify-end items-center ${(openTab === 3) ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);

                                    router.push({ pathname: '/', query: { active: 'blog' } });
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >

                                blog central

                                <div className={`pl-2 text-4xl  ${openTab === 3 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                            </li>
                            <li className={`${styles.navli} text-white my-4 py-2 text-3xl cursor-pointer text-right flex justify-end items-center ${openTab === 4 ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >

                                i wanna teach!

                                <div className={`pl-2 text-4xl ${openTab === 4 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                            </li>
                        </ul>


                        {/* <Nav color="red" /> */}

                    </div> : ""}

                </div>

                <div className='col-span-12  p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-white '>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                            onClick={() => { HandleCloseBtn() }}>
                            <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                <p className='font-semibold text-white'>Close </p>

                                <AiOutlineClose size={20} className="text-white" />

                            </div>
                        </div>
                        <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                            <MusicCard textColor={textColor} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MenuComponent


