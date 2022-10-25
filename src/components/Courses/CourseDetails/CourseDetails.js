import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detailInfo = useLoaderData();
    console.log(detailInfo);
    const { name, title, title_detail, img_detail, total_view, _id, details } = detailInfo;
    console.log(total_view);
    return (
        <div className='mx-16'>
            <div className='mx-auto sm:mt-20 mt-3'>
                <div className="card bg-gradient-to-r from-teal-800 to-cyan-600 bg-base- shadow-lg">
                    <figure className="sm:px-10 sm:pt-10">
                        <img src={img_detail} alt="Shoes" className="rounded" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title sm:text-3xl sm:font-bold text-teal-300">{title}</h2>
                        <p className='text-white sm:text-xl'>{title_detail}</p>
                        <div className='sm:p-10 bg-teal-500 sm:my-4 my-1'>
                            <p className='text-start sm:p-5 p-2'>{details}</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn bg-cyan-900"><Link to={`/checkout/${_id}`}>Get premium access!</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;