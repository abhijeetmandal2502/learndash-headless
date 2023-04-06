
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

const Home = () => {

    const router = useRouter();
    const currentPath = router?.query?.active;

    //for login
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    // for conceierge

    const [showConceierge, setShowConceierge] = useState();
    // for ncbtmb 
    const [showNcbtmb, setShowNcbtmb] = useState();
    // for menu open close 
    const [On, setOn] = useState();
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
            <Head> LearnDash </Head>

            <div className={`md:grid hidden  grid-cols-12 md:h-screen h-auto   overflow-hidden ${openTeacherLogin === true ? styles.teacherLoungTrue : styles.teacherLoungFalse} bg-cover bg-center bg-no-repeat ${!On ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>

                {/* logo and hero components */}

                <div className='flex flex-col justify-between md:px-10 px-5 py-6 col-span-12 md:col-span-6   relative '>
                    <div className='flex justify-between  items-center space-x-5 cursor-pointer '>
                        <LogoCard LogoImage={LogoImage} />
                        {/* menu icon for small device */}
                        <div className='lg:hidden'>
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
                    <div className={`w-full pb-8 ${!showConceierge && !showNcbtmb ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>
                        <p className='xl:text-7xl 4xl:text-[150px] 3xl:text-[100px] lg:text-5xl md:text-5xl text-4xl font-normal py-2'>massage ce.</p>
                        <p className='xl:text-7xl 4xl:text-[150px] 3xl:text-[100px] lg:text-5xl md:text-5xl text-4xl  font-normal py-2'> simplified. </p>
                    </div>

                    {/* conceierge components */}
                    <div className={`${showConceierge ? styles2.opacityAnimation : styles2.opacityAnimation1} ${showConceierge === undefined ? styles2.hideNcbtmbdiv : ""} absolute top-28 left-10 3xl:top-72 3xl:left-10 4xl:top-96 4xl:left-10     w-full `}><Conceierge conceiergeHide={conceiergeHide} /></div>

                    {/* ncbtmb components */}

                    <div className={`absolute top-28 left-10  3xl:top-72 3xl:left-10 4xl:top-96 4xl:left-10 w-full ${showNcbtmb === true ? styles2.opacityAnimation : ""} ${showNcbtmb === false ? styles2.opacityAnimation1 : ""} ${showNcbtmb === undefined ? styles2.hideNcbtmbdiv : ""}`}><Ncbtmb ncbtmbMethodHide={ncbtmbMethodHide} /></div>


                </div>


                <div className={`col-span-12 md:col-span-5   relative   ${!start ? styles2.opacityAnimation : styles2.opacityAnimation1} `}>
                    <div className={`   ${!open && !openTeacherLogin ? showParent : hideParent} ${openTeacherLogin === true ? TeacherCss.mainDivHide : TeacherCss.mainDivShow} ${isLoaded ? styles.gridMain : ""} ${openTeacherLogin || open ? styles.hidebgComp : ""} `}>

                        <div className='grid grid-cols-12'>
                            <div className=' md:col-span-6 w-full h-[100vh] border-l border-gray'>
                                {/* start components */}

                                <div className={` w-full h-1/2   flex flex-col overflow-hidden relative justify-center   ${Styles.rotateChild} ${styles2.mainAnimation} `} onClick={() => startMethod()} >
                                    <div className={` md:space-x-0 flex md:flex-col relative md:pt-7  `}>
                                        <Door />
                                        <div className='w-full pt-3'>
                                            <h3 className='mt-4 2xl:text-4xl 4xl:text-6xl 3xl:text-5xl md:text-2xl text-3xl lineUp font-semibold md:text-center'>start</h3>
                                            <p className={`mt-1 ${Styles.hide1} tracking-[.05em] 4xl:text-4xl 3xl:text-2xl  md:text-center lineUp`}>start a course today!</p>
                                        </div>

                                    </div>

                                    <div className={`absolute bottom-0 right-0 ${Styles.hide1}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>

                                </div>

                                {/* concierge components */}

                                <div className={`w-full h-1/4 flex relative overflow-hidden flex-col justify-center border-t border-gray  ${styles.cardAnimation} cursor-pointer  ${showConceierge ? styles.onclickCardAanimation : ""}  `} onClick={() => conceiergeMethod()}>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <div className='md:mx-auto  w-[88px] h-[88px] 4xl:w-[200px] 4xl:h-[200px] 3xl:w-[150px] 3xl:h-[150px]'>
                                            <Image alt='start' src='/images/Concierge.svg' height='300' width='300' className='' />
                                        </div>

                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center 4xl:text-6xl 3xl:text-5xl 2xl:text-3xl md:text-2xl text-3xl  lineUp'>concierge</h3>
                                            <p className={`mt-1 ${styles.hide} md:text-center 4xl:text-4xl 3xl:text-2xl tracking-[.05em] lineUp`}>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                <div className={` w-full h-1/4  flex flex-col relative overflow-hidden z-40 justify-center cursor-pointer border-t border-gray  ${styles.cardAnimation}  `} onClick={() => startMethod()}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card '>
                                        <div className='md:mx-auto xl:pt-1 xl:w-[70px] xl:h-[70px] md:w-[60px] md:h-[50px] 4xl:w-[200px] 4xl:h-[200px] 3xl:w-[150px] 3xl:h-[150px] '>
                                            <Image alt='start' src='/images/home1.svg' height='300' width='300' />
                                        </div>
                                        <div className='w-full'>
                                            <h3 className='xl:mt-0 md:mt-0 2xl:text-3xl 4xl:text-6xl 3xl:text-5xl md:text-xl text-3xl lineUp font-semibold md:text-center'>gift shoppe</h3>
                                            <p className={`mt-1 ${styles.hide} md:text-center 4xl:text-4xl 3xl:text-2xl tracking-[.05em] lineUp`}>gift ce to a friends</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>
                            </div>


                            <div className=' md:col-span-6 h-[100vh] border-l border-gray w-full '>
                                <div className={`w-full h-1/2  flex  flex-col relative overflow-hidden z-40 justify-center cursor-pointer  ${styles.cardAnimation}   `} onClick={() => { HandleClick(); }}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <div className='md:mx-auto h-[130px]  w-[130px]    4xl:w-[200px] 4xl:h-[200px] 3xl:w-[150px] 3xl:h-[150px] '>
                                            <Image alt='start' src='/images/IamBack.svg' height='300' width='300' />
                                        </div>
                                        <div className='w-full'>
                                            <h3 className='mt-4 2xl:text-4xl 4xl:text-6xl 3xl:text-5xl md:text-2xl text-3xl lineUp font-semibold md:text-center'>i’m back</h3>
                                            <p className={`mt-1 ${styles.hide} md:text-center 4xl:text-4xl 3xl:text-2xl tracking-[.05em] lineUp`}>existing user login</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                {/* ncbtmb approved component */}

                                <div className={` w-full h-1/4 flex flex-col relative overflow-hidden justify-center border-t border-gray   ${styles.cardAnimation} ${showNcbtmb ? styles.onclickCardAanimation : ""}  `} onClick={() => ncbtmbMethod()}>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <div className='md:mx-auto 2xl:w-[120px] 4xl:w-[300px] 4xl:h-[300px] 3xl:w-[180px] 3xl:h-[180px]  2xl:h-[100px] w-[100px]  h-[100px] '>
                                            <Image alt='start' src='/images/ncbtmb.svg' height='400' width='400' />
                                        </div>

                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center 2xl:text-3xl 4xl:text-6xl 3xl:text-4xl text-2xl  lineUp'>ncbtmb approved</h3>
                                            <p className={`mt-1 ${styles.hide} md:text-center 4xl:text-2xl 3xl:text-2xl tracking-[.05em] lineUp`}>check if your state is approved</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                {/* teacher lounge components */}

                                <div className={` w-full h-1/4 flex flex-col justify-center border-t border-gray   ${styles.cardAnimation} ${openTeacherLogin === true ? TeacherCss.hidediveAfterTransform : ""} relative overflow-hidden `} onClick={() => handleTeacherLOginOpen()} >
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <div className='md:mx-auto 2xl:w-[50px] 4xl:w-[100px] 4xl:h-[100px] 3xl:w-[60px] 3xl:h-[60px] w-[35px] 2xl:h-[70px] md:pt-1 h-[50px]'>
                                            <Image alt='start' src='/images/teacherLounge.svg' height='200' width='150' />
                                        </div>
                                        <div className='w-full 4xl:mt-20 3xl:mt-16'>
                                            <h3 className='font-semibold lineUp 3xl:mt-2 md:text-center 2xl:text-3xl 4xl:text-6xl 3xl:text-4xl md:text-xl text-2xl md:mt-4'>teacher’s lounge</h3>
                                            <p className={` ${styles.hide} md:text-center tracking-[.05em] 4xl:text-2xl 3xl:text-xl lineUp`}>existing instructor please login here!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={`fixed top-[45%] xl:left-[75%] lg:left-[80%] left-[75%] -translate-x-[25%] -translate-y-[25%] z-40 ${openTeacherLogin === true ? styles.modelOpen : styles.modelClose} ${openTeacherLogin === undefined ? styles2.hideNcbtmbdiv : ""} `}><IwannaTech /></div>

                    <div className={` col-span-12 md:col-span-5  z-5 absolute  ${hideChild ? styles.animationEndHideChild : ""} ${open ? showChild : hideChild} ${open === undefined ? styles2.hideNcbtmbdiv : ""} `} >
                        <div className=" relative ">
                            <div className={` bg-transparent relative  border border-bordergray ${open ? styles.modelScaleUpAnimation : styles.modelScaleDownAnimation} `}>
                                <LoginModel changeDuration={changeDuration} title="welcome back !" />
                            </div>

                        </div>
                    </div>

                    <div className={` col-span-12 md:col-span-5 z-5 absolute ${openTeacherLogin === true ? TeacherCss.openModel : TeacherCss.closeModel} ${openTeacherLogin === undefined ? styles2.hideNcbtmbdiv : ""} `} >

                        <div className={` bg-white relative  border border-bordergray xl:p-10 p-10 lg:p-5`}>

                            <LoginModel changeDuration={handleTeacherLOginClose} title="Teacher s Lounge" />
                        </div>
                    </div>
                </div>


                {/* simply choose component */}

                <div className={`bg-[url('/images/start-bg.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 ${start ? styles2.opacityAnimation : styles2.opacityAnimation1}  ${start === undefined ? styles2.hideNcbtmbdiv : ""} grid grid-cols-12`}>
                    <div className={`col-span-12 md:col-span-11  ${start === undefined ? styles2.hideNcbtmbdiv : ""} `}>
                        <SimplyChoose startMethodHide={startMethodHide} start={start} />
                    </div>
                    <div className={`col-span-12 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray ${start === undefined ? styles2.hideNcbtmbdiv : ""}`}>
                        <SideMenu ShowMenuMethod={ShowMenuMethod} />
                    </div>
                </div>



                {/* sidebar component */}

                <div className='col-span-1 md:p-4 p-0 max-sm:invisible md:col-span-1 md:flex justify-center items-center relative h-screen w-full border-l border-bodergray  hidden'>
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/2 -translate-x-1/2 '>
                            <div className='flex items-center justify-center max-[768px]:space-x-1 space-x-2' onClick={() => { ShowMenuMethod() }}>
                                <p className='font-semibold max-[768px]:text-[12px] 4xl:text-[40px] 3xl:text-[30px]'>menu</p>
                                <svg width="24" height="24" className={` 4xl:w-[50px] 4xl:h-[50px] 3xl:w-[40px] 3xl:h-[40px]  ${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <div className=' absolute bottom-5 left-1/2 -translate-x-1/2  '>
                            <MusicCard />
                        </div>
                    </div>
                </div>

            </div>

            {/* drowable component */}

            <div className={` ${(On === true || currentPath == 'blog') ? styles2.toggleOn : ""} ${On === false ? styles2.toggleOff : ""} ${On === undefined ? styles2.hideNcbtmbdiv : ""}`}>
                <MenuComponent HideMenuMethod={HideMenuMethod} On={On} />
            </div>

            <div className={`md:hidden bg-transparent w-full ${On === true ? "hidden" : "block"}`}>



                <div className={``}>
                    <HomeComponentMobile ShowMenuMethod={ShowMenuMethod} />
                </div>

            </div>

        </>
    )
}


export default Home



