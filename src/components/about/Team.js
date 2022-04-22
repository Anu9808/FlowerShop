import React from 'react'
import './style.css';
import { Link } from "react-router-dom";


function Team() {
    return (
        <div className='my-4'>
            <div className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h1>Our Team</h1>
                            <p><b>"We deliver the Best."</b></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="team-items">
                            <div className="item">
                                <img src="images/about/team-2.jpg" alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Abhay Mishra</h5>
                                        <p>Designer</p>
                                        <div className="social-links">
                                            <Link to="/"><span className="fa fa-facebook"></span></Link >
                                            <Link to="/"><span className="fa fa-twitter"></span></Link >
                                            <Link to="/"><span className="fa fa-linkedin"></span></Link >
                                            <Link to="/"><span className="fa fa-youtube"></span></Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src="images/about/team-4.jpg" alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Anurag Sharma</h5>
                                        <p>Designer</p>
                                        <div className="social-links">
                                            <Link to="/"><span className="fa fa-facebook"></span></Link >
                                            <Link to="/"><span className="fa fa-twitter"></span></Link >
                                            <Link to="/"><span className="fa fa-linkedin"></span></Link >
                                            <Link to="/"><span className="fa fa-youtube"></span></Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src="images/about/team-3.jpg" alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Prince Jain</h5>
                                        <p>Designer</p>
                                        <div className="social-links">
                                            <Link to="/"><span className="fa fa-facebook"></span></Link >
                                            <Link to="/"><span className="fa fa-twitter"></span></Link >
                                            <Link to="/"><span className="fa fa-linkedin"></span></Link >
                                            <Link to="/"><span className="fa fa-youtube"></span></Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <img src="images/about/team-2.jpg" alt="team" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>Sushant Yadav</h5>
                                        <p>Designer</p>
                                        <div className="social-links">
                                            <Link to="/"><span className="fa fa-facebook"></span></Link >
                                            <Link to="/"><span className="fa fa-twitter"></span></Link >
                                            <Link to="/"><span className="fa fa-linkedin"></span></Link >
                                            <Link to="/"><span className="fa fa-youtube"></span></Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
