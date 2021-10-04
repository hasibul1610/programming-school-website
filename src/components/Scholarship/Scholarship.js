import React from 'react';
import { Container } from 'react-bootstrap';
import './Scholarship.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faExclamationTriangle, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const graduation = <FontAwesomeIcon icon={faGraduationCap} />;
const danger = <FontAwesomeIcon icon={faExclamationTriangle} />;
const book = <FontAwesomeIcon icon={faBookReader} />;



const Scholarship = () => {
    return (
        <div className="scholarship">
            <Container>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="scholarship-box1 d-flex justify-content-center align-items-center">
                            <div className="scholarship-left">
                                <div className="scholarship-left-icon1">
                                    {graduation}
                                </div>
                            </div>
                            <div className="scholarship-right">
                                <h2>Scholarship</h2>
                                <h3>Available</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="scholarship-box2 d-flex justify-content-center align-items-center">
                            <div className="scholarship-left">
                                <div className="scholarship-left-icon2">
                                    {danger}
                                </div>
                            </div>
                            <div className="scholarship-right">
                                <h2>Scholarship</h2>
                                <h3>Available</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="scholarship-box3 d-flex justify-content-center align-items-center">
                            <div className="scholarship-left">
                                <div className="scholarship-left-icon3">
                                    {book}
                                </div>
                            </div>
                            <div className="scholarship-right">
                                <h2>Scholarship</h2>
                                <h3>Available</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Scholarship;