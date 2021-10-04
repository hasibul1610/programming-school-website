import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import twiterr from '../../images/twitter.png';
import youtube from '../../images/youtube.png';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footer-top">
                    <div className="row g-5">
                        <div className="col-lg-7 footer-top-left">
                            <h2>Stay Updated</h2>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter Your Email"
                                    aria-label="Enter Your Email"
                                    aria-describedby="basic-addon2"
                                    className="py-3"
                                />


                            </InputGroup>
                            <Button className="subscribe-btn">Subscribe Now</Button>

                        </div>
                        <div className="footer-top-right col-lg-5">
                            <h2>Stay Updated</h2>
                            <div className="footer-top-right-social">
                                <div className="d-flex">
                                    <img className="mx-2 " width="60px" src={facebook} alt="" />
                                    <img className="mx-2 " width="60px" src={linkedin} alt="" />
                                    <img className="mx-2 " width="60px" src={twiterr} alt="" />
                                    <img className="mx-2 " width="60px" src={youtube} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr className="text-white" />
                <br />
                <p className="text-center text-white"> Copyright 2021 || Designed By Md. Hasibul Islam</p>
            </Container>

        </div>
    );
};

export default Footer;