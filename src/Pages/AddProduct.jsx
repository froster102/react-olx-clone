import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { useContext, useRef, useState } from "react"
import { ProductContext } from "../Context/ProductContext"
import { UserAuth } from "../Context/AuthContext"

function AddProduct() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [error, setError] = useState('')

    const fileInputRef = useRef(null)

    const { createProduct } = useContext(ProductContext)
    const { user } = UserAuth()

    async function handle(e) {
        e.preventDefault()
        if (!name || !category || !price || !file) {
            setError('All fields are neccessary')
        }
        else {
            try {
                await createProduct(name, category, price, description, user.email, file)
                setCategory('')
                setPrice('')
                setName('')
                setDescription('')
                if (fileInputRef.current) {
                    fileInputRef.current.value = null
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="flex items-center justify-center pt-[90px]">
                <div className="border-2 rounded-md w-[360px] flex flex-col items-center border-teal-950 p-4">
                    <Link to='/ ' ><svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-lquEm" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></Link>
                    <form action="" onSubmit={handle}>
                        {error ? <div className="p-4 rounded-md w-full bg-teal-950"><p className="text-center text-white text-xl">{error}</p></div> : ''}
                        <div className="mt-5">
                            <label className="text-xl font-extrabold" htmlFor="">Name</label>
                            <input onChange={(e) => { setName(e.target.value) }} value={name} name="name" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-72 px-6 p-2" placeholder="Name of the product" type="text" />
                        </div>

                        <div className="mt-5">
                            <label className="text-xl font-extrabold" htmlFor="">Category</label>
                            <input onChange={(e) => { setCategory(e.target.value) }} value={category} name="category" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-72 px-6 p-2" placeholder="Catergory" type="text" />
                        </div>

                        <div className="mt-5">
                            <label className="text-xl font-extrabold" htmlFor="">Price</label>
                            <input onChange={(e) => { setPrice(e.target.value) }} value={price} name="price" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-72 px-6 p-2" placeholder="Price" type="text" />
                        </div>

                        <div className="mt-5">
                            <label className="text-xl font-extrabold" htmlFor="">Description</label>
                            <input onChange={(e) => { setDescription(e.target.value) }} value={description} name="description" className="block border-[1px] h-[48px] border-gray-500 mt-4 rounded-md w-72 px-6 p-2" placeholder="Description" type="text" />
                        </div>
                        <div className="mt-5">
                            <label className="text-xl font-extrabold" htmlFor="">Choose image:</label>
                            <input ref={fileInputRef} onChange={(e) => { setFile(e.target.files[0]) }} type="file" name="image-file" />
                        </div>

                        <button className="w-full bg-teal-950 h-[48px] mt-8 text-white rounded-md font-extrabold">Sumbit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct