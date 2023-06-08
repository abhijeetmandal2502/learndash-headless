import React, { Fragment, useState } from 'react'
import { BiArrowBack, BiGift } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import ResearchComponent from './Start/ResearchComponent'
import Image from 'next/image'
import styles from '../src/styles/CoursePage.module.css'
import LogoCard from './card/LogoCard'
import { AiOutlineCheck, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import ScrollBtn from './Start/ScrollBtn'
import AddToCart from './Start/AddToCart'
import { useRouter } from 'next/router'
import { GoGift } from 'react-icons/go'
const SimplyChoose = ({ courseData }) => {
    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(true);
    const [activePaymentCard, setActivePaymentCard] = useState(false)
   
    // model for gift dialog form
    let [isOpenD, setIsOpenD] = useState(false)

    function closeModal() {
        setIsOpenD(false)
    }
    function openModal() {
        setIsOpenD(true)
    }
    
    const HandlelobbyClick = () => {
        setTimeout(() => {
            router.push({
                pathname:'/'
            })
        }, 500)
        setActivePaymentCard(false)
        setIsOpenD(false)
        setSelected(false);
    }

    const handleClick = (index, item) => {
        setSelected(index);
        const tempArray = [...selectedArray]
        if (tempArray[index] == index) { tempArray[index] = undefined }
        else { tempArray[index] = index }
        setSelectedArray(tempArray)
        setHideForm(false)
    };

    const functionHideForm = () => {
        setHideForm(true)
        setSelected(false);
        setActivePaymentCard(false)
    }

    const stringData = selectedArray.map((item) => {
        return item;
    })
    //   drower for mobile 
    const router = useRouter();

    // drower for mobile
    const currentPath = router?.query?.active;
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {
        setIsOpen(!isOpen)
    }
    const drowerClose = () => {
        setIsOpen(!isOpen)
    }
     //console.log('courseData', courseData)
    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className="relative w-full">
                <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in md:hidden -z-10">
                    <Image
                        className={`${styles.aboutMain}`}
                        src="/images/start-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className={` ${styles.fadeAnimation}`}>
                    <div className='relative grid grid-cols-11 overflow-y-scroll'>
                        <div className={` relative md:col-span-6 col-span-12 md:pl-[12%]  md:h-screen overflow-scroll ${styles.hidescrollBar}`}>
                            <div className='hidden md:block'>
                                <LogoCard LogoImage={LogoImage} />
                            </div>
                            <div className='w-max  '>

                                <button className={`  hidden  md:flex items-center space-x-1 bg-black text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`} onClick={() => { HandlelobbyClick() }} >
                                    <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>

                            </div>

                            {/* <div className='hidden md:block -z-50'>
                                <button className={`flex items-center space-x-1 ${styles.submitbtnbg} font-bold  text-white px-5 py-2  rounded-3xl`} onClick={() => { HandlelobbyClick() }}>
                                    <BiArrowBack size={20} className={`text-white ${styles.backIcon}`} /><span className='mediumf'>lobby</span></button>
                            </div> */}

                            <div className={`flex flex-col justify-between ${((!selected && selected !== 0)) ? styles.show1 : styles.hide1}  `}>
                                <div className={`px-3 mt-10 md:pt-32 md:px-0 ${styles.titleMain} `}>
                                    <h2 className='text-black superlargef'>simply choose.</h2>
                                    <p className='py-2 dubblelargef'>smile, you can’t make a bad choice.</p>
                                </div>
                            </div>
                            {/* Selected Courses details of simply choose section on click */}
                            <div className={`  hidden md:grid grid-cols-12 md:grid-cols-9 ${selected === false && hideForm === false ? styles.hide1 : styles.fadeAnimation} ${selected === false ? styles.hide1 : styles.fadeAnimation} ${selected >= 0 && !hideForm ? styles.fadeAnimation : styles.hide1} `}>
                                <button className='absolute top-10 text-2xl left-[90%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                {/* courses details */}
                                <div className='col-span-12 md:col-span-4'>
                                    <ResearchComponent />
                                </div>
                                {/* course checkout */}
                                <div className={`col-span-12 md:col-span-5 ${styles.addtoCard}`}>
                                    <AddToCart />
                                </div>
                            </div>
                        </div>

                        <div className={`md:col-span-5 col-span-12 relative 3xl:border-l border-gray `}>
                            <div className={`grid grid-cols-12  md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative ${styles.gridMain} `}>

                                <div className={`relative hidden md:block ${styles.mainDiv} ${styles.mainDivGrid} ${styles.gridMaincontent} bg-transparent md:col-span-6  relative col-span-12 md:border border-t border-bordergray    md:py-5 md:pl-8 md:pr-5  md:mt-0 mt-5  flex flex-col justify-between   `} style={{ height: "33.33vh" }}
                                //  onClick={() => { { handleGiftComponent(), handleClick() } }}

                                onClick={() => { router.push({
                                    pathname:'/giftshoppe'

                                }) }}
                                  >

                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            {/* <Image src="/images/gift.svg" width={25} height={25} alt='gift' className='3xl:w-[40px] 3xl:h-[40px]' /> */}

                                            <GoGift className='mediumf' />
                                            <div className='font-[500] mediumf'>give ce as a gift</div>
                                        </div>
                                    </div>
                                    <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] ${styles.gift} `}>
                                    </div>
                                    <p className={` pt-5 absolute bottom-[10%] dubblelargef ${styles.discriptionAnimation}`}>
                                    gift shoppe
                                    </p>
                                    <div className={`absolute bottom-0 right-0  block transition-all ease-in-out duration-1000  `} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                    </div>
                                </div>

                                {/* gift shoppe card for mobile */}
                                <div className={` md:hidden block ${styles.mainDiv} ${styles.mainDivGrid}  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col    ${styles.cardBackgroundHover } `}
                                    onClick={() => { { setActiveTabIndex(4) } }}
                                >
                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                            <p className='font-bold mediumf'>give ce as a gift</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Image src="/images/homeColor.svg" width={100} height={100} alt='home' />
                                        <p className={`md:pt-0 pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                        gift shoppe
                                        </p>
                                    </div>
                                </div>

                                {/* all course list */}

                                {courseData?.slice(1).map((item, index) => {
                                    return (
                                        <Fragment key={index} >
                                            {/* for desktop */}
                                                <div className={`hidden md:block ${styles.gridMaincontent} ${styles.mainDivGrid}  relative  h-[33.33vh]  bg-transparent md:col-span-6 col-span-12 md:border border-t  md:block border-bordergray md:py-5 md:pl-8 md:pr-5 md:mt-0 mt-5 justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `}
                                                    onClick={() => { handleClick(index, item) }}
                                                >
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <div className='flex items-center justify-center space-x-1 font-[500] mediumf'>
                                                                <MdOutlineWatchLater className='largef' />
                                                                <p className='font-bold mediumf'>
                                                                    {/* {item.duration} */}
                                                                    4 Hours
                                                                    </p>
                                                            </div>
                                                        </div>

                                                        {/* course price components */}
                                                        <div className={` relative `} >
                                                            <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                                <p className='smallfXL leading-[100%] font-semibold text-white'>
                                                                    {item?.course_price}
                                                                </p>
                                                            </div>
                                                            {selectedArray[index] !== index ? <p className=' absolute top-[110%] left-[50%] -translate-y-[110%] -translate-x-[50%] font-bold  largef text-[#FF5C00] '>
                                                                +add
                                                            </p> : <div className=' flex absolute top-[110%] left-[40%] -translate-y-[110%] -translate-x-[40%] font-bold  largef text-[#FF5C00] '>
                                                                <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={20} /></div>
                                                                <p className={`text-[#AC6CFF] largef font-semibold`}>
                                                                    added
                                                                </p>
                                                            </div>}
                                                            <div className=''>
                                                                {selectedArray[index] == index ? <Image src="/images/newPriceBackground.svg" width={100} height={100} alt="prceBg" className={`${styles.priceBack}`} /> :
                                                                    <Image src="/images/newPriceOrange.svg" width={100} height={100} alt="prceBg" className={`${styles.priceBack}`} />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`absolute bottom-[10%] ${styles.lineClampContent}  font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                        {item?.title?.rendered}
                                                    </div>

                                                    <div className='hidden md:block'>
                                                        <div className={` absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                            <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                        </div>
                                                    </div>

                                                </div>

                                            {/* for mobile */}
                                            <div className={`md:hidden p-5   bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray    flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => { handleClick(index, item), selectedCourseMethod() }}>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center justify-center space-x-1 font-bold mediumf'>
                                                        <MdOutlineWatchLater size={25} />
                                                        <div><p className='font-[500] mediumf'>
                                                            {/* {item.duration} */}
                                                            4 Hours
                                                            </p>
                                                            </div>
                                                    </div>

                                                    {/* course price components */}

                                                    <div className={` relative `} onClick={() => { setPanel(true), selectedCourseMethod(), drowerOpen() }}>
                                                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <p className='font-semibold text-white text-[12px]'>
                                                                {item.course_price}
                                                            </p>
                                                        </div>
                                                        {selectedArray[index] !== index ? <div className=' absolute top-[80%] left-[20%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                            +add
                                                        </div> : <div className=' flex absolute top-[85%] left-[0%] font-[500]  text-[16px] text-[#FF5C00] '>
                                                            <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={15} /></div>
                                                            <p className={`text-[#AC6CFF] text-[16px] font-[500]`}>
                                                                added
                                                            </p>
                                                        </div>}
                                                        <div className=''>
                                                            {selectedArray[index] == index ?
                                                                <Image src="/images/newPriceBackground.svg" width={55} height={58} alt="prceBg" />
                                                                :
                                                                <Image src="/images/newPriceOrange.svg" width={55} height={58} alt="prceBg" />}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={`md:pt-10 pt-5 leading-8 ${styles.lineClampContent}  font-Barlow    font-[500] text-[20px]  ${styles.discriptionAnimation}`}>
                                                    {item?.title?.rendered}
                                                </p>

                                                <div className='hidden md:block'>
                                                    <div className={` absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                        <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                    </div>
                                                </div>

                                            </div>


                                        </Fragment>
                                    )

                                })}

                            </div>
                            <div className={`hidden md:block absolute -bottom-0 left-1/2 -translate-x-1/2  z-[100]`}>
                                <ScrollBtn />
                            </div>

                        </div>

                    </div>
                </div >
                {/* course selected component for mobile when click show  */}
                {/* <div div className={` z-9 absolute top-0 md:hidden  `}>
                    <ResearchComponent drowerOpen={drowerOpen} drowerClose={drowerClose} isOpen={isOpen} setIsOpen={setIsOpen} />
                </div > */}
            </div >




        </>
    )
}

export default SimplyChoose