
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai'
import MusicCard from 'components/card/MusicCard'
import styles from '../styles/NewIndex.module.css'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    const parentDivShow = styles.parentchildon;
    const parentDivHide = styles.parentchildoff;
    const childrenDivShow = styles.childparenton;
    const childrenDivHide = styles.childparentoff;
    const anmationEnd = styles.animationEndHideChild;

    const [showParent, setShowParent] = useState("");
    const [hideParent, setHideParent] = useState("");
    const [showChild, setShowChild] = useState("");
    const [hideChild, setHideChild] = useState("");





    const HandleClick = () => {
        setTimeout(() => { setOpen(true) }, 100)
        setHideParent(parentDivHide)
        setShowChild(childrenDivShow)
    }
    const changeDuration = () => {
        setTimeout(() => setOpen(false));
        setTimeout(() => setHideChild(childrenDivHide))
        setTimeout(() => setShowParent(parentDivShow))
        setTimeout(() => setHideChild(true), 2000)
        setTimeout(() => setDown(false));


    }

    //user login

    const userLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jwt-auth/v1/token`, {
            method: "POST",
            body: formData
        })
        if (res.ok) {
            const res2 = await res.json()
            if (res2.token) {
                cookie.set('token', res2.token)
                cookie.set('user', res2.user)

                router.push(`http://learndash-headless.irjck4mzt7-gok67wnk9452.p.temp-site.link/auth.php?token=${res2.token}`)
                toast.success('Success Notification !', {
                    position: toast.POSITION.TOP_RIGHT
                });

            } else {
                router.push('/')

            }
        } else {


            router.push('/')
            toast.error('Username password invaild !', {
                position: toast.POSITION.TOP_CENTER
            });

        }
    }


    return (
        <>
            {/* <WelcomeBackModel /> */}

            <Head> LearnDash </Head>

            <ToastContainer />
            <div className={`grid grid-cols-12 md:h-screen bg-[url('/images/bg-image.png')] bg-cover bg-center bg-no-repeat`}>

                <div className='flex flex-col justify-between p-10 col-span-6 md:'>
                    <Image src='/images/logo.png' height='70' width='250' alt='logo' />
                    <div className='w-full pb-8'>
                        <p className='text-7xl font-normal py-2'>massage ce.</p>
                        <p className='text-7xl font-normal py-2'> simplified. </p>
                    </div>
                </div>


                <div className='col-span-5 z-10 relative'>
                    <div className={` grid grid-cols-12 ${!open ? showParent : hideParent}`}>
                        <div className='col-span-6 md:h-screen md:col-span-6'>
                            <div className='grid md:h-full grid-cols-1 divide-y-[1px] divide-bordergray md:border-0 border-y-[1px] border-bordergray'>
                                <div className='flex flex-col justify-center border-l border-l-bordergray  p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/start.png' height='200' width='200' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 lineUp font-semibold md:text-center'>start</h3>
                                            <p className='mt-2 hide  md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col z-40 justify-center p-2 zoom-effect-container border-l border-l-bordergray' onClick={() => { HandleClick(); }}>

                                    <div className='flex space-x-4 md:block md:space-x-0 image-card '>
                                        <Image alt='start' src='/images/Im-Back.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 lineUp font-semibold md:text-center'>I’m Back</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>

                        <div className='col-span-12 md:h-screen md:col-span-6 border-l border-bordergray'>
                            <div className='grid h-full grid-cols-1 divide-y-[1px] divide-bordergray'>
                                <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/Concierge.png' height='65' width='65' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center lineUp'>concierge</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/NCBTMB-Approved.png' height='120' width='120' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='mt-4 font-semibold md:text-center lineUp'>ncbtmb approved</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>check if your state is approved</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center p-2 zoom-effect-container'>
                                    <div className='flex space-x-4 md:block md:space-x-0 image-card'>
                                        <Image alt='start' src='/images/Teacher-Lounge.png' height='70' width='51' className='md:mx-auto ' />
                                        <div className='w-full'>
                                            <h3 className='font-semibold lineUp md:text-center md:mt-4'>Teacher’s Lounge</h3>
                                            <p className='mt-2 hide md:text-center lineUp'>have a question? get in touch!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={` col-span-5 z-5 absolute  ${hideChild ? anmationEnd : ""} ${open ? showChild : hideChild}  `} >
                        <div className=" relative mt-10 ">
                            <div className="w-full  m-auto bg-transparent relative  border border-bordergray p-[25px] lg:max-w-sm">
                                <div className='flex justify-between '>
                                    <h2 className=' font-normal py-2 pb-4'>Welcome Back !</h2>

                                </div>
                                <button className='absolute top-4 right-4' onClick={() => { changeDuration(); }}><AiOutlineClose /></button>

                                <form onSubmit={(e) => userLogin(e)}>
                                    <div className='py-2'>
                                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="text" placeholder="username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div className='py-2'>
                                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="password" placeholder="*******"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-1 items-center'>

                                            <div className="form-check">
                                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />

                                            </div>

                                            <p>remember me</p>
                                        </div>
                                        <Link href="#">
                                            <p className='font-bold'>forget Password</p>
                                        </Link>

                                    </div>
                                    <button className="w-full px-4 my-5 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none" type="submit">login

                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>


                </div>


                <div className='col-span-12 p-4 md:col-span-1 flex justify-center items-center relative h-screen w-full border-l border-bodergray '>
                    <div>
                        <div className='flex items-center justify-center space-x-2  absolute top-5 left-1/4'>
                            <p className='font-semibold'>menu</p>
                            <Image src="/images/menuIcon.png" width={25} height={25} alt="menu" />
                        </div>
                        <div className=' absolute bottom-5 left-1/3'>
                            <MusicCard />
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Home