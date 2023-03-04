import Image from 'next/image'
import React from 'react'
import styles from '../../src/styles/MenuComponent.module.css';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { TfiMenuAlt } from 'react-icons/tfi'
import { useRouter } from 'next/router';

const Blog = ({ currentData, click, }) => {

    const router = useRouter()

    return (
        <>
            {currentData ? <div className='grid grid-cols-12 gap-4  '>
                <div className={`bg-transparent md:pb-40  md:col-span-9 col-span-12 h-screen overflow-y-scroll ${styles.hidescrollBar} `}>

                    <div className="mb-10 border-b border-bordergray md:max-w-[90%] ">
                        <h2 className='text-white font-normal  text-[49px] leading-[207%] tracking-wide hover:text-voilet transition-all ease-in-out duration-500'>{currentData.title}</h2>
                        <div className='flex  flex-wrap'>
                            <div className='text-white pr-1 text-[22px] leading-[207%]'>{currentData.name}</div>
                            <div className='text-gray text-[22px] leading-[207%]'>| {currentData.date}</div>
                        </div>
                        <p className='text-gray py-8 text-[18px] '>{currentData.discription}</p>

                        <Image src="/images/blogBanner1.png" width="500" height="450" className="w-[700px] h-[350px]" alt="Banner Image" />

                        <h4 className='text-white font-normal py-3 text-[22px] tracking-wide'>{currentData.subHeaderTitle}</h4>

                        <p className='text-gray py-8 text-[18px] '>{currentData.subDiscription}</p>

                    </div>)
                </div>
                <div className=' bg-transparent md:col-span-3 col-span-12'>

                    <button className='text-white bg-[#3A3A3A] py-1 px-3 rounded-3xl flex space-x-5 items-center hover:bg-voilet transition-all ease-in-out duration-500 ' onClick={() => { click(), router.push('/?blog') }} > <TfiMenuAlt size={25} /> <div className='text-[24px] font-bold'>view all posts</div></button>
                    <div className='flex pt-7  space-x-12'>
                        <button onClick={() => { }} className='text-white flex space-x-2 items-center py-1 px-2 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <HiOutlineArrowSmLeft size={20} /> <div className='text-[20px]'> back</div></button>
                        <button className='text-white flex space-x-2 items-center py-1 px-2 border border-white rounded-3xl hover:bg-voilet transition-all ease-in-out duration-500 '> <div className='text-[20px]' >next</div> <HiOutlineArrowSmRight size={20} /> </button>
                    </div>

                </div>
            </div> : ""}
        </>
    )
}

export default Blog