import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { colourOptions } from "../components/Data.js";
import styles from '../src/styles/MenuComponent.module.css';
import Blog from '../components/Blog/Blog'
import { MdExpandLess } from 'react-icons/md';

const BlogListing = () => {

    const [toggleOn, setToggleOn] = useState(false)

    const [currentData, setCurrentData] = useState(true);




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


    //     return (
    //         <div>
    //             <components.Option {...props} >
    //                 <input

    //                     type="checkbox"
    //                     checked={props.isSelected}
    //                     onChange={() => null}
    //                 />{" "}
    //                 <label>{props.label}</label>



    //             </components.Option>
    //         </div>
    //     );
    // };

    // const customStyles = {
    //     control: (base, state) => ({
    //         ...base,

    //         background: "#0000",
    //         // match with the menu
    //         borderRadius: state.isFocused ? "3px 3px 0 0" : 0,
    //         // Overwrittes the different states of border
    //         borderColor: state.isFocused ? "white" : "white",
    //         // Removes weird border around container
    //         boxShadow: state.isFocused ? null : null,
    //         "&:hover": {
    //             // Overwrittes the different states of border
    //             borderColor: state.isFocused ? "white" : "white"
    //         }


    //     }),
    //     menu: base => ({
    //         ...base,
    //         // override border radius to match the box
    //         borderRadius: 0,
    //         // kill the gap
    //         marginTop: 0,
    //         background: "#00000"
    //     }),
    //     menuList: base => ({
    //         ...base,
    //         // kill the white space on first and last option
    //         padding: 0,
    //         background: "#00000"

    //     }),
    //     // options: base => ({
    //     //     ...base,
    //     //     background: "#00000"

    //     // }),


    //     dropdownIndicator: (provided, state) => ({
    //         ...provided,
    //         transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    //         transition: state.selectProps.menuIsOpen && "all ease-in-out 1s",
    //         transition: state.selectProps.onMenuClose && "all ease-in-out 1s"
    //     }),



    // };

    //handle click blog listing

    const handleClick = (item, index) => {

        setCurrentData(item)

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

    return (
        <>
            {!currentData ? <div className='grid grid-cols-12 gap-4 '>
                <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar}`}>
                    {
                        blogData && blogData?.map((item, index) => {
                            return (<div key={index} className="mb-10 border-b border-bordergray md:max-w-[90%] ">
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


                            </div>)
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
            </div> : <Blog currentData={currentData} click={handleBackClick} />}


        </>
    )
}

export default BlogListing