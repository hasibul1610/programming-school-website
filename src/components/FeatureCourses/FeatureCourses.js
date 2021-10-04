import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const FeatureCourses = () => {
    const element = <FontAwesomeIcon icon={faClock} />
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // Slicing the array found from fake data to show some of the courses 
    const slicedCourses = courses.slice(1, 5);
    console.log(slicedCourses);
    return (

        <div>

            {
                slicedCourses.map(course => (
                    <Container>
                        <div className="card-container">
                            <div className="row text-lg-start text-sm-center">
                                <div className="col-lg-5">
                                    <div className="course-card-img">
                                        <img height="316px" width="470px" src={course.img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="course-card-deatils">
                                        <h2 className="pt-4 pb-3">{course.name}</h2>
                                        <div className="course-time d-flex align-items-center my-2">
                                            {element} &nbsp; {course.duration}
                                        </div>
                                        <h5>Instructor: {course.instructor}</h5>
                                        <h6>Category: {course.category}</h6>
                                        <h6>Course Fee: $ {course.fee}</h6>
                                        <NavLink

                                            to="/home">
                                            <Button className="btn-main">See Details</Button>

                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                ))

            }
            <div className="text-center my-5">
                <NavLink

                    to="/courses">
                    <Button className="btn-main">See All Courses</Button>

                </NavLink>
            </div>


        </div>
    );
};

export default FeatureCourses;