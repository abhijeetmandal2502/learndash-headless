import React, { useState } from 'react'
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



const MenuComponent = ({ HideMenuMethod, On }) => {

    const [show, setShow] = useState(false);
    const [showLogo, setShowLogo] = useState(false)
    const [openTab, setOpenTab] = React.useState(0);



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
        }, 50)
    }





    const textColor = "text-white"

    const LogoImage = "/images/WhiteLogo.svg";
    //console.log('openTab', openTab)

    return (
        <>
            <div className={`grid grid-cols-12 md:h-screen  ${openTab === 1 ? styles.aboutBackground : styles.defaultBackground} ${openTab === 2 ? styles.instructorBackground : styles.defaultBackground} ${openTab === 3 ? styles.blogBackground : styles.defaultBackground} ${openTab === 4 ? styles.iwannaTechStart : styles.defaultBackground}  bg-cover bg-center bg-no-repeat md:overflow-y-hidden overflow-x-hidden`}>

                <div className=' md:col-span-11 col-span-12 p-10 2xl:pl-16 '>

                    <div className={`flex justify-between items-center space-x-5 cursor-pointer ${!showLogo ? styles.hide : styles.aboutMain}`}>
                        <LogoCard LogoImage={LogoImage} />
                    </div>


                    {On ? <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 ${!show ? styles.hide : styles.aboutMain}`} onClick={() => { HideMenuMethod() }} >
                        <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button> : ""}

                    {On ? <div className={`grid grid-cols-12 mt-0 gap-20 ${!show ? styles.hide : styles.aboutMain} mt-20`}>



                        <div className=" md:col-span-8 col-span-12  bg-transparent ">
                            <div className=" ">
                                <div className="tab-content tab-space ">
                                    <div className={`${openTab > 0 ? "hidden" : "block"} `}>
                                        <Contact />
                                    </div>
                                    <div className={`${openTab === 1 ? "block" : "hidden"} ${openTab == 1 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  overflow-y-scroll `} id="link1">
                                        <About />
                                    </div>
                                    <div className={`${openTab === 2 ? "block" : "hidden"} ${openTab == 2 ? styles.fadeAnimation : ""} ${styles.hidescrollBar} md:h-screen  overflow-y-scroll  `} id="link2">
                                        <Instructors />
                                        <div className={` absolute bottom-10 left-5 z-[100]  flex justify-center items-center`}>
                                            <FiArrowDown size={30} className={`text-white ${stylesScrollBtn.UpDownAnimation} `} />

                                        </div>
                                    </div>
                                    <div className={`${openTab === 3 ? "block" : "hidden"} ${openTab == 3 ? styles.fadeAnimation : ""} ${styles.hidescrollBar}  md:h-screen  overflow-y-scroll`} id="link3">
                                        <BlogListing />
                                    </div>


                                    <div className={`${openTab === 4 ? "block" : "hidden"}`} id="link4">
                                        <StartComponent />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul
                            className={`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:col-span-4 col-span-12  ${openTab === 4 ? 'hidden' : ""} `}
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
                            <li className={`${styles.navli} text-white my-4 py-2 text-3xl text-right flex cursor-pointer  justify-end items-center ${openTab === 3 ? styles.active : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
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
                        <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  ' onClick={() => HideMenuMethod()}>
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


