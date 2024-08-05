import React from "react"
import Favoriten from "../../components/Favoriten/index.tsx"

const Home = () => {
    return (
        <>
            <Favoriten prop="Hamburg" />
            <div className='plus'>+</div>
        </>
    )
}

export default Home