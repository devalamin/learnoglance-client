import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkOutCourse = useLoaderData();
    const { name, title } = checkOutCourse;
    console.log(checkOutCourse);
    return (
        <div className='sm:mt-16'>
            <div className="card text-white bg-gradient-to-r from-cyan-800 to-teal-700 mx-auto sm:w-3/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p>Buy Our Premium <span className='text-2xl text-teal-100 font-semibold'>{name}</span> Course </p>
                    <div className="card-actions justify-end sm:my-4">
                        <Link className='py-2 sm:px-6 px-2 bg-cyan-900 rounded'>Buy This Course</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;