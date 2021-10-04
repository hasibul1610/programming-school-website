import React from 'react';
import FeatureCourses from '../FeatureCourses/FeatureCourses';
import Scholarship from '../Scholarship/Scholarship';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Scholarship></Scholarship>
            <FeatureCourses></FeatureCourses>
        </div>
    );
};

export default Home;