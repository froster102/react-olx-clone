import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="flex justify-items-center items-center">
                <div className="w-fit">
                    <h1 className="text-3xl font-extrabold">
                        404 Not Found
                    </h1>
                    <Link to='/' ><button className="px-2 py-4 text-white rounded-md bg-teal-950">Return home</button></Link>
                </div>

            </div>
        </>
    )
}

export default NotFound