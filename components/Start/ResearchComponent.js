import Image from 'next/image'
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

import styles from '../Start/Start.module.css'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import YourInstructor from './DialogCard/YourInstructor'
import AboutCourse from './DialogCard/AboutCourse'
import { useRouter } from 'next/router'
import MobileDrawerRighrt from '../Menu/MobileDrawerRight'
import AddToCart from './AddToCart'


const ResearchComponent = () => {

    const router = useRouter();
    let [Open, setOpen] = useState(false)

    const [panel, setPanel] = useState(true);
    // drower for mobile
    const currentPath = router?.query?.active;
    const [isOpen, setIsOpen] = useState(false);
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    const drowerOpen = () => {

        setIsOpen(!isOpen)
    }

    const drowerClose = () => {

        setIsOpen(!isOpen)
    }

    //  console.log('panel', panel)

    const [aboutCourse, setAboutCourse] = useState(false);
    const [instructor, setInstructor] = useState(false);

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    const courseData = [
        'ncbtmb approved',
        'start course instantly',
        'log in / out anytime',
        'finish with our ‘flunk-proof’ quiz',
        'instant certificate',
    ]

    return (
        <>

            <div className='bg-transparent md:px-0 px-5'>
                <div className='py-4 border-b-2 border-bordergray'>

                    <div className='flex space-x-2 justify-center items-center'>

                        <h2 className='triplelargef tracking-wide md:leading-[40px]'>
                            using research
                            to market your practice
                        </h2>

                        {/* price component for mobile */}

                        <div className={` relative `} onClick={() => { drowerOpen() }}>
                            <div className='absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div className='md:text-[24px] mediumf xl:text-[24px] font-semibold text-white'>
                                    $40
                                </div>
                            </div>

                            <div className={` flex flex-col justify-center  ${panel ? 'block' : 'hidden'}`} onClick={() => {
                                setPanel(false)
                            }}>
                                <Image src="/images/newPriceOrange.svg" width={200} height={200} alt="prceBg" />
                                <div className=' text-center font-bold  text-[16px] text-[#FF5C00] '>
                                    +add
                                </div>
                            </div>

                            <div className={`${!panel ? 'block' : 'hidden'}`} onClick={() => {
                                setPanel(true)
                            }}>
                                <Image src="/images/newPriceBackground.svg" width={200} height={200} alt="prceBg" />
                                <div className=' flex  font-bold  text-[23px] text-[#FF5C00] '>
                                    <div className='flex items-center justify-center'><AiOutlineCheck className='text-[#AC6CFF]' size={20} /></div>
                                    <div className={`text-[#AC6CFF] text-[16px] font-semibold`}>
                                        added
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='mt-2 cursor-pointer'>
                        <Image src="/start/horizontaladdbutton.svg" width={120} height={50} />
                    </div>
                    <div className='flex items-center py-2 space-x-5 '>
                        <div className='flex items-center space-x-1 cursor-pointer'>
                            <Image src="/images/GaelWood.png" width={55} height={60} alt="author" />

                            {/* <h3 className={`${styles.element} border-b border-bordergray leading-4 text-[16px]`} >Geal Wood</h3> */}
                            <button
                                type="button"
                                onClick={() => { openModal(), setInstructor(true), setAboutCourse(false) }}
                                className={`${styles.element} border-b smallf border-bordergray leading-4`}
                            >
                                Gael Wood
                            </button>
                        </div>
                        <div className='flex space-x-1.5 items-center'>
                            <MdOutlineWatchLater size={20} />
                            <h3 className='font-semibold smallf'>4 Hours</h3>
                        </div>
                    </div>
                    <p className='py-1 tracking-wide smallf'>Do you know the difference in valid research and website hype? Learn basic concepts of research...</p>
                    <button className={`font-semibold border-b smallf ${styles.element} border-black leading-2`}
                        onClick={() => { openModal(), setAboutCourse(true), setInstructor(false) }}
                        type="button"
                    >
                        show more
                    </button>
                </div>
                <div className='py-3'>
                    {courseData && courseData.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center space-x-4 py-0.3'>
                                <AiOutlineCheck size={25} className='text-[#9747FF]' />
                                <p className='tracking-wider smallf'>{item}</p>
                            </div>
                        )
                    })}
                    <button className='pt-2 font-semibold leading-5 border-b border-black smallf'>
                        read our refund policy
                    </button>
                </div>
            </div>


            {/* checkout componets  */}
            <div className={`${styles.readyToCheckoutBg} ${!panel ? 'block' : 'hidden'} md:mt-3 md:mx-5 cursor-pointer relative `} onClick={() => { drowerOpen() }} >

                <div className={`flex justify-between items-center px-6 py-2`}>
                    <div className={`flex space-x-1 items-center `}>
                        <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" />
                        <p className={`text-white smallf font-semibold tracking-wide  leading-[130%]`}>simple checkout</p>
                    </div>
                    <div className={`flex  justify-center items-center space-x-1`}>
                        <p className='text-white -mb-[5px] font-bold text-[10px]'>total</p>
                        <div className='font-thin text-white extlargef' >$40</div>
                    </div>

                </div>
            </div>


            {/* model popup */}
            <Transition appear show={Open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-5xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                    <div className="flex items-center justify-end ">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center md:pb-20 mt-2'>
                                        {instructor ? <YourInstructor /> : ""}
                                        {aboutCourse ? <AboutCourse /> : ""}
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


            {/* checkout form for mobile */}

            <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                <div className="overflow-y-scroll ">
                    <div className="flex flex-col">

                        <Disclosure as="div" className='list-none rounded-full text-gray'>
                            {({ open }) => (
                                <>
                                    <div className="w-full ">
                                        <div className=' bg-lightgray relative pt-10'>

                                            <h4 className='text-black text-left text-[28px] px-5'>simple checkout</h4>
                                            <button className=' text-[25px] text-black absolute top-1 right-5' type='btn' onClick={() => { drowerClose() }}>
                                                x
                                            </button>

                                            <AddToCart />


                                        </div>
                                    </div>
                                    <Disclosure.Panel className="w-full py-1 text-white ">
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </MobileDrawerRighrt>

        </>
    )
}

export default ResearchComponent