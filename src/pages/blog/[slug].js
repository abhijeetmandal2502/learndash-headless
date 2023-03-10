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
import { FiArrowDown } from 'react-icons/fi';
import stylesScrollBtn from '../../../components/Start/Start.module.css'

import Link from 'next/link'

const Blog = () => {

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

    // const HandlebackClick = () => {

    //     router.push({
    //         pathname: '/',
    //         query: { active: 'blog' }
    //     })
    // }

    // const HandleCloseBtn = () => {

    //     router.push({
    //         pathname: '/',
    //         query: { active: 'blog' }
    //     })

    // }

    const handlelobby = () => {

        router.replace('/')
    }


    return (
        <>
            <div className={` relative   h-screen overflow-hidden  w-screen`}>

                <div className="absolute top-0 left-0 w-screen h-screen -z-10">
                    <Image
                        src="/images/blog-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className='grid grid-cols-12'>
                    <div className={`col-span-12 md:col-span-11 2xl:ml-20 md:ml-16 max-h-screen ${styles.fadeAnimation}`}>
                        <div className={`flex justify-between items-center space-x-5 pt-10 cursor-pointer  `}>
                            <LogoCard LogoImage={LogoImage} />
                        </div>

                        <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 py-2 hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 `} onClick={() => { handlelobby() }} >
                            <BiArrowBack size={20} className="text-white" /><span className='text-sm font-semibold'>lobby</span></button>

                        {blogData ? <div className='grid grid-cols-12 gap-4 max-h-screen pt-10'>
                            <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar} `}>

                                {blogData?.map((item, key) => {

                                    return (
                                        <div key={key} className="mb-10 border-b border-bordergray md:max-w-[85%] ">
                                            <h2 className='text-white font-normal  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                            <div className='flex  flex-wrap'>
                                                <div className='text-white pr-1 text-[22px] leading-[207%]'>{item.name}</div>
                                                <div className='text-gray text-[22px] leading-[207%]'>| {item.date}</div>
                                            </div>
                                            <p className='text-gray py-8 text-[20px] tracking-wider '>{item.discription}</p>

                                            <Image src="/images/blogBanner1.png" width="800" height="450" className="w-[850px] h-[350px]" alt="Banner Image" />

                                            <h4 className='text-white font-normal py-3 pt-10 text-[22px] tracking-wide'>{item.subHeaderTitle}</h4>

                                            <p className='text-gray py-8 text-[20px] tracking-wider '>{item.subDiscription}</p>

                                        </div>
                                    )

                                })}
                            </div>
                            <div className='flex bg-transparent md:col-span-3 col-span-12 justify-center'>
                                <div className=' md:mr-5'>

                                    <Link href="/blog">
                                        <button className='text-white bg-[#3A3A3A] py-3 px-6 rounded-3xl flex space-x-3 items-center hover:bg-voilet transition-all ease-in-out duration-500 ' onClick={() => { }} > <TfiMenuAlt size={25} /> <div className='text-[18px] font-[600]'>view all posts</div></button>
                                    </Link>
                                    <div className='flex pt-7  space-x-7'>
                                        <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={20} /> <div className='text-[18px] pr-1'> back</div></button>
                                        <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <div className='text-[18px] pl-1' >next</div> <HiOutlineArrowSmRight size={20} /> </button>
                                    </div>

                                </div>
                            </div>
                        </div> : <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full ${styles.blogBackground}`}> loading...</div>}
                    </div>
                    <div className='col-span-12 md:col-span-1 relative border-l border-white max-h-screen '>
                        <div className=''>
                            <div className=' cursor-pointer'>
                                <Link href="/blog">
                                    <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                                        onClick={() => { }}>
                                        <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                            <p className='font-semibold text-white'>Close </p>

                                            <AiOutlineClose size={20} className="text-white" />

                                        </div>
                                    </div>
                                </Link>
                                <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                                    <MusicCard textColor={textColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                    <FiArrowDown size={25} className={`text-white ${stylesScrollBtn.UpDownAnimation} `} />

                </div>
            </div>
        </>
    )
}

export default Blog