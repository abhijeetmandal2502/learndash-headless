// import React from 'react'
// import { MdClose } from 'react-icons/md';

// const Test = ({ children, isOpen, setIsOpen }) => {
//     return (
//         <main
//             className={
//                 " fixed overflow-hidden z-40 bg-gray  bg-opacity-25 inset-0 top-0 transform ease-in-out " +
//                 (isOpen
//                     ? " transition-opacity opacity-100 duration-500 -translate-x-0"
//                     : " -transition-all delay-500 opacity-0 -translate-x-full")
//             }
//         >
//             <section
//                 className={
//                     " w-72 left-0 absolute rounded-tr-lg bg-gray h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
//                     (isOpen ? " -translate-x-0 " : " -translate-x-full ")
//                 }
//             >
//                 <article className="relative flex flex-col h-full mobilemenu bg-navyblue w-72">
//                     <div className="relative flex justify-center ">
//                         <div className="absolute text-xl text-white right-2 top-2" onClick={() => {
//                             setIsOpen(false);
//                         }}>
//                             <MdClose />
//                         </div>
//                     </div>
//                     {children}
//                 </article>
//             </section>

//         </main>
//     );
// }

// export default Test


import React, { useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { GoThreeBars } from 'react-icons/go'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeComponentMobile from 'components/HomeComponentMobile'
import MobileDrawerLeft from 'components/Menu/MobileDrawerLeft'
import MobileDrawerRighrt from 'components/Menu/MobileDrawerRight'



const Test = () => {
    const router = useRouter();
    const [desktopMenue, setDesktopMenue] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLeft, setIsOpenLeft] = useState(true);
    const [menuColor, setMenuColor] = useState('text-lightgray');
    const [menuIconColor, setMenuIconColor] = useState('text-white');
    const pathArr = router?.asPath?.split('/');
    const basePath = pathArr[1];

    useEffect(() => {
        if (basePath === "product") {
            setMenuColor('text-black')
            setMenuIconColor('text-green')

        }
        else {
            setMenuColor('text-lightgray')
            setMenuIconColor('text-white')

        }
    }, [router])

    return (
        <div>
            <div className="relative px-4 m-auto bg-transparent lg:px-8 default-page-width-header">

                <div className="relative px-4 m-auto bg-transparent lg:px-8 default-page-width-header">
                    {/* Mobile Menu icon */}
                    <div className="lg:hidden">
                        <MobileDrawerRighrt isOpen={isOpen} setIsOpen={setIsOpen} basePath={basePath}>
                            <div className="p-4 overflow-y-scroll">
                                <div className="flex flex-col">

                                    <Disclosure as="div" className='mx-2 my-1 list-none rounded-full text-gray'>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-center w-full px-4 py-1 ">
                                                    <button className='text-black' onClick={() => {
                                                        setIsOpen(!isOpen), setIsOpenLeft(!isOpenLeft)
                                                    }} >Click left slider</button>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="w-full py-1 text-white ">
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </MobileDrawerRighrt>
                        <MobileDrawerLeft isOpen={isOpenLeft} setIsOpen={setIsOpenLeft} basePath={basePath}>
                            <div className="p-4 overflow-y-scroll">
                                <div className="flex flex-col">
                                    <Disclosure as="div" className='mx-2 my-1 list-none rounded-full text-gray'>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-center w-full px-4 py-1 ">
                                                    <button className='text-black' onClick={() => {
                                                        setIsOpen(!isOpen), setIsOpenLeft(!isOpenLeft)
                                                    }} >Click right slider</button>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="w-full py-1 text-white ">
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </MobileDrawerLeft>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Test;