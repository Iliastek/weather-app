import React from "react"
import Favoriten from "../../components/Favoriten/index.tsx"
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return (

        <>

            <Favoriten prop="Hamburg" />

            <Link to="/search" className="search-button">
                <div className='plus'>+</div>

            </Link>
        </>
    )

}

export default Home