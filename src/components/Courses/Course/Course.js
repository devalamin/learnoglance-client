import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, id, image, name } = course;
    console.log(title);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-700 to-teal-800 ">
                <figure><img className='sm:h-52 h-28' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{name}</h2>
                    <p></p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-r from-cyan-100 to-teal-200 text-gray-700"><Link>Start Lesson</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;