
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

    //console.log('basePath', pathArr)

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