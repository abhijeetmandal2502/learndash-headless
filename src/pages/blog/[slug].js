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
                        <div className={`flex justify-between items-center space-x-5 md:pt-10 cursor-pointer md:bg-transparent bg-black md:px-0 px-3 md:pb-0 pb-5 `}>
                            <LogoCard LogoImage={LogoImage} />
                            <Link href="/blog">
                                <div className='flex md:hidden items-center justify-center mt-5    '
                                >
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold 3xl:text-[25px] text-white'>Close </p>

                                        <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />

                                    </div>
                                </div>
                            </Link>
                        </div>


                        {/* view all post button for mobile  */}
                        <div className=' md:mr-5 flex md:hidden items-center justify-between px-3 pt-5'>

                            <Link href="/blog">
                                <button className='text-white bg-[#3A3A3A] py-3 px-6  rounded-3xl flex space-x-3 items-center hover:bg-voilet transition-all ease-in-out duration-500 text-[10px] ' onClick={() => { }} > <TfiMenuAlt size={14} /> <div className=' font-[600]'>view all posts</div></button>
                            </Link>
                            <div className='flex space-x-2'>
                                <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={15} className='' /> <div className='text-[14px] pr-1 '> back</div></button>
                                <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5  border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <div className='text-[14px]  pl-1' >next</div> <HiOutlineArrowSmRight size={15} className='' /> </button>
                            </div>

                        </div>



                        <button className={`md:flex hidden items-center space-x-1 bg-dakgray text-white px-3 3xl:px-3 py-2 3xl:py-2.5 4xl:px-5  4xl:py-4  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 3xl:-mt-10 `} onClick={() => { handlelobby() }} >
                            <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='text-sm font-semibold 3xl:text-2xl 4xl:text-3xl'>lobby</span></button>

                        {blogData ? <div className='grid grid-cols-12 gap-4 max-h-screen md:pt-10 mt-2 md:px-0 px-3'>
                            <div className={`bg-transparent md:pb-40  md:col-span-8 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar} `}>

                                {blogData?.map((item, key) => {

                                    return (
                                        <div key={key} className="mb-10 border-b border-bordergray md:max-w-[85%] ">
                                            <h2 className='text-white font-normal  text-[30px] 2xl:text-[49px] 3xl:text-[60px] 4xl:text-[70px]  md:text-[35px] md:leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                            <div className='flex  flex-wrap'>
                                                <div className='text-white pr-1 md:text-[22px] text-[16px] 3xl:text-[32px] 4xl:text-[42px] leading-[207%]'>{item.name}</div>
                                                <div className='text-gray md:text-[22px] text-[16px] 3xl:text-[32px] 4xl:text-[42px] leading-[207%]'>| {item.date}</div>
                                            </div>
                                            <p className='text-gray md:py-8 py-4 text-[14px] lg:text-[20px] md:text-[18px] 3xl:text-[30px] 4xl:text-[40px] tracking-wider '>{item.discription}</p>

                                            <Image src="/images/blogBanner1.png" width="800" height="450" className="md:w-[850px] md:h-[350px] w-[500px] h-[250px]" alt="Banner Image" />

                                            <h4 className='text-white font-normal py-3 pt-10 md:text-[22px] text-[19px] 3xl:text-[32px] 4xl:text-[42px tracking-wide'>{item.subHeaderTitle}</h4>

                                            <p className='text-gray md:py-8  md:text-[22px] text-[14px] 3xl:text-[30px] 4xl:text-[40px] tracking-wider '>{item.subDiscription}</p>

                                        </div>
                                    )

                                })}
                            </div>
                            <div className='flex bg-transparent md:col-span-4 col-span-12 justify-center'>
                                <div className=' md:mr-5'>

                                    <Link href="/blog">
                                        <button className='text-white bg-[#3A3A3A] py-3 px-6 lg:px-7 rounded-3xl flex space-x-3 items-center hover:bg-voilet transition-all ease-in-out duration-500 ' onClick={() => { }} > <TfiMenuAlt size={25} /> <div className='2xl:text-[18px] lg:text-[14px] 3xl:text-[30px] font-[600]'>view all posts</div></button>
                                    </Link>
                                    <div className='flex pt-7  md:space-x-4 2xl:space-x-10'>
                                        <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5 3xl:px-3 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={20} className='3xl:w-8 3xl:h-8' /> <div className='text-[18px] pr-1 3xl:text-[30px]'> back</div></button>
                                        <button onClick={() => { }} className='text-white flex space-x-1 items-center py-1.5 px-2.5 3xl:px-3 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <div className='text-[18px] 3xl:text-[30px] pl-1' >next</div> <HiOutlineArrowSmRight size={20} className='3xl:w-8 3xl:h-8' /> </button>
                                    </div>

                                </div>
                            </div>
                        </div> : <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full ${styles.blogBackground}`}> loading...</div>}
                    </div>
                    <div className='col-span-12 md:col-span-1 relative border-l border-white max-h-screen md:block hidden '>
                        <div className=''>
                            <div className=' cursor-pointer'>
                                <Link href="/blog">
                                    <div className='flex items-center justify-center   absolute top-5 left-1/2 -translate-x-1/2  '
                                        onClick={() => { }}>
                                        <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                            <p className='font-semibold text-white 3xl:text-[25px]'>Close </p>

                                            <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />

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
                <div className={` absolute bottom-5 left-5 z-[100]  md:flex hidden justify-center items-center`}>
                    <FiArrowDown size={25} className={`text-white 3xl:w-12 3xl:h-12 ${stylesScrollBtn.UpDownAnimation} `} />

                </div>
            </div>
        </>
    )
}

export default Blog