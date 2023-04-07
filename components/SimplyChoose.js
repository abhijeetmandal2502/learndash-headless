import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import CheckoutForm from './Start/CheckoutForm'
import ResearchComponent from './Start/ResearchComponent'
import Image from 'next/image'
import styles from '../src/styles/CoursePage.module.css'
import LogoCard from './card/LogoCard'
import { AiOutlineCheck, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import ScrollBtn from './Start/ScrollBtn'
import { SlPieChart } from 'react-icons/sl'
import { CiGift } from 'react-icons/ci'
import EmptyBasket from './Start/EmptyBasket'
import AddToCart from './Start/AddToCart'
import PaypalPayment from './Start/PaypalPayment'
const SimplyChoose = ({ startMethodHide, start }) => {


    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])
    const [hideForm, setHideForm] = useState(false)

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

    console.log('selected', selected);

    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className='grid grid-cols-12 relative'>
                <div className={`md:col-span-6 col-span-12 md:pl-10 md:h-screen overflow-scroll ${styles.hidescrollBar}`}>
                    <div className='pt-6 md:block hidden'>
                        <LogoCard LogoImage={LogoImage} />
                    </div>

                    <div className='md:block hidden'>

                        <button className={`flex items-center space-x-1 ${styles.submitbtnbg} font-bold  text-white px-4 py-2 mt-4 rounded-3xl`} onClick={() => startMethodHide()}>
                            <BiArrowBack size={20} className="text-white " /><span className='text-sm '>lobby</span></button>
                    </div>
                    <div className={`flex flex-col justify-between ${selected === false && hideForm === false ? styles.show1 : styles.hide1} ${selected === false && hideForm ? styles.show1 : styles.hide1}  `}>
                        <div className='md:pt-32 pt-10 md:px-0 px-3 '>
                            <h2 className='md:text-6xl text-4xl'>simply choose.</h2>
                            <p className='md:text-2xl text-2xl py-5'>smile, you can’t make a bad choice.</p>
                        </div>
                    </div>
                    <div className={`2xl:mt-16 hidden md:grid grid-cols-12 ${selected === false && hideForm === false ? styles.hide1 : styles.fadeAnimation} ${selected === false ? styles.hide1 : styles.fadeAnimation} ${selected >= 0 && !hideForm ? styles.fadeAnimation : styles.hide1}`}>


                        <button className='absolute top-4 text-2xl left-[43%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>
                        <div className=' md:col-span-5 col-span-12'>
                            <div className={``}>
                                <ResearchComponent />
                            </div>
                        </div>
                        <div className=' md:col-span-7 col-span-12'>
                            {/* <div className={``}>
                                <CheckoutForm />
                            </div> */}

                            {/* <EmptyBasket /> */}
                            <AddToCart />



                        </div>
                    </div>
                </div>

                <div className={`md:col-span-6 col-span-12 `}>
                    <div className={`grid grid-cols-12 md:h-screen md:overflow-y-scroll no-scrollbar overflow-x-hidden relative ${start === true ? styles.gridMain : ""}`}>


                        <div className={` ${styles.mainDiv} bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray  md:p-10 p-5 md:mt-0 mt-5  flex flex-col justify-between  ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => handleClick(0,)} >
                            <div className='flex justify-between'>
                                <div className='flex justify-center items-center space-x-1'>
                                    <Image src="/images/gift.svg" width={25} height={25} alt='gift' />
                                    <div className='font-bold text-xl'>{data[0].duration}</div>
                                </div>
                            </div>
                            <div className={` ${styles.gift} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] `}>

                            </div>
                            <div className={`md:pt-0 pt-5 leading-10 font-[400] xl:text-[33px] lg:text-[20px]  md:text-[33px] text-[20px] ${styles.discriptionAnimation}`}>
                                {data[0].discription}
                            </div>
                            <div className={`absolute bottom-0 right-0  ${selectedArray[0] == 0 ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                            </div>

                        </div>

                        {data?.slice(1).map((item, index) => {

                            return (

                                <>
                                    <div key={index} className={`bg-transparent md:col-span-6 relative col-span-12 md:border border-t border-bordergray  md:p-10 p-5 md:mt-0 mt-5  flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => handleClick(index, item)}>
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center items-center space-x-1'>
                                                <MdOutlineWatchLater />
                                                <div>{item.duration}</div>
                                            </div>
                                            <div className={` relative `}>
                                                <div className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                    <div className='md:text-[24px] text-[20px] lg:text-[20px] xl:text-[24px] font-semibold text-white'>
                                                        ${item.price}
                                                    </div>
                                                </div>

                                                {selectedArray[index] !== index ? <div className=' absolute top-[80%] left-[20%] font-bold  text-[23px] text-[#FF5C00] '>
                                                    +add
                                                </div> : <div className=' flex absolute top-[80%] left-[0%] font-bold  text-[23px] text-[#FF5C00] '>
                                                    <div className='flex justify-center items-center'><AiOutlineCheck className='text-[#AC6CFF]' size={30} /></div>
                                                    <div className={`text-[#AC6CFF] text-[23px] font-semibold`}>
                                                        added
                                                    </div>
                                                </div>}



                                                <div className=' '>
                                                    {selectedArray[index] == index ? <Image src="/images/newPriceBg.svg" width={100} height={100} alt="prceBg" /> :
                                                        <Image src="/images/newPriceBg.svg" width={100} height={100} alt="prceBg" />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`md:pt-10 pt-5 leading-10 font-[400] font-Barlow xl:text-[33px] lg:text-[20px]  md:text-[33px] text-[20px] ${styles.discriptionAnimation}`}>
                                            {item.discription}
                                        </div>
                                        <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                            <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                        </div>

                                    </div>
                                </>
                            )

                        })}


                    </div>

                </div>
                <div className={` absolute -bottom-0 left-[75%] -translate-x-[51%]  z-[100]`}>
                    <ScrollBtn />
                </div>
            </div>
        </>
    )
}

export default SimplyChoose