import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div>
            <div className="about-us-header text-center">
                <h1>We share knowledge with the world</h1>
            </div>
            <div className="about-us-count">
                <div className="container">
                    <h1>We Just Keep Growing</h1>
                    <p className="text-center text-white my-5">Our global community and our course catalog get bigger every day. Check out our latest numbers as of June 2021.</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center text-white counters">
                            <h2>20000+</h2>
                            <p>Learners</p>

                        </div>
                        <div className="col-lg-3 col-md-6 text-center text-white counters">
                            <h2>200+</h2>
                            <p>Instructors</p>

                        </div>
                        <div className="col-lg-3 col-md-6 text-center text-white counters">
                            <h2>50+</h2>
                            <p>Courses</p>

                        </div>
                        <div className="col-lg-3 col-md-6 text-center text-white counters">
                            <h2>10000+</h2>
                            <p>Enrolment</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-center text-white counters">
                            <h2>25+</h2>
                            <p>Languages</p>

                        </div>
                        <div className="col-lg-6 text-center text-white counters">
                            <h2>500+</h2>
                            <p>Enterprice Customers</p>

                        </div>

                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="about-us-cards">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="about-us-card-1">
                                <h1>Work With Us</h1>
                                <br />
                                <p>At Programming School, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <NavLink
                                    to="/home">
                                    <Button className="btn-main">See Details</Button>

                                </NavLink>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="about-us-card-2">
                                <h1>See our research</h1>
                                <br />
                                <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <NavLink
                                    to="/home">
                                    <Button className="btn-main">See Details</Button>

                                </NavLink>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="about-us-card-3">
                                <h1>Read our blog</h1>
                                <br />
                                <p>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more..</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <NavLink
                                    to="/home">
                                    <Button className="btn-main">See Details</Button>

                                </NavLink>
                            </div>


                        </div>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default About;