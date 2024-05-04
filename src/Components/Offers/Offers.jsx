import React from 'react'

const Offers = () => {
    return <>

        <section className='offers'>
            <div className="row m-0">
                <div className="col-md-6 p-0">
                    <div className="row m-0">
                        <div className="col-3 p-0">
                            <figure className='m-0'>
                                <img src={require("../../Assets/Images/Offers/orange.jpeg")} alt="" />
                            </figure>

                        </div>
                        {/* Info */}
                        <div className="col-9 p-0 bg-offers">
                            <div className="info">
                                <div className="title">
                                    <p>Orange</p>
                                    <span className='title'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </span>
                                    <span className='title'>Amet minim mollit non deserunt ullamco </span>

                                </div>
                                <div className="action">
                                    <p><span>39$</span><span>59$</span></p>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0 bg-offers">
                    <div className="row m-0">
                        <div className="col-3 p-0">
                            <figure className='m-0'>
                                <img src={require("../../Assets/Images/Offers/watermelon.jpeg")} alt="" />
                            </figure>

                        </div>
                        {/* Info */}
                        <div className="col-9 p-0">
                            <div className="info">
                                <div className="title">
                                    <p>Melons</p>
                                    <span className='title'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </span>
                                    <span className='title'>Amet minim mollit non deserunt ullamco </span>

                                </div>
                                <div className="action">
                                    <p><span>39$</span><span>59$</span></p>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>
}

export default Offers
