
"use client";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'


const WelcomeBackModel = () => {
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

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
            <div className="fixed inset-0  bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden border border-gray bg-transparent p-3 text-left align-middle shadow-xl transition-all">
                  <div className='flex justify-between items-center'>
                    <Dialog.Title
                      as="h2"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Welcome Back!
                    </Dialog.Title>


                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md  border-transparent  px-4 py-2 text-md font-medium  focus:outline-none "
                      onClick={closeModal}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>

                  <div className="relative flex flex-col justify-center  overflow-hidden">
                    <div className="w-full p-1 m-auto bg-transparent   rounded-md shadow-md lg:max-w-xl">

                      <form className="">
                        <div className="mb-2">
                          <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2  bg-white border    focus:outline-none "
                            placeholder='enter your mail'
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"

                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2  bg-white border     focus:outline-none "
                            placeholder='**********'
                          />
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='flex space-x-1 items-center'>
                            <Fragment>
                              <Checkbox id="ripple-on" ripple={true} />

                            </Fragment>
                            <p>remember me</p>
                          </div>
                          <Link href="#">
                            <p className='font-bold'>forget Password</p>
                          </Link>

                        </div>
                        <div className="mt-6 mx-6">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-3xl focus:outline-none">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


export default WelcomeBackModel