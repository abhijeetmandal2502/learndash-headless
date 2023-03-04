import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { colourOptions } from "../components/Data.js";
import styles from '../src/styles/MenuComponent.module.css';
import Blog from '../components/Blog/Blog'
import { MdExpandLess } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router'

const BlogListing = () => {

    const router = useRouter();

    const [toggleOn, setToggleOn] = useState(false)
    const [currentData, setCurrentData] = useState(false);

    // manage state for next and previous

    const [next, setNext] = useState(currentData)

    const [back, setBack] = useState(currentData)


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

    const handleBackClick = () => {

        setCurrentData(null)

    }

    ///check box toggle 

    const handleClickTogle = () => {

        setToggleOn(!toggleOn)


    }

    const handleChange = (e) => {

        const { name, checked } = e.target;

        console.log('name', checked);

    }

    // handle privious and next 

    const handdleNext = (item, index) => {

        setNext(index + 1);

    }


    const handdlePrevious = (item, index) => {

        setBack(index - 1);
    }


    console.log('nextPrivius', next, back);

    return (
        <>
            {!currentData ? <div className='grid grid-cols-12 gap-4 '>
                <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>


                    {
                        blogData && blogData?.map((item, index) => {
                            return (
                                // <Link key={index} href={`/blog/${index + 1}`}>
                                <div key={index} className="mb-10 border-b border-bordergray md:max-w-[90%] ">
                                    <h2 className='text-white font-normal  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{item.title}</h2>
                                    <div className='flex  flex-wrap'>
                                        <div className='text-white pr-1 text-[22px] leading-[207%]'>{item.name}</div>
                                        <div className='text-gray text-[22px] leading-[207%]'>| {item.date}</div>
                                    </div>
                                    <p className='text-gray py-8 text-[18px] '>{item.discription}</p>


                                    <button className='text-white flex space-x-1 items-center border border-white rounded-3xl px-3 hover:border-black py-1 mt-2 mb-14 hover:bg-voilet transition-all ease-in-out duration-500'
                                        onClick={() => { handleClick(item, index) }}

                                    >
                                        <span className='md:text-[20px]'>read more</span>
                                        <BsArrowRightShort className='text-white' size={25} />
                                    </button>


                                </div>
                                //     </Link>
                            )
                        })
                    }


                </div>
                <div className=' bg-transparent md:col-span-3 col-span-12 '>

                    <div className='border border-white md:max-w-[70%] '>
                        <button className='text-white text-[20px] px-5 py-3 flex items-center space-x-5' type="btn" onClick={() => { handleClickTogle() }} ><div>blog categories</div> <div><MdExpandLess size={20} /></div> </button>
                        {colourOptions && colourOptions.map((item, index) => {

                            return (
                                <>
                                    {toggleOn && <div className=' px-5 py-2' key={index}>
                                        <input type="checkbox" name={item.label} onChange={handleChange} />
                                        <label className="text-white text-[18px] ml-2">{item.label}</label>
                                    </div>}
                                </>
                            )
                        })}
                    </div>

                </div>
            </div> : ""}


        </>
    )
}

export default BlogListing