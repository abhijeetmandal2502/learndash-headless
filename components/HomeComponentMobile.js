import React, { useState } from 'react'
import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import LoginModel from './LoginModel';
import Conceierge from './Conceierge';
import Ncbtmb from './Ncbtmb';
import SimplyChoose from './SimplyChoose';

const HomeComponentMobile = () => {

    const router = useRouter();

    const [activeTabIndex, setActiveTabIndex] = useState('');
    const menuList = [
        {
            image: "/images/start.png",
            title: "start",
            content: <div className={` `}>
                <div className={` `}>
                    <SimplyChoose />
                </div>

            </div>
        },
        {
            image: "/images/IamBack.svg",
            title: "i’m back",
            content: <LoginModel title="welcome back" />
        },
        {
            image: "/images/Concierge.svg",
            title: "concierge",
            content: <Conceierge />
        },
        {
            image: "/images/ncbtmb.svg",
            title: "ncbtmb approved",
            content: <Ncbtmb />
        },
        {
            image: "/images/teacherLounge.svg",
            title: "teacher’s lounge",
            content: <LoginModel title="Teacher s Lounge" />
        },
    ]

    console.log('activeTabIndex', activeTabIndex);

    return (
        <div className=' relative bg-transparent'>
            {activeTabIndex === "" ? <div className='z-5'>
                <div className='mb-5'>
                    <p className=' md:text-5xl text-4xl font-normal py-2 px-3'>massage ce.</p>
                    <p className=' md:text-5xl text-4xl  font-normal py-2 px-3'> simplified. </p>
                </div>

                {
                    menuList?.map((item, id) => {

                        return (
                            <>
                                <div className='border-t border-gray' onClick={() => { setActiveTabIndex(id) }}>
                                    <div key={id} className='flex space-x-5 items-center px-3  py-5'>
                                        <Image alt='start' src={item.image} height='80' width='80' />
                                        <h3 className='mt-4 '>{item.title}</h3>
                                    </div>
                                </div>



                            </>
                        )
                    })
                }
            </div> : ""}

            {activeTabIndex !== '' ? <div className={`absolute top-0 left-0 w-full z-10 ${activeTabIndex === 0 ? "bg-[url('/images/start-bg.png')]" : ""}  `}>

                <button className={`flex items-center space-x-1 bg-black text-white px-5 py-2 w-full justify-center hover:bg-voilet transition-all ease-in-out duration-1000 hover:font-bold   mt-1`} onClick={() => { setActiveTabIndex('') }} >
                    <BiArrowBack size={20} className="text-white " /><span className='text-md 3xl:text-2xl font-semibold'>lobby</span></button>

                <div className={`text-black ${activeTabIndex === 0 ? 'px-0' : 'px-3'}`}>{menuList[activeTabIndex].content}</div>

            </div> : ""}
        </div>
    )
}

export default HomeComponentMobile