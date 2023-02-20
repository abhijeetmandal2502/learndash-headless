import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineWatchLater } from 'react-icons/md'
import CheckoutForm from './Start/CheckoutForm'
import ResearchComponent from './Start/ResearchComponent'
import Image from 'next/image'
import styles from '../src/styles/CoursePage.module.css'
import LogoCard from './card/LogoCard'
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'


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
    };


    console.log('selectedArray', selected);
    const LogoImage = "/images/Logo.svg"
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 pl-10'>
                    <div className='pt-5'>
                        <LogoCard LogoImage={LogoImage} />
                    </div>
                    <div className={`flex flex-col justify-between ${selected !== false ? styles.hide1 : styles.fadeAnimation} ${hideForm === true ? styles.show1 : styles.fadeAnimation} `}>
                        <div className=''>

                            <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl ' onClick={() => startMethodHide()}>
                                <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm'>lobby</span></button>
                        </div>


                        <div className='pt-32 '>
                            <h2 className='text-6xl'>simply choose.</h2>
                            <p className='text-2xl py-5'>smile, you can’t make a bad choice.</p>
                        </div>



                    </div>
                    <div className={`grid grid-cols-12 ${selected === false ? styles.hide1 : styles.fadeAnimation} ${hideForm === true ? styles.hide1 : ""}`}>


                        <button className='absolute top-4 text-2xl left-[43%]' onClick={() => setHideForm(true)}><AiOutlineClose /></button>


                        <div className=' md:col-span-5 col-span-12'>
                            <ResearchComponent />
                        </div>
                        <div className=' md:col-span-7 col-span-12'>
                            <CheckoutForm />
                        </div>
                    </div>
                </div>

                <div className='col-span-6'>
                    <div className='grid grid-cols-12 h-screen overflow-y-scroll no-scrollbar overflow-x-hidden '>
                        {data?.map((item, index) => {

                            return (<div key={index} className={`bg-transparent md:col-span-6 relative col-span-12 border border-bordergray  p-10    flex flex-col justify-between ${selectedArray[index] == index ? styles.cardBackground : styles.cardBackgroundHover}`} onClick={() => handleClick(index, item)}>
                                <div className='flex justify-between'>
                                    <div className='flex justify-center items-center space-x-1'>
                                        <MdOutlineWatchLater />
                                        <div>{item.duration}</div>
                                    </div>
                                    <div className='text-[33px]'>
                                        ${item.price}
                                    </div>
                                </div>
                                <div className='pt-24 text-[33px]'>
                                    {item.discription}
                                </div>
                                <div className={`absolute bottom-0 right-0  ${selectedArray[index] == index ? 'block' : styles.hide1} `} >
                                    <Image src="/images/rectangle .png" height={20} width={20} alt="ncbtmb" />
                                </div>

                            </div>)

                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SimplyChoose