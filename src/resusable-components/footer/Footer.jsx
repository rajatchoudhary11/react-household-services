import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <section className="footer">
            <hr className="hr-line"></hr>

            <div className="footer-header">
                <span>LOGO</span>
            </div>
            <div className="paragraph">
                <p>Get help from a vast array of<br></br>
                    nearby experts at your fingertips</p>
            </div>
            <div className="full-section">
                <div className="services">
                    <h2>Service</h2>
                    <ul>
                        <li className="repair">
                            <a href='/'>Repair</a>
                        </li>
                        <li>
                            <a href='/'>Gardening</a>
                        </li>
                        <li>
                            <a href='/'>House Help</a>
                        </li>
                        <li>
                            <a href='/'>Tutor</a>
                        </li>
                        <li>
                            <a href='/'>Trainer</a>
                        </li>
                        <li>
                            <a href='/'>Beauty</a>

                        </li>
                    </ul>
                </div>
                <div className="blog">
                    <h2>Blog</h2>
                    <ul>
                        <li>
                            <a href='/'>Inspiration</a>
                        </li>
                        <li>
                            <a href='/'>DIY</a>
                        </li>
                        <li>
                            <a href='/'> Articles</a>
                        </li>
                        <li>
                            <a href='/'>Tutorials</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <h2>Social</h2>
                    <ul>
                        <li>
                            <a href='/'>Twitter</a>
                        </li>
                        <li>
                            <a href='/'>LinkedIn</a>
                        </li>
                        <li>
                            <a href='/'> Instagram</a>
                        </li>
                        <li>
                            <a href='/'>Facebook</a>
                        </li>
                        <li>
                            <a href='/'> YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="concat">
                <span>Terms and Conditions</span><br></br>
                <span>Private Policy</span>

            </div>
        </section>

    )
}

export default Footer;