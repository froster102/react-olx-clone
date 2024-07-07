import Banner from "../Components/Banner"
import Catergories from "../Components/Catergories"
import Footer from "../Components/Footer"
import Main from "../Components/Main"
import Navbar from "../Components/Navbar"

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="pt-[60px]">
                <Catergories></Catergories>
                <Banner></Banner>
                <Main></Main>
                <Footer></Footer>
            </div>

        </>
    )
}

export default Home