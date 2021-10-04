import React from 'react';
import './Slider.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Slider = () => {
    return (
        <div className="slider-bg">
            <Container>
                <div className="slider-section">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="slider-details">
                                <h1>Boost Up Your Skills <br /> With A New Way Of <br /> Learning</h1>
                                <Button className="btn-main my-3">Get Started</Button>
                            </div>

                        </div>
                        <div className="col-lg-5">

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Slider;