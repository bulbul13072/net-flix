import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import "./Home.scss"

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <Featured/>
        </div>
    )
}

export default Home
