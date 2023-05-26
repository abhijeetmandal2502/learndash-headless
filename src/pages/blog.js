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
import { getAllPostData } from '../../apis/AllPostApi'
import moment from 'moment/moment';


const BlogListing = (props) => {
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
    const allPost = props.allPostData

    //console.log('posts', allPost)

    return (
        <>
            <div className={` max-h-screen overflow-hidden `}>
                <div className="fixed top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in -z-10">
                    <Image
                        className={``}
                        src="/images/blog-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="bgblog"
                    />
                </div>

                <div className='grid grid-cols-12 '>
                    <div className={`col-span-12 md:col-span-11 md:pl-[7%] max-h-screen ${styles.fadeAnimation} ${styles.leftRightAnimation} ${styles.bgMenuMobblog}`}>
                        <div className={`flex justify-between items-center space-x-5  cursor-pointer md:bg-transparent  md:px-0 px-3 md:pb-0 pb-5 py-4 md:py-0`}>
                            <div className='hidden md:block'>
                                <LogoCard LogoImage={LogoImage} />
                            </div>

                            <div className='block md:hidden'>
                                <Link href="/">
                                    <Image src={`${LogoImage}`} height='200' width='150' alt='logo' className='' />
                                </Link>
                            </div>
                            <div className='flex items-center justify-center md:hidden'
                                onClick={() => { HandleCloseBtn() }}>
                                <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                    <p className='font-semibold text-white'>Close </p>
                                    <AiOutlineClose size={20} className="text-white 3xl:w-10 3xl:h-10" />
                                </div>
                            </div>
                        </div>

                        <Link href="/">
                            <button className={`  hidden  md:flex items-center space-x-1 bg-dakgray text-white px-3  py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`}  >
                                <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='font-semibold minismallf '>lobby</span></button>
                        </Link>

                        {/* for mobile device */}
                        <div className='flex justify-center px-3 mt-5 md:hidden md:mt-0 md:px-0'>
                            <div className='w-full pb-2 border border-white ' >
                                <button className={`text-white mediumf  px-5 md:py-3 py-1 flex items-center space-x-24 2xl:space-x-6`} type="btn" onClick={() => { handleClickTogle() }} ><div className=''>blog categories</div> <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff}`}><MdKeyboardArrowDown size={20} className="" /></div> </button>
                                {colourOptions?.map((item, index) => {

                                    return (
                                        <>
                                            {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                                <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-center bg-no-repeat bg-contain border-2 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-voilet checked:border-white focus:outline-none" type="checkbox" name={item.label} onChange={handleChange} id="flexCheckDefault" />
                                                <label className="text-gray mediumf ml-0.2">{item.label}</label>
                                            </div>}
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                        {!currentData ? <div className='grid grid-cols-12 gap-4 px-3 md:px-0'>
                            <div className={`bg-transparent md:pb-40  md:col-span-8 lg:col-span-8 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>

                                {
                                    allPost?.map((item, index) => {
                                        return (
                                            // <Link key={index} href={`/blog/${index + 1}`}>
                                            <div key={index} className={`mb-10 md:mt-0 mt-5 border-b border-bordergray md:max-w-[90%] lg:max-w-[100%] ${styles.blogMain}`}>
                                                <h2 className='text-white font-normal fourxllargef {
 md:leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item?.title.rendered}</h2>
                                                <div className='flex flex-wrap'>
                                                    <div className='text-white pr-1 md:py-2 smallf  leading-[207%]'>{item?.name}</div>
                                                    <div className='text-gray md:py-2 mediumf  leading-[207%]'>| {moment(item?.date).format("MMMM  DD YYYY")}</div>
                                                </div>
                                                <div className='py-2 tracking-wider text-gray md:py-5 mediumf ' dangerouslySetInnerHTML={{ __html: item?.content.rendered }}>
                                                </div>


                                                <Link href={`blog/${item?.slug}`} className='text-white flex space-x-1 items-center border border-white rounded-3xl px-3 max-w-[155px]  hover:border-black py-1 mt-2 mb-14 hover:bg-voilet transition-all ease-in-out duration-500'
                                                >
                                                    <span className='ml-1 mediumf'>read more</span>
                                                    <BsArrowRightShort className='text-white ' size={25} />
                                                </Link>
                                            </div>
                                            //     </Link>
                                        )
                                    })
                                }


                            </div>
                            <div className='hidden col-span-12 mr-10 bg-transparent md:col-span-4 lg:col-span-4 md:block'>

                                <div className='flex justify-center '>
                                    <div className='w-full pb-2 border border-white max-w-10 ' >
                                        <div className={`text-white mediumf  px-5 py-3 flex items-center justify-between `} type="btn" onClick={() => { handleClickTogle() }} >
                                            <div className='mediumf'>blog categories</div>
                                            <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff} mr-3`}>
                                                <MdKeyboardArrowDown size={20} className="" />
                                            </div>
                                        </div>
                                        {colourOptions?.map((item, index) => {

                                            return (
                                                <>
                                                    {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                                        <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border-2 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-voilet checked:border-white focus:outline-none" type="checkbox" name={item.label} onChange={handleChange} id="flexCheckDefault" />
                                                        <label className="text-gray mediumf ml-0.2">{item.label}</label>
                                                    </div>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>


                        </div> : ""}
                    </div>
                    <div className='relative hidden max-h-screen col-span-12 border-l border-white md:col-span-1 md:block'>
                        <div className=''>
                            <div className='cursor-pointer '>

                                <div className='   absolute top-[5%] left-1/2 -translate-x-1/2  '
                                    onClick={() => { HandleCloseBtn() }}>
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold text-white mediumf'>Close </p>
                                        <AiOutlineClose size={20} className="text-white " />
                                    </div>
                                </div>

                                <div className=' absolute bottom-[5%] left-1/2 -translate-x-1/2'>
                                    <MusicCard textColor={textColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` absolute bottom-5 left-5 z-[100]  md:flex hidden justify-center items-center`}>
                    <FiArrowDown size={25} className={`text-white  ${stylesScrollBtn.UpDownAnimation} `} />

                </div>
            </div>

        </>
    )
}

export default BlogListing

// call blog api here

export async function getServerSideProps() {


    const [allPostData,] = await Promise.all([
        getAllPostData(),

    ])


    return {
        props: {
            allPostData
        }
    }
}






