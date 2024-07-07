import ProductCard from "./ProductCard"

function Main() {
    return (
        <>
            <div className="m-auto py-2 px-4 w-[1280px]">
                <div className="px-4">
                    <p className="text-2xl w-fit">Fresh recommendations</p>
                    <ul className="mt-2">
                        <li>
                            <ProductCard></ProductCard>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Main