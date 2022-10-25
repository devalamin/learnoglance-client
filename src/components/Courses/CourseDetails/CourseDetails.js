import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detailInfo = useLoaderData();
    const { name, title, title_detail, image_detail, total_view, _id } = detailInfo;
    console.log(total_view);
    return (
        <div>
            <div className='mx-auto mt-32'>
                <div className="card bg-gradient-to-r from-teal-800 to-cyan-600 bg-base- shadow-lg">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;