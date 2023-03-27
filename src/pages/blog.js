import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { colourOptions } from "../../components/Data";
import styles from '../../src/styles/MenuComponent.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router'
import LogoCard from 'components/card/LogoCard';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import MusicCard from 'components/card/MusicCard';
import { FiArrowDown } from 'react-icons/fi';
import stylesScrollBtn from '../../components/Start/Start.module.css'
import Link from 'next/link';

import Image from 'next/image'

const BlogListing = () => {

    const router = useRouter();
    const [toggleOn, setToggleOn] = useState(false)
    const [currentData, setCurrentData] = useState(false);

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
    //handle click blog listing

    const handleClick = (item, index) => {

        setCurrentData(item, index)
        router.push('/blog/slug')

    }

    const HandleCloseBtn = () => {

        router.push('/')

    }

    const textColor = "text-white"
    const LogoImage = "/images/WhiteLogo.svg";

    ///check box toggle 

    const handleClickTogle = () => {

        setToggleOn(!toggleOn)
    }

    const handleChange = (e) => {

        const { name, checked } = e.target;
    }

    return (
        <>
            <div className={` max-h-screen overflow-hidden `}>
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

                        <Link href="/">
                            <button className={`flex items-center space-x-1 bg-dakgray text-white px-3 3xl:px-3 py-2 3xl:py-2.5  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4 3xl:-mt-10 `}  >
                                <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='text-sm font-semibold 3xl:text-2xl'>lobby</span></button>
                        </Link>

                        {!currentData ? <div className='grid grid-cols-12 gap-4 '>
                            <div className={`bg-transparent md:pb-40  md:col-span-8 lg:col-span-8 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>

                                {
                                    blogData && blogData?.map((item, index) => {
                                        return (
                                            // <Link key={index} href={`/blog/${index + 1}`}>
                                            <div key={index} className="mb-10 border-b border-bordergray md:max-w-[90%] lg:max-w-[100%] ">
                                                <h2 className='text-white font-normal lg:text-[49px] 3xl:text-[60px] 4xl:text-[70px] md:text-[35px]  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                                <div className='flex  flex-wrap'>
                                                    <div className='text-white pr-1 text-[22px] 3xl:text-[32px] 4xl:text-[42px] leading-[207%]'>{item.name}</div>
                                                    <div className='text-gray text-[22px] 3xl:text-[32px] 4xl:text-[42px] leading-[207%]'>| {item.date}</div>
                                                </div>
                                                <p className='text-gray py-8  text-[20px] 3xl:text-[30px] 4xl:text-[40px] lg:text-[20px] md:text-[18px] tracking-wider '>{item.discription}</p>


                                                <button className='text-white flex space-x-1 items-center border border-white rounded-3xl px-3 3xl:rounded-3xl hover:border-black py-1 mt-2 mb-14 hover:bg-voilet transition-all ease-in-out duration-500'
                                                    onClick={() => { handleClick(item, index) }}

                                                >
                                                    <span className='md:text-[20px] 3xl:text-[30px] ml-1'>read more</span>
                                                    <BsArrowRightShort className='text-white 3xl:w-12 3xl:h-12' size={25} />
                                                </button>
                                            </div>
                                            //     </Link>
                                        )
                                    })
                                }


                            </div>
                            <div className=' bg-transparent md:col-span-4 lg:col-span-4  col-span-12 mr-10'>

                                <div className='flex justify-center'>
                                    <div className='border  border-white w-full 2xl:max-w-[270px] 3xl:max-w-[350px]   pb-2 ' >
                                        <button className={`text-white text-[18px] 2xl:text-[20px] 3xl:text-[30px] px-5 py-3 flex items-center space-x-3 2xl:space-x-6`} type="btn" onClick={() => { handleClickTogle() }} ><div className='2xl:text-[24px] 3xl:text-[35px] '>blog categories</div> <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff}`}><MdKeyboardArrowDown size={20} className="3xl:w-10 3xl:h-10" /></div> </button>
                                        {colourOptions?.map((item, index) => {

                                            return (
                                                <>
                                                    {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                                        <input className="form-check-input appearance-none h-4 3xl:h-6 3xl:w-6 w-4  border-2   rounded-sm bg-white checked:bg-voilet checked:border-white focus:outline-none transition duration-200 mt-1 3xl:mt-2.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name={item.label} onChange={handleChange} id="flexCheckDefault" />
                                                        <label className="text-gray text-[14px] 2xl:text-[18px] 3xl:2xl:text-[30px]  ml-0.2">{item.label}</label>
                                                    </div>}
                                                </>
                                            )
                                        })}
                                    </div>
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
                                        <p className='font-semibold 3xl:text-[25px] text-white'>Close </p>

                                        <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />

                                    </div>
                                </div>

                                <div className=' absolute bottom-5 left-1/2 -translate-x-1/2'>
                                    <MusicCard textColor={textColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` absolute bottom-5 left-5 z-[100]  flex justify-center items-center`}>
                    <FiArrowDown size={25} className={`text-white 3xl:w-12 3xl:h-12 ${stylesScrollBtn.UpDownAnimation} `} />

                </div>
            </div>

        </>
    )
}

export default BlogListing 