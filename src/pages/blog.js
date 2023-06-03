import React, { useEffect, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
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
import { getAllPostData, getCourses } from '../../apis/AllPostApi'
import moment from 'moment/moment';
import HTMLReactParser from 'html-react-parser';
import useSWR from 'swr'
import { fetcher } from '../../utils/swrFetcher'


const BlogListing = (props) => {
    const router = useRouter();
    const [toggleOn, setToggleOn] = useState(false)
    const [postByCategories, setpostByCategories] = useState([])



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
        const data = e.target.value;
        setpostByCategories([...data]);
    }
    const allPost = props.allPostData

    // categories fatching 

    const { data: postCategoriesData, error, isLoading } = useSWR(`${process.env.API_BASE_URL}/wp/v2/categories`, fetcher);



    console.log('Catg', postByCategories)


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
                    <div className={`col-span-12 md:col-span-11 md:pl-[7%] max-h-screen ${styles.onlyfadeIn} ${styles.leftRightAnimation} ${styles.bgMenuMobblog}`}>
                        <div className={`flex justify-between items-center space-x-5   md:bg-transparent  md:px-0 px-3 md:pb-0 pb-5 py-4 md:py-0`}>
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
                                    <p className='font-semibold text-white minismallf'>Close </p>
                                    <AiOutlineClose className="text-white font-semibold minismallf" />
                                </div>
                            </div>
                        </div>

                        <div className='w-max  '>
                            <Link href="/" >
                                <button className={`  hidden  md:flex items-center  space-x-1 bg-dakgray text-white px-[30%] py-2  hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold  rounded-3xl mt-4`}  >
                                    <BiArrowBack className="text-white font-semibold minismallf" /><span className='font-semibold minismallf '>lobby</span></button>
                            </Link>
                        </div>



                        {/* for mobile device */}
                        <div className='flex justify-center px-5 mt-5 md:hidden md:mt-0 md:px-0'>
                            <div className=' pb-2 border border-white w-max ' >
                                <div className={`text-white mediumf  px-5 py-3 flex items-center justify-between space-x-10 `} onClick={() => { handleClickTogle() }} >
                                    <div className='mediumf'>blog categories</div>
                                    <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff}`}>
                                        <MdKeyboardArrowDown size={20} className="" />
                                    </div>
                                </div>

                                {postCategoriesData?.map((item, index) => {
                                    return (
                                        <>
                                            {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                                <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border-2 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-voilet checked:border-white focus:outline-none" type="checkbox" value={item.id} onChange={(e) => handleChange(e)} />
                                                <label className="text-gray mediumf ml-0.2">{item.name}</label>
                                            </div>}


                                        </>
                                    )
                                })}

                            </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4 px-5 mt-2 md:pt-10 md:px-0'>
                            <div className={`bg-transparent md:pb-40  md:col-span-8 lg:col-span-8 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>

                                {
                                    allPost?.map((item, index) => {
                                        return (
                                            // <Link key={index} href={`/blog/${index + 1}`}>
                                            <div key={index} className={`mb-10 md:mt-0 mt-5 border-b border-bordergray md:max-w-[90%] lg:max-w-[100%] ${styles.blogMain}`}>
                                                <Link href={`blog/${item?.slug}`}>
                                                    <h2 className='text-white font-normal cursor-pointer fourxllargef {
 md:leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item?.title.rendered}
                                                    </h2>
                                                </Link>

                                                <div className='flex justify-start  items-center flex-wrap'>
                                                    <div className='text-white pr-3 md:py-2 smallf font-[700] leading-[207%]'>Laura Allen</div>
                                                    <div className='text-white md:py-2 mediumf   leading-[207%]'>

                                                        |
                                                        <span className='pl-2 text-lightgray font-[300]  leading-[120%]'>{moment(item?.date).format("MMMM  DD YYYY")}
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className={`${styles.lineClampContent} text-lightgray max-h-[118px] overflow-hidden`} >
                                                    {HTMLReactParser(item?.content.rendered)}
                                                </div>

                                                {/* <div className='py-2 tracking-wider text-gray md:py-5 mediumf' >
                                                </div> */}

                                                <Link href={`blog/${item?.slug}`} className='text-white flex space-x-1 justify-center items-center border border-white rounded-3xl px-3 max-w-[155px]  hover:border-black py-1 mt-2 mb-14 hover:bg-voilet transition-all ease-in-out duration-500'
                                                >
                                                    <span className='ml-1 font-[600]   mediumf'>read more</span>
                                                    <BsArrowRightShort className='text-white font-[600]  mediumf' />
                                                </Link>
                                            </div>
                                            //     </Link>
                                        )
                                    })
                                }


                            </div>
                            <div className='hidden col-span-12 mr-10 bg-transparent md:col-span-4 lg:col-span-4 md:block'>

                                <div className='flex justify-end '>
                                    <div className=' pb-2 border border-white w-max ' >
                                        <div className={`text-white mediumf  px-5 py-3 flex items-center justify-between space-x-10 `} onClick={() => { handleClickTogle() }} >
                                            <div className='mediumf'>blog categories</div>
                                            <div className={`${toggleOn ? styles.toggleAnimation : styles.toggleAnimationOff}`}>
                                                <MdKeyboardArrowDown size={20} className="" />
                                            </div>
                                        </div>

                                        {postCategoriesData?.map((item, index) => {
                                            return (
                                                <>
                                                    {toggleOn && <div className={`px-5 py-0.5 ${toggleOn === true ? styles.selectOptionOpen : ""} ${toggleOn === false ? styles.selectOptionClose : ""}`} key={index}>

                                                        <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border-2 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-voilet checked:border-white focus:outline-none" type="checkbox" value={item.id} onChange={(e) => handleChange(e)} />
                                                        <label className="text-gray mediumf ml-0.2">{item.name}</label>
                                                    </div>}


                                                </>
                                            )
                                        })}

                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                    <div className='relative hidden max-h-screen col-span-12 border-l border-white md:col-span-1 md:block'>
                        <div className=''>
                            <div className='cursor-pointer '>

                                <div className='   absolute top-[5%] left-1/2 -translate-x-1/2  '
                                    onClick={() => { HandleCloseBtn() }}>
                                    <div className={`flex space-x-3 bg-transparent items-center [&>*]:hover:text-voilet [&>*]:transition-all [&>*]:ease-in-out  [&>*]:duration-1000 `} >
                                        <p className='font-semibold text-white largef'>Close </p>
                                        <AiOutlineClose className="text-white largef " />
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
    const [allPostData, courses] = await Promise.all([
        getAllPostData(),

    ])
    return {
        props: {
            allPostData,


        }
    }
}





