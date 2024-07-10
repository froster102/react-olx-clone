import { useParams } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Context/ProductContext"


function View() {
    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})
    const id = useParams()
    const { getProductById, getUserById } = useContext(ProductContext)

    useEffect(() => {
        getProductById(id).then((product) => {
            setProduct(product)
        })

    }, [])

    useEffect(()=>{
        getUserById(product.userId).then((res)=>{
            setUser(res)
        })
    },[product.userId])

    console.log('render')
    // console.log(product.userId)

    return (
        <>
            <Navbar></Navbar>
            <div className="pt-[100px] px-52 mb-4 flex justify-between">
                <img src={product.imageUrl} alt="" />
                <div>
                    <div className="border-2 border-teal-950 rounded-md w-96  p-2">
                        <p className="text-teal-950 text-3xl font-extrabold">₹{product.price}</p>
                        <p className="mt-5">{product.name}</p>
                        <p>{product.category}</p>
                        <p className="mt-5">{product.addedAt}</p>
                    </div>
                    <div className="border-2 border-teal-950 rounded-md w-96  p-2 mt-6">
                        <p className="text-teal-950 text-xl font-bold">Seller details</p>
                        <p className="mt-5">{user?.username}</p>
                        <p className="mt-5">Contact: {user?.phone}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default View