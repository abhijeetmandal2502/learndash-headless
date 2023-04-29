import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
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
const SimplyChoose = ({ startMethodHide, handleGiftComponent, start, ShowGiftShoppi, selectedCourse, selectedCourseMethod, panel, setPanel }) => {


    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(false);

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

    const data = [
        {
            price: 40,
            duration: "give ce as a gift",
            discription: "gift shoppe"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "2hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "2hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },

    ]
    const handleClick = (index, item) => {
        setSelected(index, item);

        const tempArray = [...selectedArray]
        if (tempArray[index] == index) { tempArray[index] = undefined }
        else { tempArray[index] = index }

        setSelectedArray(tempArray)
        setHideForm(false)
    };

    const functionHideForm = () => {
        setHideForm(true)

        setSelected(false);
    }
    const stringData = selectedArray.map((item) => {
        return item;
    })

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

    console.log('panel', panel, selectedCourse, isOpen)

    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className="w-full relative">
                <div className={`bg-white  ${selectedCourse ? styles.hide1 : styles.fadeAnimation}`}>
                    <div className='relative grid grid-cols-12 bg-white'>
                        <div className={`  md:col-span-6 col-span-12 md:pl-16 md:h-screen overflow-scroll ${styles.hidescrollBar}`}>
                            <div className='hidden pt-6 md:block'>
                                <LogoCard LogoImage={LogoImage} />
                            </div>
                            <div className='hidden md:block'>
                                <button className={`flex items-center space-x-1 ${styles.submitbtnbg} font-bold  text-white px-4 py-2 mt-4 rounded-3xl`} onClick={() => { startMethodHide(), setPanel(false) }}>
                                    <BiArrowBack size={20} className="text-white " /><span className='minismallf'>lobby</span></button>
                            </div>
                            <div className={`flex flex-col justify-between ${selected === false && hideForm === false ? styles.show1 : styles.hide1} ${selected === false && hideForm ? styles.show1 : styles.hide1}  `}>
                                <div className='px-3 pt-10 md:pt-32 md:px-0 '>
                                    <h2 className='superlargef'>simply choose.</h2>
                                    <p className='py-5 dubblelargef'>smile, you can’t make a bad choice.</p>
                                </div>
                            </div>
                            {/* Selected Courses details of simply choose section on click */}
                            <div className={`2xl:mt-16 hidden md:grid grid-cols-12 ${selected === false && hideForm === false ? styles.hide1 : styles.fadeAnimation} ${selected === false ? styles.hide1 : styles.fadeAnimation} ${selected >= 0 && !hideForm ? styles.fadeAnimation : styles.hide1} `}>
                                <button className='absolute top-4 text-2xl left-[43%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                {/* courses details */}
                                <div className='col-span-12 md:col-span-5'>
                                    <ResearchComponent />
                                </div>
                                {/* course checkout */}
                                <div className='col-span-12 md:col-span-7'>
                                    <AddToCart />
                                </div>
                            </div>

                            {/* giftcard  details of simply choose section on click */}

                            <div className={`md:mt-8 2xl:mt-16 hidden md:grid grid-cols-12 ${!ShowGiftShoppi || hideForm === true ? styles.hide1 : styles.fadeAnimation}  `}>
                                <button className='absolute top-4 text-2xl left-[43%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                                {/* courses details */}
                                <div className='col-span-12 md:col-span-5'>
                                    <SimpleGiftCard />
                                </div>
                                {/* course checkout */}
                                <div className='col-span-12 md:col-span-7'>
                                    <div className='flex flex-col space-y-8'>
                                        <div onClick={() => { openModal(), setActiveEgift(true), setActivePhysicalGift(false) }} >
                                            <GiftCardBtn animationCss={"ecardRotate"} title="e-gift card" icon="/start/eGift.svg" />
                                            {/* giftcard button model */}
                                            <GiftCardModel isOpenD={isOpenD} closeModal={closeModal} activeEgift={activeEgift} activePhysicalGift={activePhysicalGift} />
                                        </div>
                                        <div onClick={() => { openModal(), setActivePhysicalGift(true), setActiveEgift(false) }} >
                                            <GiftCardBtn animationCss={"ecardImgAni"} title="physical gift card" icon="/start/PhysicalGift.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`md:col-span-6 col-span-12 relative `}>
                            <div className={`grid grid-cols-12 md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative ${start === true ? styles.gridMain : ""}`}>
                                <div className={` hidden md:block ${styles.mainDiv} bg-transparent md:col-span-6 min-h-[250px] relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col justify-between   ${ShowGiftShoppi ? styles.cardBackground : styles.cardBackgroundHover} `} onClick={() => { { handleGiftComponent(), handleClick() } }} >
                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                            <div className='font-bold mediumf'>{data[0].duration}</div>
                                        </div>
                                    </div>
                                    <div className={`  ${ShowGiftShoppi ? styles.activeGiftShoppy : styles.gift} ${!ShowGiftShoppi ? styles.inActiveGiftShoppy : styles.gift}} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]  `}>
                                    </div>
                                    <p className={`md:pt-[170px] pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                        {data[0].discription}
                                    </p>
                                    <div className={`absolute bottom-0 p-4 right-0  ${ShowGiftShoppi ? 'block' : styles.hide1}  `} >
                                        <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                    </div>
                                </div>

                                {/* gift shoppe card for mobile */}

                                <div className={` md:hidden block ${styles.mainDiv} bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col    ${ShowGiftShoppi ? styles.cardBackground : styles.cardBackgroundHover} `} onClick={() => { { handleGiftComponent(), handleClick() } }} >
                                    <div className='flex justify-between'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                            <div className='font-bold mediumf'>{data[0].duration}</div>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <Image src="/images/homeColor.svg" width={100} height={100} />
                                        <p className={`md:pt-0 pt-5 leading-10 font-normal   dubblelargef ${styles.discriptionAnimation}`}>
                                            {data[0].discription}
                                        </p>
                                    </div>
                                </div>

                                {/* all course list */}

                                {data?.slice(1).map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className={` ${ShowGiftShoppi ? 'hidden' : ""}   bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray   p-5 md:mt-0 mt-5  flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => { handleClick(index, item), selectedCourseMethod() }}>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-start justify-center space-x-1 font-bold mediumf'>
                                                        <MdOutlineWatchLater />
                                                        <div className=''>{item.duration}</div>
                                                    </div>

                                                    {/* course price components */}

                                                    <div className={` relative `} onClick={() => { setPanel(true), selectedCourseMethod(), drowerOpen() }}>
                                                        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <div className='md:text-[24px] mediumf xl:text-[24px] font-semibold text-white'>
                                                                ${item.price}
                                                            </div>
                                                        </div>
                                                        {selectedArray[index] !== index ? <div className=' absolute top-[80%] left-[20%] font-bold  text-[23px] text-[#FF5C00] '>
                                                            +add
                                                        </div> : <div className=' flex absolute top-[80%] left-[0%] font-bold  text-[23px] text-[#FF5C00] '>
                                                            <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={30} /></div>
                                                            <div className={`text-[#AC6CFF] text-[23px] font-semibold`}>
                                                                added
                                                            </div>
                                                        </div>}
                                                        <div className=''>
                                                            {selectedArray[index] == index ? <Image src="/images/newPriceBackground.svg" width={100} height={100} alt="prceBg" /> :
                                                                <Image src="/images/newPriceOrange.svg" width={100} height={100} alt="prceBg" />}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`md:pt-10 pt-5 leading-10  font-Barlow dubblelargef   font-normal  ${styles.discriptionAnimation}`}>
                                                    {item.discription}
                                                </div>
                                                <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                    <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                </div>
                                            </div>

                                            {/* gift shoppi course card */}
                                            {ShowGiftShoppi ? <div key={index} className={`bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray  md:p-10 p-5 md:mt-0 mt-5  flex flex-col justify-between`} >
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center justify-center space-x-1'>
                                                        <MdOutlineWatchLater />
                                                        <div>{item.duration}</div>
                                                    </div>
                                                    <div className={` relative `}>
                                                        <div className='absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                            <div className='md:text-[24px] mediumf xl:text-[24px] font-semibold text-black'>
                                                                ${item.price}
                                                            </div>
                                                        </div>
                                                        <div className=''>
                                                            <Image src="/start/giftshoppiPriceBg.svg" width={68} height={69} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`md:pt-10 pt-5 leading-10  font-Barlow xl:textmediumf  md:text-[28px]   mediumf ${styles.discriptionAnimation}`}>
                                                    {item.discription}
                                                </div>
                                                <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                                    <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                                </div>

                                            </div> : ""}
                                        </>
                                    )

                                })}


                            </div>
                            <div className={` absolute -bottom-0 left-1/2 -translate-x-1/2  z-[100]`}>
                                <ScrollBtn />
                            </div>

                        </div>

                    </div>
                </div>


                {/* course selected component for mobile when click show  */}

                <div className={` z-20 absolute top-0 md:hidden ${selectedCourse ? styles.fadeAnimation : styles.hide1} `}>
                    <ResearchComponent drowerOpen={drowerOpen} drowerClose={drowerClose} isOpen={isOpen} setIsOpen={setIsOpen} panel={panel} setPanel={setPanel} />
                </div>
            </div>




        </>
    )
}

export default SimplyChoose