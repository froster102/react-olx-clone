import { useContext } from "react"
import Banner from "./Banner"
import Catergories from "./Catergories"
import ProductCard from "./ProductCard"
import { ProductContext } from "../Context/ProductContext"
import { Link } from "react-router-dom"

function Main() {
    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <>
            <div className="pt-[60px]">
                <Catergories></Catergories>
                <Banner></Banner>
                <div className="m-auto py-2 px-4 w-[1280px]">
                    <div className="px-4">
                        <p className="text-2xl w-fit">Fresh recommendations</p>
                        <ul className="mt-2 flex">
                            {products.map((item) => (<li key={item.id}>
                                <Link to={`/view/${item.id}`} ><ProductCard price={item.price} category={item.category} description={item.description} date={item.addedAt} imageUrl={item.imageUrl} ></ProductCard></Link>
                            </li>))
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main