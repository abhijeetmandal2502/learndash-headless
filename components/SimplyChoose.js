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
import SimpleGiftCard from './Start/SimpleGiftCard'
import GiftCardBtn from './Start/GiftCardBtn'
import GiftCardModel from './Start/DialogCard/GiftCardModel'
import { useRouter } from 'next/router'
import GiftCardPaymentOption from './giftshop/GiftCardpPaymentOption'
import { GoGift } from 'react-icons/go'
const SimplyChoose = ({ startMethodHide, handleGiftComponent, start, ShowGiftShoppi, setShowGiftShoppi, selectedCourse, selectedCourseMethod, panel, setPanel, setActiveTabIndex, simplyChoose, setSimplyChoose }) => {
    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(true);
    const [activePaymentCard, setActivePaymentCard] = useState(false)
    // console.log("activePaymentCard", activePaymentCard)
    const showPaymentOpt = () => {
        setActivePaymentCard(true);
    }
    // handle e gift and physical card

    const [activeEgift, setActiveEgift] = useState(false);

    const [activePhysicalGift, setActivePhysicalGift] = useState(false);
    // model for gift dialog form
    let [isOpenD, setIsOpenD] = useState(false)

    function closeModal() {
        setIsOpenD(false)
    }
    function openModal() {
        setIsOpenD(true)
    }
    // console.log('isOpenD', isOpenD)

    const data = [
        {
            price: 40,
            duration: "give ce as a gift",
            discription: "gift shoppe"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2 Hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4  Hours",
            discription: "using research to market your practice"
        },

    ]

    const HandlelobbyClick = () => {
        setTimeout(() => {
            if (router.asPath == '/?active=start') {
                startMethodHide();
                router.push('/');
            }
            // setOpenTab(0)
        }, 500)
        setActivePaymentCard(false)
        setIsOpenD(false)
        setShowGiftShoppi(false);
        setSelected(false);
    }

    const handleClick = (index, item) => {
        setSelected(index);
        // setSimplyChoose(true)

        const tempArray = [...selectedArray]
        if (tempArray[index] == index) { tempArray[index] = undefined }
        else { tempArray[index] = index }

        setSelectedArray(tempArray)
        setHideForm(false)
    };

    const functionHideForm = () => {
        setHideForm(true)
        setShowGiftShoppi(false);
        setSelected(false);
        // setSimplyChoose(true)
        if (ShowGiftShoppi === true) {
            setHideForm(false)
            setIsOpenD(false)

        }

        setActivePaymentCard(false)

    }

    const stringData = selectedArray.map((item) => {
        return item;
    })
    // console.log("ShowGiftShoppi", simplyChoose, ShowGiftShoppi, hideForm)

    //   drower for mobile 
    const router = useRouter();

    // drower for mobile
    const currentPath = router?.query?.active;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLeft, setIsOpenLeft] = useState(true);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {

        setIsOpen(!isOpen)
    }
    const drowerClose = () => {
        setIsOpen(!isOpen)
    }
    // console.log('panel', panel, selectedCourse, isOpen)

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

                <div className={` ${selectedCourse ? styles.hide1 : styles.fadeAnimation}`}>
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

                            {console.log(styles.show1)}
                            {/* ${(selected === false && !ShowGiftShoppi) ? styles.show1 : styles.hide1}  */}

                            <div className={`flex flex-col justify-between ${((!selected && selected !== 0) && !ShowGiftShoppi) ? styles.show1 : styles.hide1}  `}>
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

                            {/* giftcard  details of simply choose section on click */}

                            <div className={`md:mt-8 2xl:mt-16  hidden md:grid grid-cols-12 ${!ShowGiftShoppi ? styles.hide1 : styles.fadeAnimation}  `}>
                                <button className='absolute top-10 text-2xl left-[90%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                {/* courses details */}
                                <div className='col-span-12 md:col-span-5'>
                                    <SimpleGiftCard />
                                </div>
                                {/* course checkout */}
                                {!activePaymentCard ? <div className='col-span-12 md:col-span-7'>
                                    <div className='flex flex-col space-y-8'>
                                        <div onClick={() => { openModal(), setActiveEgift(true), setActivePhysicalGift(false) }} >
                                            <GiftCardBtn animationCss={"ecardRotate"} title="e-gift card" icon="/start/eGift.svg" />
                                            {/* giftcard button model */}
                                            <GiftCardModel isOpenD={isOpenD} closeModal={closeModal} activeEgift={activeEgift} activePhysicalGift={activePhysicalGift} showPaymentOpt={showPaymentOpt} />
                                        </div>
                                        <div onClick={() => { openModal(), setActivePhysicalGift(true), setActiveEgift(false) }} >
                                            <GiftCardBtn animationCss={"ecardImgAni"} title="physical gift card" icon="/start/PhysicalGift.svg" />
                                        </div>
                                    </div>
                                </div> : ""}

                                {/* gift card payment detail */}
                                {activePaymentCard ? <div className='col-span-12 md:col-span-7 -mt-[25%]'>
                                    <GiftCardPaymentOption />
                                </div> : ""}

                            </div>
                        </div>

                        <div className={`md:col-span-5 col-span-12 relative 3xl:border-l border-gray `}>
                            <div className={`grid grid-cols-12  md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative ${start === true ? styles.gridMain : ""}`}>

                                <div className={`relative hidden md:block ${styles.mainDiv} ${styles.mainDivGrid} ${start === true ? styles.gridMaincontent : ""} bg-transparent md:col-span-6  relative col-span-12 md:border border-t border-bordergray    md:py-5 md:pl-8 md:pr-5  md:mt-0 mt-5  flex flex-col justify-between    ${ShowGiftShoppi ? styles.cardBackground : styles.cardBackgroundHover} `} style={{ height: "33.33vh" }} onClick={() => { { handleGiftComponent(), handleClick() } }} >

                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            {/* <Image src="/images/gift.svg" width={25} height={25} alt='gift' className='3xl:w-[40px] 3xl:h-[40px]' /> */}

                                            <GoGift className='mediumf' />
                                            <div className='font-[500] mediumf'>{data[0].duration}</div>
                                        </div>
                                    </div>
                                    <div className={`  ${ShowGiftShoppi ? styles.activeGiftShoppy : styles.gift} ${!ShowGiftShoppi ? styles.inActiveGiftShoppy : styles.gift}} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]  `}>
                                    </div>
                                    <p className={` pt-5 absolute bottom-[10%] dubblelargef ${styles.discriptionAnimation}`}>
                                        {data[0].discription}
                                    </p>
                                    <div className={`absolute bottom-0 right-0  ${ShowGiftShoppi ? 'block transition-all ease-in-out duration-1000' : styles.hide1}  `} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                    </div>
                                </div>

                                {/* gift shoppe card for mobile */}
                                <div className={` md:hidden block ${styles.mainDiv} ${styles.mainDivGrid}  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col    ${ShowGiftShoppi ? styles.cardBackground : styles.cardBackgroundHover} `}
                                    onClick={() => { { setActiveTabIndex(4) } }}
                                >
                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                            <p className='font-bold mediumf'>{data[0].duration}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Image src="/images/homeColor.svg" width={100} height={100} alt='home' />
                                        <p className={`md:pt-0 pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                            {data[0].discription}
                                        </p>
                                    </div>
                                </div>

                                {/* all course list */}

                                {data?.slice(1).map((item, index) => {
                                    return (
                                        <Fragment key={index} >
                                            {/* for desktop */}
                                            {/* gift shoppi course card */}
                                            {ShowGiftShoppi ? <div className={`${start === true ? styles.gridMaincontent : ""} hidden  bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray h-[33.33vh] md:p-10 md:py-5 md:pl-8 md:pr-5 md:mt-0 mt-5  md:flex flex-col justify-between`} >
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <div className='flex items-center justify-center space-x-1 font-[500] mediumf'>
                                                            <MdOutlineWatchLater className='largef' />
                                                            <p className='font-bold mediumf'>{item.duration}</p>
                                                        </div>
                                                    </div>
                                                    <div className={` relative `}>
                                                        <div className='absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <div className='font-semibold text-black mediumf'>
                                                                ${item.price}
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <Image src="/start/giftshoppiPriceBg.svg" width={68} height={69} alt='price' className={`${styles.priceBack}`} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`absolute bottom-[10%]   font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                    {item.discription}
                                                </div>
                                                <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                    <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                </div>

                                            </div> :
                                                <div className={`hidden md:block ${start === true ? styles.gridMaincontent : ""} ${styles.mainDivGrid}  relative  h-[33.33vh]  bg-transparent md:col-span-6 col-span-12 md:border border-t  md:block border-bordergray md:py-5 md:pl-8 md:pr-5 md:mt-0 mt-5 justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `}
                                                    onClick={() => { handleClick(index, item) }}
                                                >
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <div className='flex items-center justify-center space-x-1 font-[500] mediumf'>
                                                                <MdOutlineWatchLater className='largef' />
                                                                <p className='font-bold mediumf'>{item.duration}</p>
                                                            </div>
                                                        </div>

                                                        {/* course price components */}
                                                        <div className={` relative `} >
                                                            <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                                <p className='md:text-[24px] mediumf xl:text-[24px] font-semibold text-white'>
                                                                    ${item.price}
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
                                                    <div className={`absolute bottom-[10%]   font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                        {item.discription}
                                                    </div>

                                                    <div className='hidden md:block'>
                                                        <div className={` absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                            <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                        </div>
                                                    </div>

                                                </div>}

                                            {/* for mobile */}
                                            <div className={`md:hidden p-5 ${ShowGiftShoppi ? 'hidden' : ""}   bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray    flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => { handleClick(index, item), selectedCourseMethod() }}>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center justify-center space-x-1 font-bold mediumf'>
                                                        <MdOutlineWatchLater size={25} />
                                                        <div><p className='font-[500] mediumf'>{item.duration}</p></div>
                                                    </div>

                                                    {/* course price components */}

                                                    <div className={` relative `} onClick={() => { setPanel(true), selectedCourseMethod(), drowerOpen() }}>
                                                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <p className='font-semibold text-white text-[16px]'>
                                                                ${item.price}
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
                                                <p className={`md:pt-10 pt-5 leading-8  font-Barlow    font-[500] text-[22px]  ${styles.discriptionAnimation}`}>
                                                    {item.discription}
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
                <div div className={` z-9 absolute top-0 md:hidden ${selectedCourse ? styles.fadeAnimation : styles.hide1} `}>
                    <ResearchComponent drowerOpen={drowerOpen} drowerClose={drowerClose} isOpen={isOpen} setIsOpen={setIsOpen} panel={panel} setPanel={setPanel} />
                </div >
            </div >




        </>
    )
}

export default SimplyChoose