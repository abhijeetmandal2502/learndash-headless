
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/NewIndex.module.css'
import styles2 from '../styles/Conceierge.module.css'
import LoginModel from 'components/LoginModel';
import Conceierge from 'components/Conceierge'
import Ncbtmb from 'components/Ncbtmb'
import SimplyChoose from 'components/SimplyChoose'
import SideMenu from 'components/SideMenu'
import MenuComponent from 'components/Menu/MenuComponent'
import MusicCard from 'components/card/MusicCard'
import LogoCard from 'components/card/LogoCard'
import Styles from '../../components/card/animatedDoor/Door.module.css'
import TeacherCss from '../../components/TeacherLounge/TeacherLounge.module.css'
import IwannaTech from 'components/TeacherLounge/IwannaTech'
import { useRouter } from 'next/router'
import Door from 'components/Start/Door'
import HomeComponentMobile from 'components/HomeComponentMobile'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import MobileDrawerRighrt from 'components/Menu/MobileDrawerRight'

const Home = () => {

    const router = useRouter();

    // drower for mobile
    const currentPath = router?.query?.active;
    const [isOpen, setIsOpen] = useState(false);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {

        setIsOpen(!isOpen)
    }

    const drowerClose = () => {

        setIsOpen(!isOpen)
    }


    //for login
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    // for conceierge

    const [showConceierge, setShowConceierge] = useState();
    // for ncbtmb 
    const [showNcbtmb, setShowNcbtmb] = useState();
    // for menu open close 
    const [On, setOn] = useState();

    // state for gift shoppy
    const [ShowGiftShoppi, setShowGiftShoppi] = useState(false);

    const handleGiftComponent = () => {
        setShowGiftShoppi(true);
    }
    // teacher lounge 
    const [openTeacherLogin, setOpenTeacherLogin] = useState();
    const handleTeacherLOginOpen = () => {

        setOpenTeacherLogin(true)
        setShowConceierge()
        setShowNcbtmb()
        setIsloaded(false)
    }

    useEffect(() => {
        if (router.asPath === "/?active=home") {
            setOn(true)
        }
    }, [])

    const handleTeacherLOginClose = () => {
        setOpenTeacherLogin(false);
    }
    // for start 

    const [start, setStart] = useState()
    const [showParent, setShowParent] = useState("");
    const [hideParent, setHideParent] = useState("");
    const [showChild, setShowChild] = useState("");
    const [hideChild, setHideChild] = useState(true);

    const HandleClick = () => {
        setTimeout(() => { setOpen(true) }, 100)
        setHideParent(styles.parentchildoff)
        setShowChild(styles.childparenton)
        setShowConceierge()
        setShowNcbtmb()
    }
    const changeDuration = () => {
        setTimeout(() => setOpen(false));
        setTimeout(() => setHideChild(styles.childparentoff))
        setTimeout(() => setShowParent(styles.parentchildon))
        setTimeout(() => setHideChild(true), 2000)
        setTimeout(() => setDown(false));
    }

    //pass data parent to child

    const conceiergeHide = () => {
        setTimeout(() => {
            setShowConceierge(false)
        }, 100)
    }

    // ncbtmb approved 
    const ncbtmbMethod = () => {
        setShowNcbtmb(true)
        setTimeout(() => {
            setShowConceierge()
            setIsloaded(false)
        }, 200)

    }

    const ncbtmbMethodHide = () => {
        setShowNcbtmb(false)
    }
    // conceierge approved 
    const conceiergeMethod = () => {

        setShowConceierge(true)
        setTimeout(() => {
            setShowNcbtmb()
            setIsloaded(false)
        }, 200)

    }

    // show hide for start 

    const startMethod = () => {

        setStart(true)
        setShowNcbtmb()
        setShowConceierge()
        setIsloaded()
        setShowGiftShoppi(false)

    }

    // start hide method

    const startMethodHide = () => {
        setStart(false)
    }

    // side menu show hide method 

    const ShowMenuMethod = () => {
        setOn(true)
        setShowNcbtmb()
        setOpenTeacherLogin()
        setShowConceierge()
        setStart()
        setOpen()
        setIsloaded(false)
        router.push({
            pathname: '/',
            query: { active: 'home' }
        })
    }
    const HideMenuMethod = () => {
        setOn(false)
    }
    // hwen page loaded css 
    const [isLoaded, setIsloaded] = useState(false)

    useEffect(() => {
        setIsloaded(true)
    }, [])

    const LogoImage = "/images/Logo.svg"

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div className={`md:grid hidden  grid-cols-12 md:h-screen h-auto   overflow-hidden ${openTeacherLogin === true ? styles.teacherLoungTrue : styles.teacherLoungFalse} bg-cover bg-center bg-no-repeat ${!On ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>
                {/* logo and hero components */}
                <div className='relative flex flex-col justify-between col-span-12 px-5 md:pl-[12%] md:col-span-6 '>
                    <div className='space-x-5 cursor-pointer '>
                        <LogoCard LogoImage={LogoImage} />
                        {/* menu icon for small device */}
                        <div className='md:hidden'>
                            <div className='flex items-center justify-center space-x-2' onClick={() => { ShowMenuMethod() }}>
                                <p className='font-semibold dubblelargf '>menu</p>
                                <svg width="24" height="24" className={` ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className={`w-full homepdmng ${!showConceierge && !showNcbtmb ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>
                        <p className='text-black superlargef '>massage ce.</p>
                        <p className='text-black superlargef '> simplified. </p>
                    </div>

                    {/* conceierge components */}
                    <div className={`${showConceierge ? styles2.opacityAnimation : styles2.opacityAnimation1} ${showConceierge === undefined ? styles2.hideNcbtmbdiv : ""} absolute top-24 left-0 w-full `}><Conceierge conceiergeHide={conceiergeHide} /></div>

                    {/* ncbtmb components */}

                    <div className={`absolute top-32 left-0  w-full ${showNcbtmb === true ? styles2.opacityAnimation : ""} ${showNcbtmb === false ? styles2.opacityAnimation1 : ""} ${showNcbtmb === undefined ? styles2.hideNcbtmbdiv : ""}`}><Ncbtmb ncbtmbMethodHide={ncbtmbMethodHide} /></div>
                </div>
                <div className={`col-span-12 md:col-span-5   relative   ${!start ? styles2.opacityAnimation : styles2.opacityAnimation1} `}>
                    {/*index  grid 6 main div  */}
                    <div className={`   ${!open && !openTeacherLogin ? showParent : hideParent} ${openTeacherLogin === true ? TeacherCss.mainDivHide : TeacherCss.mainDivShow} ${isLoaded ? styles.gridMain : ""} ${openTeacherLogin || open ? styles.hidebgComp : ""} `}>

                        <div className='grid grid-cols-12'>
                            {/* first grid */}
                            <div className=' md:col-span-6 w-full h-[100vh] border-l border-gray'>
                                {/* start components */}
                                <div className={` w-full h-1/2 menuBoxsizebigMenu  flex flex-col overflow-hidden relative justify-center  cursor-pointer   ${Styles.rotateChild} ${styles2.mainAnimation} `} onClick={() => startMethod()} >
                                    <div className={` md:space-x-0 flex md:flex-col relative `}>
                                        <Door />
                                        <div className='w-full'>
                                            <h3 className='text-center startFont lineUp'>start</h3>
                                            <p className={` extxlsmallf pt-1 ${Styles.hide1} text-center lineUp`}>start a course today!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${Styles.hide1}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>

                                </div>

                                {/* concierge components */}
                                <div className={`w-full h-1/4 menuBoxsizesmallMenu  flex relative overflow-hidden flex-col justify-center border-t border-gray  ${styles.cardAnimation} cursor-pointer  ${showConceierge ? styles.onclickCardAanimation : ""}  `} onClick={() => conceiergeMethod()}>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <div className='mx-auto conciergeImg'>
                                            <Image alt='start' src='/images/ConciergeNew.svg' height='300' width='300' className='' />
                                        </div>

                                        <div className='w-full'>
                                            <h3 className='mt-1 font-semibold md:text-center triplelargef lineUp'>concierge</h3>
                                            <p className={` extxlsmallf ${styles.hide} text-center lineUp`}>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                {/* gift shoppe */}
                                <div className={` w-full h-1/4 menuBoxsizesmallMenu  flex flex-col relative overflow-hidden z-40 justify-center cursor-pointer border-t 3xl:border-t-2 border-gray  ${styles.cardAnimation}  `} onClick={() => { startMethod(), handleGiftComponent() }}>
                                    <div className={` image-card ${styles.mainDiv}`}>

                                        <div className={`${styles.gift} absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-0 w-[100%] h-[100%]  `}>
                                        </div>

                                        <div className={`w-full ${styles.content}`}>
                                            <h3 className='text-center triplelargef lineUp'>gift shoppe</h3>
                                            <p className={`extxlsmallf ${styles.hide} text-center lineUp`}>gift ce to a friends</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>
                            </div>


                            <div className=' md:col-span-6 h-[100vh] border-l 3xl:border-l-2 border-gray w-full '>
                                {/* i am back */}
                                <div className={`w-full h-1/2 menuBoxsizebigMenu flex  flex-col relative overflow-hidden z-40 justify-center cursor-pointer  ${styles.cardAnimation}   `} onClick={() => { HandleClick(); }}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <div className='mx-auto iamBackImg '>
                                            <Image alt='start' src='/images/iambackkey.svg' height='300' width='300' />
                                        </div>
                                        <div className='w-full'>
                                            <h3 className='text-center triplelargef lineUp'>i’m back</h3>
                                            <p className={` extxlsmallf ${styles.hide} text-center  lineUp`}>existing user login</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                {/* ncbtmb approved component */}

                                <div className={` w-full h-1/4 menuBoxsizesmallMenu   relative overflow-hidden border-t 3xl:border-t-2 border-gray   ${styles.cardAnimation} ${showNcbtmb ? styles.onclickCardAanimation : ""}  `} onClick={() => ncbtmbMethod()}>
                                    <div className='cursor-pointer '>
                                        <div className='md:mx-auto ncbtmbImg ncbtmbShadow '>
                                            <Image alt='start' src='/images/NCBTMB.svg' height='400' width='400' />
                                        </div>

                                        <div className='w-full '>
                                            <h3 className='text-center triplelargef lineUp'>ncbtmb approved</h3>
                                            <p className={` extxlsmallf ${styles.hide} text-center lineUp`}>check if your state is approved</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                {/* teacher lounge components */}

                                <div className={` w-full h-1/4 menuBoxsizesmallMenu  flex flex-col justify-center border-t 3xl:border-t-2 border-gray   ${styles.cardAnimation} ${openTeacherLogin === true ? TeacherCss.hidediveAfterTransform : ""} relative overflow-hidden `} onClick={() => handleTeacherLOginOpen()} >
                                    <div className='flex space-x-4 cursor-pointer md:block md:space-x-0 image-card '>
                                        <div className='mx-auto teacherLounge '>
                                            <Image alt='start' src='/images/teacherLoungeNew.svg' height='200' width='150' />
                                        </div>
                                        <div className='w-full '>
                                            <h3 className='text-center lineUp triplelargef'>teacher’s lounge</h3>
                                            <p className={` extxlsmallf  ${styles.hide} text-center  lineUp`}>existing instructor please login here!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={` ${TeacherCss.imgTech}  z-40 ${openTeacherLogin === true ? styles.modelOpen : styles.modelClose} ${openTeacherLogin === undefined ? styles2.hideNcbtmbdiv : ""} `}>

                        <IwannaTech />
                    </div>
                    {/* Login Model For im back */}
                    <div className={` col-span-12 md:col-span-5  z-5 absolute  ${hideChild ? styles.animationEndHideChild : ""} ${open ? showChild : hideChild} ${open === undefined ? styles2.hideNcbtmbdiv : ""} `} >
                        <div className="relative ">
                            <div className={` bg-transparent relative  border border-bordergray ${open ? styles.modelScaleUpAnimation : styles.modelScaleDownAnimation} `}>
                                <LoginModel changeDuration={changeDuration} title="welcome back !" />
                            </div>

                        </div>
                    </div>
                    {/* Login model for Teacher Lounge */}
                    <div className={` col-span-12 md:col-span-5 z-5 absolute ${openTeacherLogin === true ? TeacherCss.openModel : TeacherCss.closeModel} ${openTeacherLogin === undefined ? styles2.hideNcbtmbdiv : ""} `} >

                        <div className={` bg-white relative  border border-bordergray xl:p-5 p-7 lg:p-5`}>

                            <LoginModel changeDuration={handleTeacherLOginClose} title="Teacher s Lounge" />
                        </div>
                    </div>
                </div>
                {/* simply choose component for Start button */}
                <div className={`bg-[url('/images/start-bg.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 w-full ${start ? styles2.opacityAnimation : styles2.opacityAnimation1}  ${start === undefined ? styles2.hideNcbtmbdiv : ""} grid grid-cols-12`}>
                    <div className={`col-span-12 md:col-span-11  ${start === undefined ? styles2.hideNcbtmbdiv : ""} `}>
                        <SimplyChoose startMethodHide={startMethodHide} handleGiftComponent={handleGiftComponent} start={start} ShowGiftShoppi={ShowGiftShoppi} />
                    </div>
                    <div className={`col-span-12 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray ${start === undefined ? styles2.hideNcbtmbdiv : ""}`}>
                        <SideMenu ShowMenuMethod={ShowMenuMethod} />
                    </div>
                </div>
                {/*index page main menu sidebar component */}
                <div className='relative items-center justify-center hidden w-full h-screen col-span-1 p-0 border-l 3xl:border-l-2 border-b-gray md:p-4 max-sm:invisible md:col-span-1 md:flex border-bodergray'>
                    <div className='cursor-pointer '>
                        <div className='absolute flex items-center justify-center space-x-2 -translate-x-1/2 top-12 left-1/2 '>
                            <div className='flex items-center justify-center max-[768px]:space-x-1 space-x-2' onClick={() => { ShowMenuMethod(), drowerOpen() }}>
                                <p className='font-semibold text-black largef '>menu</p>
                                <svg width="24" height="24" className={` 4xl:w-[50px] 4xl:h-[50px] 3xl:w-[40px] 3xl:h-[40px]  ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div className='absolute -translate-x-1/2 bottom-12 left-1/2'>
                            <MusicCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* drowable component */}
            <div className={` md:block hidden  ${On === undefined ? styles2.hideNcbtmbdiv : ""}`}>
                <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                    <div className="overflow-y-scroll ">
                        <div className="flex flex-col">
                            <Disclosure as="div" className='list-none rounded-full text-gray'>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="w-full ">
                                            <MenuComponent HideMenuMethod={HideMenuMethod} On={On} drowerClose={drowerClose} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="w-full py-1 text-white ">
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                </MobileDrawerRighrt>
            </div>
            {/* drowable component for mobile */}

            <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                <div className="overflow-y-scroll ">
                    <div className="flex flex-col">

                        <Disclosure as="div" className='list-none rounded-full text-gray'>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="z-50 w-full">
                                        <MenuComponent HideMenuMethod={HideMenuMethod} On={On} drowerClose={drowerClose} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="w-full py-1 text-white ">
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </MobileDrawerRighrt>
            {/* Index page for mobile  */}
            <div className={`md:hidden bg-transparent w-full ${On === true ? "hidden" : "block"}`}>
                <HomeComponentMobile ShowMenuMethod={ShowMenuMethod} isOpen={isOpen} drowerOpen={drowerOpen} />
            </div>

        </>
    )
}


export default Home



