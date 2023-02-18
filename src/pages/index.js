
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/NewIndex.module.css'
import styles2 from '../styles/Conceierge.module.css'
import LoginModel from 'components/LoginModel';
import Conceierge from 'components/Conceierge'
import Ncbtmb from 'components/Ncbtmb'
import CourseInfo from 'components/CourseInfo'
import SimplyChoose from 'components/SimplyChoose'
import SideMenu from 'components/SideMenu'
import MenuComponent from 'components/Menu/MenuComponent'
import MusicCard from 'components/card/MusicCard'
import LogoCard from 'components/card/LogoCard'
import Styles from '../../components/card/animatedDoor/Door.module.css'
import TeacherCss from '../../components/TeacherLounge/TeacherLounge.module.css'
import IwannaTech from 'components/TeacherLounge/IwannaTech'




const Home = () => {

    //for login
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    // for conceierge

    const [showConceierge, setShowConceierge] = useState();

    // for ncbtmb 

    const [showNcbtmb, setShowNcbtmb] = useState();

    // for menu open close 

    const [On, setOn] = useState("");

    // teacher lounge 

    const [openTeacherLogin, setOpenTeacherLogin] = useState();



    const handleTeacherLOginOpen = () => {

        setOpenTeacherLogin(true)
        // openTeacherLogin === false ? TeacherCss.closeModel 

    }


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
            setShowConceierge(false)
        }, 200)

    }


    const ncbtmbMethodHide = () => {
        setShowNcbtmb(false)


    }
    // conceierge approved 
    const conceiergeMethod = () => {

        setShowConceierge(true)
        setTimeout(() => {
            setShowNcbtmb(false)
        }, 200)

    }

    // show hide for start 

    const startMethod = () => {

        setStart(true)
    }

    // start hide method

    const startMethodHide = () => {

        setStart(false)
    }

    // side menu show hide method 

    const ShowMenuMethod = () => {
        setOn(true)
    }
    const HideMenuMethod = () => {
        setOn(false)
    }

    const LogoImage = "/images/Logo.svg"



    console.log('showNcbtmb', showNcbtmb)
    // console.log('start', start)




    return (
        <>

            <Head> LearnDash </Head>


            <div className={`grid grid-cols-12 md:h-screen overflow-hidden ${openTeacherLogin === true ? "bg-[url('/images/teacherLoungeBg.png')]" : "bg-[url('/images/bg-image.png')]"} bg-cover bg-center bg-no-repeat ${!On ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>

                <div className='flex flex-col justify-between p-10 col-span-12 md:col-span-6 relative '>
                    <div className='flex justify-between items-center space-x-5 cursor-pointer '>
                        <LogoCard LogoImage={LogoImage} />

                    </div>
                    <div className={`w-full pb-8 ${!showConceierge && !showNcbtmb ? styles2.opacityAnimation : styles2.opacityAnimation1}`}>
                        <p className='md:text-7xl text-4xl font-normal py-2'>massage ce.</p>
                        <p className='md:text-7xl text-4xl font-normal py-2'> simplified. </p>
                    </div>

                    {/* conceierge components */}
                    <div className={`${showConceierge ? styles2.opacityAnimation : styles2.opacityAnimation1} ${showConceierge === undefined ? styles2.hideNcbtmbdiv : ""} absolute top-36 left-10 w-full `}><Conceierge conceiergeHide={conceiergeHide} /></div>

                    {/* ncbtmb components */}

                    <div className={`absolute top-36 left-10 w-full ${showNcbtmb === true ? styles2.opacityAnimation : ""} ${showNcbtmb === false ? styles2.opacityAnimation1 : ""} ${showNcbtmb === undefined ? styles2.hideNcbtmbdiv : ""}`}><Ncbtmb ncbtmbMethodHide={ncbtmbMethodHide} /></div>


                </div>


                <div className={`col-span-12 md:col-span-5 z-10 relative  ${!start ? styles2.opacityAnimation : styles2.opacityAnimation1} `}>
                    <div className={` grid grid-cols-12 ${!open && !openTeacherLogin ? showParent : hideParent} ${openTeacherLogin === true ? TeacherCss.mainDivHide : TeacherCss.mainDivShow}`}>
                        <div className='col-span-12 md:h-screen md:col-span-6'>
                            <div className='grid md:h-full grid-cols-1 divide-y-[1px] divide-bordergray md:border-0 border-y-[1px] border-bordergray'>
                                <div className={`flex flex-col overflow-hidden relative justify-center md:border-l md:border-l-bordergray cursor-pointer  p-2  ${Styles.rotateChild} ${styles2.mainAnimation} `} onClick={() => startMethod()} >
                                    <div className={` md:space-x-0  relative `}>

                                        <div className='flex justify-center '>
                                            <div className={`  ${Styles.imageDiv}`}>
                                                <Image src="/doorImage/door1.png" width={150} height={150} className="h-[150px]" alt="door" />
                                                <div className={`${Styles.child} absolute top-0 left-[28px]`}>
                                                    <Image className={``} src="/doorImage/door2.png" width={61} height={61} alt="door" />
                                                    <Image className={`absolute top-10 left-8 `} src="/doorImage/door3.png" width={5} height={5} alt="door" />
                                                </div>


                                            </div>
                                        </div>

                                        <div className='w-full pt-2'>
                                            <h3 className='mt-4 text-4xl lineUp font-semibold md:text-center'>start</h3>
                                            <p className={`mt-1 ${Styles.hide1}   md:text-center lineUp`}>start a course today!</p>
                                        </div>


                                    </div>

                                    <div className={`absolute bottom-0 right-0 ${Styles.hide1}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>

                                </div>

                                <div className={`flex flex-col relative overflow-hidden z-40 justify-center cursor-pointer  p-2 ${styles.cardAnimation}  md:border-l md:border-l-bordergray`} onClick={() => { HandleClick(); }}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card '>
                                        <Image alt='start' src='/images/Im-Back.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 text-4xl lineUp font-semibold md:text-center'>i’m back</h3>
                                            <p className={`mt-2 ${styles.hide} md:text-center lineUp`}>existing user login</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-12 md:h-screen md:col-span-6 md:border-l md:border-l-bordergray'>
                            <div className='grid h-full grid-cols-1 divide-y-[1px] divide-bordergray'>
                                <div className={`flex relative overflow-hidden flex-col justify-center p-2 ${styles.cardAnimation} cursor-pointer`} onClick={() => conceiergeMethod()}>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/Concierge.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center text-3xl lineUp'>concierge</h3>
                                            <p className={`mt-2 ${styles.hide} md:text-center lineUp`}>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                <div className={`flex flex-col relative overflow-hidden justify-center p-2  ${styles.cardAnimation}`} onClick={() => ncbtmbMethod()}>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <Image alt='start' src='/images/NCBTMB-Approved.png' height='120' width='120' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center text-3xl lineUp'>ncbtmb approved</h3>
                                            <p className={`mt-2 ${styles.hide} md:text-center lineUp`}>check if your state is approved</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                                <div className={`flex flex-col justify-center p-2 ${styles.cardAnimation} ${openTeacherLogin === true ? TeacherCss.hidediveAfterTransform : ""} relative overflow-hidden`} onClick={() => handleTeacherLOginOpen()} >
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card cursor-pointer '>
                                        <Image alt='start' src='/images/Teacher-Lounge.png' height='70' width='51' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='font-semibold lineUp md:text-center text-3xl md:mt-4'>teacher’s lounge</h3>
                                            <p className={`mt-2 ${styles.hide} md:text-center lineUp`}>existing instructor please login here!</p>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 right-0 ${styles.hide}`} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="rectangle" />
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                    {openTeacherLogin ? <div className={`fixed top-[45%] left-[75%] -translate-x-[25%] -translate-y-[25%] z-40`}><IwannaTech /></div> : ""}

                    <div className={` col-span-12 md:col-span-5 z-5 absolute  ${hideChild ? styles.animationEndHideChild : ""} ${open ? showChild : hideChild}  `} >
                        <div className=" relative ">
                            <div className={` bg-transparent relative  border border-bordergray ${open ? styles.modelScaleUpAnimation : styles.modelScaleDownAnimation} `}>
                                <div className='flex justify-between '>
                                    <h2 className=' font-normal py-2 pb-4'>Welcome Back !</h2>

                                </div>
                                <button className='absolute top-4 right-4' onClick={() => { changeDuration(); }}><AiOutlineClose /></button>

                                <LoginModel />
                            </div>

                        </div>
                    </div>


                    <div className={` col-span-12 md:col-span-5 z-5 absolute ${openTeacherLogin === true ? TeacherCss.openModel : TeacherCss.closeModel} ${openTeacherLogin === undefined ? styles2.hideNcbtmbdiv : ""} `} >
                        <div className=" relative ">
                            <div className={` bg-white relative  border border-bordergray p-10 `}>
                                <div className='flex justify-between '>
                                    <h2 className=' font-normal py-2 pb-4'>Teacher s Lounge</h2>

                                </div>
                                <button className='absolute top-4 right-4' onClick={() => handleTeacherLOginClose()}><AiOutlineClose /></button>

                                <LoginModel />
                            </div>



                        </div>
                    </div>


                </div>

                {
                    <div className={`bg-[url('/images/start-bg.png')] absolute top-0 bg-cover bg-center bg-no-repeat md:col-span-12 ${start ? styles2.opacityAnimation : styles2.opacityAnimation1}  ${start === undefined ? styles2.hideNcbtmbdiv : ""} grid grid-cols-12`}>
                        <div className='col-span-6 p-10'>
                            {/* <div className='flex justify-between items-center space-x-5 cursor-pointer '>
                                <Image src='/images/logo.png' height='30' width='120' alt='logo' className='max-sm:h-[40px] max-sm:[50px] h-[70px] w-[250px]' />
                                <div className='flex max-sm:visible invisible items-center justify-center space-x-2 '>
                                    <p className='font-semibold text-lg'>menu</p>
                                    <Image src="/images/menuIcon.png" width={30} height={30} alt="menu" className='max-sm:h-5 max-sm:w-5' />
                                </div>


                            </div> */}
                            <LogoCard LogoImage={LogoImage} />
                            <SimplyChoose startMethodHide={startMethodHide} />
                        </div>
                        <div className='col-span-5 '>
                            <CourseInfo />
                        </div>
                        <div className='col-span-1 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray '>
                            <SideMenu />
                        </div>
                    </div>
                }


                <div className='col-span-1 p-4 max-sm:invisible md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray '>
                    {/* <SideMenu ShowMenuMethod={ShowMenuMethod} HideMenuMethod={HideMenuMethod} state={On} /> */}
                    <div className=' cursor-pointer'>
                        <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/4'>
                            <div className='flex items-center justify-center space-x-2' onClick={() => ShowMenuMethod()}>
                                <p className='font-semibold'>menu</p>
                                {/* <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" /> */}
                                <svg width="24" height="24" className={`${styles.animatMenuLine}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.80005H20.8" stroke="black" stroke-width="2" />
                                    <path d="M0 14L15.6 14" stroke="black" stroke-width="2" />
                                    <path d="M0 19.2L15.6 19.2" stroke="black" stroke-width="2" />
                                </svg>
                            </div>

                            {/* <div className={`flex items-center justify-center space-x-2 `} onClick={() => HideMenuMethod()}>
                                <p className='font-semibold'>Close</p>
                                <GrClose />
                            </div> */}
                        </div>
                        <div className=' absolute bottom-5 left-1/3'>
                            <MusicCard />
                        </div>
                    </div>
                </div>

            </div>

            <div className={` ${On === true ? styles2.toggleOn : ""} ${On === false ? styles2.toggleOff : ""} `}>
                <MenuComponent HideMenuMethod={HideMenuMethod} On={On} />
            </div>

        </>
    )
}

export default Home