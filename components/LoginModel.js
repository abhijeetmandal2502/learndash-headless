import React, { useState } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPasswordModel from '../components/ForgetPassword/ForgetPasswordModel';

import styles from '../components/ForgetPassword/ForgetPassword.module.css'
import { AiOutlineClose } from 'react-icons/ai';

const LoginModel = ({ changeDuration, title }) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loginTitle, setLoginTitle] = useState(false)

    const [forgetPassword, setForgetPassword] = useState();
    const router = useRouter()


    // show hide forget model
    const HideForgetPasswordModel = () => {
        setForgetPassword(false)

    }

    const ShowForgetPasswordModel = () => {

        setForgetPassword(true)
    }

    const userLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const res = await fetch(`https://headlearn.thenwg.xyz/wp-json/jwt-auth/v1/token`, {
                method: "POST",
                body: formData
            })
            const res2 = await res.json()
            if (res.ok) {

                if (res2.token) {
                    cookie.set('token', res2.token)
                    cookie.set('user', res2.user)

                    router.push(`https://headlearn.thenwg.xyz/auth.php?token=${res2.token}`)
                    toast.success('Success Notification !', {
                        position: toast.POSITION.TOP_RIGHT
                    });

                } else {
                    router.push('/')
                    toast.error(res2.message, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    // router

                }
            }
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER
            });
            // router.push('/')
        }

    }

    const HandleFormTitle = () => {

        setLoginTitle(true);
    }

    const titlefogetpass = 'All done! Try it out!';


    return (
        <>
            <div className='relative '>
                <div className={`${forgetPassword ? styles.modelClose : styles.modelOpen}`}>
                    <div className='flex justify-between '>
                        <h2 className=' font-normal py-2 pb-4 lg:text-[24px] 3xl:text-[50px]'>{loginTitle ? titlefogetpass : title}</h2>
                    </div>
                    <button className='absolute top-4 right-4' onClick={() => { changeDuration(); }}><AiOutlineClose size={25} className='3xl:w-10 3xl:h-10' /></button>
                    <form onSubmit={(e) => userLogin(e)}>
                        <div className='py-2'>

                            <label className='font-bold 3xl:text-[40px]'>
                                username
                            </label>
                            <input className="block w-full px-4 py-2 3xl:py-3 3xl:text-[40px]  mt-2  bg-white border border-bordergray focus:outline-none " type="text" placeholder="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <label className='font-bold 3xl:text-[40px]'>
                                password
                            </label>
                            <input className="block w-full px-4 py-2  mt-2 3xl:py-3 3xl:text-[40px]  bg-white border border-bordergray focus:outline-none " type="password" placeholder="*******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex justify-between py-3 '>
                            <div className='flex space-x-[0.5px] items-center'>

                                <div className="form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 3xl:w-8 3xl:h-8 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />

                                </div>

                                <p className='3xl:text-[30px]'>remember me</p>
                            </div>

                            <button className='font-[600] hover:text-voilet 3xl:text-[30px] ' type="button" onClick={() => ShowForgetPasswordModel()} >forget Password</button>


                        </div>
                        <button className="w-full px-4 mt-4 py-2 3xl:py-2 3xl:text-[40px] tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none" type="submit">login

                        </button>
                    </form>

                </div>
                <div className={` absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-5  ${forgetPassword ? styles.modelOpen : styles.modelClose} ${forgetPassword === undefined ? styles.modelHide : ""} `}>
                    <ForgetPasswordModel HideForgetPasswordModel={HideForgetPasswordModel} changeDuration={changeDuration} HandleFormTitle={HandleFormTitle} />
                </div>
            </div>
        </>
    )

}

export default LoginModel