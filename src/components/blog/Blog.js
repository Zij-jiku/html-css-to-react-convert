import React from 'react'
import { Link } from 'react-router-dom';
import './blog.css';

function Blog() {
    return (
        <>
        <div class="environment">
        <div class="container">
            <div class="environment_head">
                <h3>A UX Case Study on Creating a Studious Environment for Students</h3>
                <p>Andrew Jonson, Posted on 27th January 2021</p>
                <img src="images/blog-banner.png" alt="" />
                <div class="environ_img_text">
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    <Link to="/blog-details">Read more</Link>
                </div>
            </div>
            <div class="out_blog">
                <h3>Our Blog</h3>
                <div class="blog_item">
                    <div class="blog_item_one">
                        <img src="images/blog22.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                    <div class="blog_item_one">
                        <img src="images/blog33.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                    <div class="blog_item_one">
                        <img src="images/blog22.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div class="blog_item divided">
                    <div class="blog_item_one">
                        <img src="images/blog33.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                    <div class="blog_item_one">
                        <img src="images/blog22.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                    <div class="blog_item_one">
                        <img src="images/blog33.png" alt="" />
                        <h4>27 Jan 2021</h4>
                        <p>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <h5>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</h5>
                        <Link to="/blog-details">Read more <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Blog