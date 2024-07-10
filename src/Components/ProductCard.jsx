import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function ProductCard({price,description,date,imageUrl}) {
    const [like, setLike] = useState(false)
    return (
        <>
            <div className="border-[1px] flex p-4 flex-col items-center ml-4 rounded-md w-[300px] h-[266px] border-gray-300">
                <div className="w-full bg-gray-400 h-[160px] relative">
                    <img className='w-full h-full' src={imageUrl} alt="" />
                    <div className='absolute z-50 top-0 right-0 bg-white p-2 flex mt-1 mr-1 items-center justify-items-center rounded-full'>
                        {like ? <FaHeart onClick={() => { setLike(!like) }} size={20}></FaHeart> : <FaRegHeart onClick={() => { setLike(!like) }} size={20}></FaRegHeart>}
                    </div>
                </div>
                <div className="w-full mt-2">
                    <p className="text-xl font-extrabold">₹ {price}</p>
                    <p className="">{description}</p>
                    <p className="text-right text-xs">{date}</p>
                </div>

            </div>
        </>
    )
}

export default ProductCard