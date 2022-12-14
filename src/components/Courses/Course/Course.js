import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, _id, image, name } = course;
    console.log(_id);
    console.log(title);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-700 to-teal-800 ">
                <figure><img className='sm:h-52 h-28' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{name}</h2>
                    <p></p>

                    <div className="card-actions justify-end">

                        <Link className='py-2 px-6 rounded bg-gradient-to-r from-cyan-100 to-teal-200 text-gray-700' to={`/course-details/${_id}`}>Start Lesson</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;