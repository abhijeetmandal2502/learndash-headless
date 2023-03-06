import Image from 'next/image'
import React from 'react'
import styles from '../../../src/styles/MenuComponent.module.css';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { TfiMenuAlt } from 'react-icons/tfi'
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import MusicCard from 'components/card/MusicCard';
import LogoCard from 'components/card/LogoCard';
import { BiArrowBack } from 'react-icons/bi';

const Blog = ({ currentData, click, }) => {

    const router = useRouter()

    const blogData = [

        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",

        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",
            image: "/images/blogBanner.png",
        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            subHeaderTitle: 'blog subheader example',
            subDiscription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling.",
            image: "/images/blogBanner.png",
            image: "/images/blogBanner.png",
        },
    ]
    const textColor = "text-white"

    const LogoImage = "/images/WhiteLogo.svg";

    const HandlebackClick = () => {

        router.push({
            pathname: '/',
            query: { active: 'blog' }
        })
    }

    const HandleCloseBtn = () => {

        router.push({
            pathname: '/',
            query: { active: 'blog' }
        })

    }


    return (
        <>
            <div className={`${styles.blogBackground} max-h-screen overflow-hidden `}>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-11 ml-20 max-h-screen '>
                        <div className={`flex justify-between items-center space-x-5 pt-10 cursor-pointer  `}>
                            <LogoCard LogoImage={LogoImage} />
                        </div>

                        <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 `} onClick={() => { HideMenuMethod(), router.push('/') }} >
                            <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button>

                        {blogData ? <div className='grid grid-cols-12 gap-4 max-h-screen pt-10  '>
                            <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar} `}>

                                {blogData?.map((item, key) => {

                                    return (
                                        <div key={key} className="mb-10 border-b border-bordergray md:max-w-[90%] ">
                                            <h2 className='text-white font-normal  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                            <div className='flex  flex-wrap'>
                                                <div className='text-white pr-1 text-[22px] leading-[207%]'>{item.name}</div>
                                                <div className='text-gray text-[22px] leading-[207%]'>| {item.date}</div>
                                            </div>
                                            <p className='text-gray py-8 text-[18px] '>{item.discription}</p>

                                            <Image src="/images/blogBanner1.png" width="500" height="450" className="w-[700px] h-[350px]" alt="Banner Image" />

                                            <h4 className='text-white font-normal py-3 text-[22px] tracking-wide'>{item.subHeaderTitle}</h4>

                                            <p className='text-gray py-8 text-[18px] '>{item.subDiscription}</p>

                                        </div>
                                    )

                                })}
                            </div>
                            <div className=' bg-transparent md:col-span-3 col-span-12'>

                                <button className='text-white bg-[#3A3A3A] py-1 px-3 rounded-3xl flex space-x-5 items-center hover:bg-voilet transition-all ease-in-out duration-500 ' onClick={() => { HandlebackClick() }} > <TfiMenuAlt size={25} /> <div className='text-[24px] font-bold'>view all posts</div></button>
                                <div className='flex pt-7  space-x-12'>
                                    <button onClick={() => { }} className='text-white flex space-x-2 items-center py-1 px-2 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={20} /> <div className='text-[20px]'> back</div></button>
                                    <button onClick={() => { }} className='text-white flex space-x-2 items-center py-1 px-2 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <div className='text-[20px]' >next</div> <HiOutlineArrowSmRight size={20} /> </button>
                                </div>

                            </div>
                        </div> : ""}
                    </div>
                    <div className='col-span-12 md:col-span-1 relative border-l border-white max-h-screen '>
                        <div className=''>
                            <div className=' cursor-pointer'>
                                <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                                    onClick={() => { HandleCloseBtn() }}>
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold text-white'>Close </p>

                                        <AiOutlineClose size={20} className="text-white" />

                                    </div>
                                </div>
                                <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                                    <MusicCard textColor={textColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog