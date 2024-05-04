import React from 'react'

const Navbar = () => {
    return <>




        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">


                <a className="navbar-brand logo" href="#">Food
                    <br />
                    <span>Empire</span>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Favorite Fruits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fruit Shoop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us </a>
                        </li>

                        <li className='d-flex align-items-center justify-content-center'>
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </li>
                        <li className='d-flex align-items-center justify-content-center position-relative'>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className='num'></span>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    </>
}

export default Navbar
