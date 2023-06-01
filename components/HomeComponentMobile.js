import React, { useState } from 'react'
import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import LoginModel from './LoginModel';
import Conceierge from './Conceierge';
import Ncbtmb from './Ncbtmb';
import SimplyChoose from './SimplyChoose';
import LogoCard from './card/LogoCard';
import styles from '../src/styles/NewIndex.module.css'
import { Disclosure } from '@headlessui/react'
import MobileDrawerRighrt from './Menu/MobileDrawerRight';
import MobileDrawerLeft from './Menu/MobileDrawerLeft';
import GiftCardMobile from './giftshop/GiftCardMobile';
import Link from 'next/link';


const HomeComponentMobile = ({ ShowMenuMethod, drowerOpen }) => {
    const router = useRouter();
    const [activeTabIndex, setActiveTabIndex] = useState('');

    const [selectedCourse, setSelectedCourse] = useState(false)

    const [panel, setPanel] = useState(true);

    const selectedCourseMethod = () => {

        setSelectedCourse(true);
    }
    const menuList = [
        {
            image: "/images/start.png",
            title: "start",
            content: <div className='-mt-7'>
                <SimplyChoose selectedCourseMethod={selectedCourseMethod} selectedCourse={selectedCourse} setPanel={setPanel} panel={panel} setActiveTabIndex={setActiveTabIndex} />
            </div>,

        },
        {
            image: "/images/new-imback.png",
            title: "i’m back",
            content: <LoginModel title="welcome back" />
        },
        {
            image: "/images/ConciergeNew.svg",
            title: "concierge",
            content: <Conceierge />
        },
        {
            image: "/images/NCBTMB.svg",
            title: "ncbtmb approved",
            content: <Ncbtmb />
        },

        {
            image: "/images/home1.svg",
            title: "gift shoppe",
            content: <GiftCardMobile />
        },
        {
            image: "/images/new-teacherlouge.png",
            title: "teacher’s lounge",
            content: <LoginModel title="Teacher's Lounge" />
        },
    ]

    //code for mobile drower
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];
    const LogoImage = "/images/Logo.svg"
    let data = ""
    const backtoHome = () => {

        if (selectedCourse === true) {
            setActiveTabIndex(0)
            setSelectedCourse(false)
        }
        else {
            setActiveTabIndex('')
            setIsOpen(!isOpen)
            setIsOpenLeft(!isOpenLeft),
                setSelectedCourse(false),
                setPanel(false)
        }
    }


    return (
        <>
            <div className="relative m-auto bg-transparent lg:px-8 default-page-width-header">

                <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in md:hidden ">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/bg-image.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>
                <div className="relative m-auto bg-transparent lg:px-8 default-page-width-header">
                    {/* Mobile Menu icon */}
                    <div className="lg:hidden">
                        <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                            <div className="overflow-y-scroll ">
                                <div className="flex flex-col">

                                    <Disclosure as="div" className=''>
                                        {({ open }) => (
                                            <>
                                                <div className="flex justify-center w-full ">
                                                    <div className={` w-full h-screen  z-10 ${activeTabIndex === 0 ? "bg-[url('/images/start-bg.png')]" : ""}`}>
                                                        <div className={` fixed top-0 z-10  w-full bg-white`}>
                                                            <div className='flex items-center justify-between px-3 py-4 space-x-5 cursor-pointer'>
                                                                {/* <LogoCard LogoImage={LogoImage} /> */}

                                                                <div className=''>
                                                                    <Link href="/">
                                                                        <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                                                    </Link>
                                                                </div>
                                                                <div className='lg:hidden'>
                                                                    <div className='flex items-center justify-center space-x-2' onClick={() => { ShowMenuMethod(), drowerOpen() }}>
                                                                        <p className='font-semibold text-xl '>menu</p>
                                                                        <svg width="24" height="24" className={`   ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                                                            <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                                                            <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className={`  flex items-center space-x-1 bg-black text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { backtoHome() }} >
                                                                <BiArrowBack size={20} className="text-white " /><span className='font-semibold text-md 3xl:text-2xl'> {(activeTabIndex == 4 ? 'start' : 'lobby') && (selectedCourse == true ? 'courses' : 'lobby')}  </span></button>
                                                        </div>

                                                        <div className={`text-black mt-[120px] ${activeTabIndex === 0 ? 'px-0' : 'px-3 '}`}>{menuList[activeTabIndex]?.content}</div>
                                                    </div>
                                                </div>
                                                <Disclosure.Panel className="w-full py-1 text-white ">
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </MobileDrawerRighrt>
                        <MobileDrawerLeft isOpen={isOpenLeft} setIsOpen={setIsOpenLeft} basePath={basePath}>
                            <div className="overflow-y-scroll ">
                                <div className="flex flex-col">
                                    <Disclosure as="div">
                                        {({ open }) => (
                                            <>
                                                <div className="w-full">
                                                    <div className=''>
                                                        <div className='flex items-center justify-between px-3 py-4 space-x-5 cursor-pointer'>
                                                            {/* <LogoCard LogoImage={LogoImage} /> */}

                                                            <div className=''>
                                                                <Link href="/">
                                                                    <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                                                </Link>
                                                            </div>
                                                            {/* menu icon for small device */}
                                                            <div className=''>
                                                                <div className='flex items-center justify-center space-x-2' onClick={() => { ShowMenuMethod(), drowerOpen() }}>
                                                                    <p className='font-semibold text-black text-xl 4xl:text-[40px] 3xl:text-[30px]'>menu</p>
                                                                    <svg width="24" height="24" className={` ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                                                        <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                                                        <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='px-6 py-2 mb-5 font-normal text-left text-black '>
                                                            <p className='text-4xl'>massage ce.</p>
                                                            <p className='text-4xl'> simplified. </p>
                                                        </div>

                                                        {
                                                            menuList?.map((item, id) => {
                                                                return (
                                                                    <>
                                                                        <div className='border-t border-gray' onClick={() => { setActiveTabIndex(id), setIsOpen(!isOpen), setIsOpenLeft(!isOpenLeft) }}>
                                                                            <div key={id} className='flex items-center px-3 py-5 space-x-5'>
                                                                                <Image alt='start' src={item.image} height='80' width='80' />
                                                                                <h3 className='mt-4 text-black text-2xl '>{item.title}</h3>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <Disclosure.Panel className="w-full py-1 text-white ">
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </MobileDrawerLeft>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeComponentMobile