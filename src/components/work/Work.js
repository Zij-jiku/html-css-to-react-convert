import React from 'react'
import './work.css';

function Work() {
    return (
        <div>
            <section className="our_work">
                <div className="container">
                    <div className="our_work_flex">
                        <div className="our_work_text">
                            <h2>How we work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="our_work_btn cmn_btn">
                                <a href="#">Get in touch with us<i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="our_work_item_main">
                            <div className="our_work_item_main_flex">
                                <div className="our_work_item">
                                    <img src="images/our-work1.png" alt="Our work" />
                                        <h4>Strategy</h4>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="our_work_item">
                                    <img src="images/our-work2.png" alt="Our work" />
                                        <h4>Wireframing</h4>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="our_work_item">
                                    <img src="images/our-work3.png" alt="Our work" />
                                        <h4>Design</h4>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="our_work_item">
                                    <img src="images/our-work4.png" alt="Our work" />
                                        <h4>Development</h4>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work