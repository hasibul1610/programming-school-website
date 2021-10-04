import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="courses-container">
            <h1> Our Courses</h1>
            <div className="courses">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>


        </div>
    );
};

export default Courses;