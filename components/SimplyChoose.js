import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import CheckoutForm from './Start/CheckoutForm'
import ResearchComponent from './Start/ResearchComponent'
import Image from 'next/image'
import styles from '../src/styles/CoursePage.module.css'
import LogoCard from './card/LogoCard'
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import ScrollBtn from './Start/ScrollBtn'


const SimplyChoose = ({ startMethodHide }) => {


    const [selected, setSelected] = useState(false);
    const [selectedArray, setSelectedArray] = useState([])

    const [hideForm, setHideForm] = useState(false)

    const data = [
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },

    ]

    const handleClick = (index) => {
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

    }


    const stringData = selectedArray.map((item) => {
        return item;
    })

    console.log('stringData', stringData);



    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 pl-10'>
                    <div className='pt-5'>
                        <LogoCard LogoImage={LogoImage} />
                    </div>

                    <div className=''>

                        <button className={`flex items-center space-x-1 ${styles.submitbtnbg} font-bold  text-white px-4 py-2 rounded-3xl`} onClick={() => startMethodHide()}>
                            <BiArrowBack size={20} className="text-white " /><span className='text-sm '>lobby</span></button>
                    </div>
                    <div className={`flex flex-col justify-between ${selected === false && hideForm === false ? styles.show1 : styles.hide1} ${selected === false && hideForm ? styles.show1 : styles.hide1}  `}>



                        <div className='pt-32 '>
                            <h2 className='text-6xl'>simply choose.</h2>
                            <p className='text-2xl py-5'>smile, you can’t make a bad choice.</p>
                        </div>



                    </div>
                    <div className={`grid grid-cols-12 ${selected === false && hideForm === false ? styles.hide1 : styles.fadeAnimation} ${selected === false ? styles.hide1 : styles.fadeAnimation} ${selected >= 0 && !hideForm ? styles.fadeAnimation : styles.hide1}`}>


                        <button className='absolute top-4 text-2xl left-[43%]' onClick={() => functionHideForm()}><AiOutlineClose /></button>


                        <div className=' md:col-span-5 col-span-12'>
                            <div className={``}>
                                <ResearchComponent />
                            </div>
                        </div>
                        <div className=' md:col-span-7 col-span-12'>
                            <div className={``}>
                                <CheckoutForm />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-6 '>
                    <div className='grid grid-cols-12 h-screen overflow-y-scroll no-scrollbar overflow-x-hidden relative'>
                        {data?.map((item, index) => {

                            return (<div key={index} className={`bg-transparent md:col-span-6 relative col-span-12 border border-bordergray  p-10    flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover} ${selected === false ? styles.cardBackgroundHover : ""}  `} onClick={() => handleClick(index, item)}>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center items-center space-x-1'>
                                        <MdOutlineWatchLater />
                                        <div>{item.duration}</div>
                                    </div>
                                    <div className='text-[33px]'>
                                        ${item.price}
                                    </div>
                                </div>
                                <div className={`pt-24 leading-10 font-[400] text-[33px] ${styles.discriptionAnimation}`}>
                                    {item.discription}
                                </div>
                                <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} ${selected === false ? styles.hide1 : ""} `} >
                                    <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                </div>

                            </div>)

                        })}
                        <div className={` sticky bottom-0 left-[47%]   z-[100]`}>
                            <ScrollBtn />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SimplyChoose