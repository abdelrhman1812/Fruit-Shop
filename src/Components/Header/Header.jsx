import React from 'react'

const Header = () => {
    return <>

        <header className='container-fluid position-relative overflow-hidden'>

            <div className="title">
                <div className="num">
                    <span className='active'>01   / </span>

                    <span >02</span>
                </div>
                <p>Ananas</p>
                <span className='description'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </span>
            </div>
            <figure className=''>

                <img src={require("../../Assets/Images/Header.png")} alt="" />
                <div className="content-header">
                    <h1>
                        Fruit <span>Fruit Mania</span>
                        <br />
                        Delivery
                    </h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </figure>


        </header>

    </>
}

export default Header