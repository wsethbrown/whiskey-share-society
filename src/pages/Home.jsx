import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import Categories from '../components/Categories'

const Home = () => {
    return(
        <div>
            <Navbar />
            <Slideshow />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home