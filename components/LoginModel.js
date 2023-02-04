import React, { useState } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

const LoginModel = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    //user login

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

    return (
        <>

            <form onSubmit={(e) => userLogin(e)}>
                <div className='py-2'>

                    <label className='font-bold'>
                        username
                    </label>
                    <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="text" placeholder="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='py-2'>
                    <label className='font-bold'>
                        password
                    </label>
                    <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="password" placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-between py-3 '>
                    <div className='flex space-x-[0.5px] items-center'>

                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />

                        </div>

                        <p>remember me</p>
                    </div>
                    <Link href="#">
                        <p className='font-[600] hover:text-voilet '>forget Password</p>
                    </Link>

                </div>
                <button className="w-full px-4 mt-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none" type="submit">login

                </button>
            </form>

        </>
    )

}

export default LoginModel