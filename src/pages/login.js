import Link from 'next/link'
import { useState } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

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
                router.push('/login')

            }
        } else {
            router.push('/login')
            toast.error('Username password invaild !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-300 p-10 rounded-md">
                <h3 className='text-center'>LOGIN</h3>
                <form onSubmit={(e) => userLogin(e)}>
                    <div className='py-2'>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="text" placeholder="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className='py-2'>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="password" placeholder="Password"
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

        </>
    )
}

export default Login