import React from 'react';
import { Container } from 'react-bootstrap';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'




const Course = (props) => {
    const element = <FontAwesomeIcon icon={faClock} />

    const { key, img, name, duration, instructor, fee, category } = props.course;
    return (
        <div>
            <Container>
                <div className="card-container">
                    <div className="row text-lg-start text-sm-center">
                        <div className="col-lg-5">
                            <div className="course-card-img">
                                <img height="316px" width="475px" src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="course-card-deatils">
                                <h2 className="pt-4 pb-3">{name}</h2>
                                <div className="course-time d-flex align-items-center my-2">
                                    {element} &nbsp; {duration}
                                </div>
                                <h5>Instructor: {instructor}</h5>
                                <h6>Category: {category}</h6>
                                <h6>Course Fee: $ {fee}</h6>
                                <NavLink
                                    // to={`/coursedetail/${key}`}
                                    to="/home">
                                    <Button className="btn-main">See Details</Button>

                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Course;