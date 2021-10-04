import React from 'react';
import './Contact.css';
import Iframe from 'react-iframe';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'

// Fontawesome icon 

const home = <FontAwesomeIcon icon={faHome} />
const phone = <FontAwesomeIcon icon={faPhone} />
const mail = <FontAwesomeIcon icon={faEnvelope} />


const Contact = () => {
    return (
        <div>
            {/* Contact us Header  */}
            <div className="contact-us-header text-center">
                <h1>Contact Us</h1>
            </div>

            {/* Google map Iframe Section  */}

            <div className="text-center container my-5">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3474395064677!2d89.50016781491695!3d22.900552385014993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bda1d0ff6e5%3A0x123a926908efcd0c!2sKhulna%20University%20Of%20Engineering%20%26%20Technology%20(KUET)!5e0!3m2!1sen!2sbd!4v1633357032905!5m2!1sen!2sbd"
                    width="100%"
                    height="400px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />

            </div>

            {/* Get in Touch Section  */}

            <div className="get-in-touch">
                <Container>
                    <h2 className="my-3">Get in Touch</h2>
                    <div className="row">
                        <div className="col-lg-7">
                            <textarea placeholder="Enter Your Message"></textarea> <br />
                            <input type="text" placeholder="Type Your Name" />
                            <br />
                            <input type="email" placeholder="Type Your Email" />
                            <br />
                            <input type="text" placeholder="Enter Your Subject" />
                            <br />
                            <button className="btn-main">Send</button>

                        </div>
                        <div className="col-lg-5 ps-5">
                            <div className="d-flex align-items-center">
                                <div className="contact-icon">
                                    {home}
                                </div>
                                <div>
                                    <h4>Khulna, Bangladesh</h4>
                                    <p>WG22+6WH, Khulna 9203</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="contact-icon">
                                    {phone}
                                </div>
                                <div>
                                    <h4>+88 01765 471227</h4>
                                    <p>10 AM to 10 PM</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="contact-icon">
                                    {mail}
                                </div>
                                <div>
                                    <h4>bcse.hasibul@gmail.com</h4>
                                    <p>Anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Contact;