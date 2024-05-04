import React from 'react'
import Favorite from '../Favorite/Favorite'
import Fruitshoop from '../Fruitshoop/Fruitshoop'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Offers from '../Offers/Offers'
const Home = () => {
    return <>
        <div className="social">

            <div className="icons">
                <i className='fa-brands fa-facebook'></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>

        <section className='sidebar'>
            <div className="toggle d-flex justify-content-center align-items-center  ">

                <span className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </span>
            </div>
        </section>
        <div className='content-nav  '>

            <Navbar />

            <Header />
            <Offers />
        </div>
        <Favorite />
        <Fruitshoop />

    </>



}

export default Home
