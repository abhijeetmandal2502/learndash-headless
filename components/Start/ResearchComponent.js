import Image from 'next/image'
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import YourInstructor from './DialogCard/YourInstructor'
import AboutCourse from './DialogCard/AboutCourse'

const ResearchComponent = () => {

    let [isOpen, setIsOpen] = useState(false)

    const [aboutCourse, setAboutCourse] = useState(false);
    const [instructor, setInstructor] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
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

            <div className='bg-transparent'>
                <div className='py-4 border-b-2 border-bordergray'>
                    <h2 className='triplelargef tracking-wide md:leading-[40px]'>
                        using research
                        to market your practice
                    </h2>
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


            {/* model popup */}



            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                    <div className='flex items-center justify-center pb-20 mt-2'>
                                        {instructor ? <YourInstructor /> : ""}
                                        {aboutCourse ? <AboutCourse /> : ""}
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ResearchComponent