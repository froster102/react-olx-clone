function ProductCard() {
    return (
        <>
            <div className="border-[1px] flex p-4 flex-col items-center rounded-md w-[300px] h-[266px] border-gray-300">
                <div className="w-full bg-gray-400 h-[160px]"></div>
                <div className="w-full mt-2">
                    <p className="text-xl font-extrabold">₹ 2,000</p>
                    <p className="">Used airpod fresh condition</p>
                    <p className="text-right text-xs">10/12/2024</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard