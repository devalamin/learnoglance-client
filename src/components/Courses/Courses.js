import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course/Course';
import LeftSide from './LeftSide/LeftSide';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);

    return (
        <div className='sm:mx-10 sm:mt-20 mt-3'>
            <div className='sm:flex'>
                <div className=' text-white sm:py-4 sm:w-80'>
                    {
                        courses.map(title => <LeftSide title={title} key={title._id}></LeftSide>)

                    }
                </div>
                <div className='grid sm:grid-cols-2 sm:gap-3 gap-1 sm:w-9/12'>
                    {
                        courses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Courses;