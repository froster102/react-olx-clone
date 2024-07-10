import { Link } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const { signIn } = UserAuth()


    async function handle(e) {
        e.preventDefault()
        if (!email || !password) {
            setError('Fields should not be empty')
        }
        else {
            try {
                console.log('runn')
                await signIn(email, password)
                navigate('/')

            } catch (e) {
                setError(e.message)
            }
        }
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="border-2 rounded-md w-[360px] flex flex-col items-center border-teal-950 p-4">
                    <Link to='/ ' ><svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-lquEm" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></Link>
                    <form action="" onSubmit={handle}>
                        {error ? <div className="p-4 rounded-md w-full bg-teal-950"><p className="text-center text-white text-xl">{error}</p></div> : ''}
                        <div className="mt-5">
                            <label className="text-2xl font-extrabold" htmlFor="">Enter your email to login</label>
                            <input onChange={(e) => { setEmail(e.target.value) }} name="email" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-full px-6 p-2" placeholder="Email" type="text" />
                        </div>
                        <div className="mt-5">
                            <label className="text-2xl font-extrabold" htmlFor="">Enter your password to login</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} name="password" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-full px-6 p-2  " placeholder="Password" type="password" />
                        </div>
                        <button type="sumbit" className="w-full bg-teal-950 h-[48px] mt-8 text-white rounded-md font-extrabold">Login</button>
                    </form>
                    <p className="w-full mt-4">Don't have an account ? <Link to='/signup'><span className="underline">Sign Up</span></Link> </p>
                </div>
            </div>

        </>
    )
}

export default Login