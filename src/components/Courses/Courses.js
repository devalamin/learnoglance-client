import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course/Course';

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
            <div className='grid sm:grid-cols-2 grid-cols-1'>
                <div className=' text-white sm:py-4'>
                    {
                        courses.map(title => <p
                            key={title.id} className='sm:my-6'><button className="btn btn-wide"><Link>{title.title}</Link></button></p>)

                    }
                </div>
                <div className='grid sm:grid-cols-2'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Courses;