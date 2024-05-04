import React from 'react'

const Favorite = () => {
    return (
        <section className='favorite'>
            <div className='container-lg'>
                <div className='row m-0 g-3'>
                    <h2>Favorite Fruits</h2>
                    <hr />
                    <div className="col-lg-3 col-md-6 m-0 ">
                        <figure>
                            <img src={require("../../Assets/Images/Favorite/Banana.jpeg")} alt="" />
                        </figure>
                        <div className="info">
                            <div className="title">
                                <p>Banana</p>
                                <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                                <span className="price">
                                    39$
                                </span>
                            </div>
                            <div className="actions">
                                <div className="count">
                                    <i class="fa-solid fa-plus"></i>
                                    <span className='num'>1</span>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 m-0 ">
                        <figure>
                            <img src={require("../../Assets/Images/Favorite/Orange.jpeg")} alt="" />
                        </figure>
                        <div className="info">
                            <div className="title">
                                <p>Banana</p>
                                <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                                <span className="price">
                                    39$
                                </span>
                            </div>
                            <div className="actions">
                                <div className="count">
                                    <i class="fa-solid fa-plus"></i>
                                    <span className='num'>1</span>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 m-0 ">
                        <figure>
                            <img src={require("../../Assets/Images/Favorite/Pinaple.jpeg")} alt="" />
                        </figure>
                        <div className="info">
                            <div className="title">
                                <p>Banana</p>
                                <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                                <span className="price">
                                    39$
                                </span>
                            </div>
                            <div className="actions">
                                <div className="count">
                                    <i class="fa-solid fa-plus"></i>
                                    <span className='num'>1</span>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 m-0 ">
                        <figure>
                            <img src={require("../../Assets/Images/Favorite/Apple.jpeg")} alt="" />
                        </figure>
                        <div className="info">
                            <div className="title">
                                <p>Banana</p>
                                <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                                <span className="price">
                                    39$
                                </span>
                            </div>
                            <div className="actions">
                                <div className="count">
                                    <i class="fa-solid fa-plus"></i>
                                    <span className='num'>1</span>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Favorite
