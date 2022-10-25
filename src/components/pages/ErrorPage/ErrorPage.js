import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <div className="card mx-auto bg-base-100 shadow text-center">
                <div className="card-body text-center">
                    <h2 className="card-title text-4xl font-bold mx-auto sm:my-10">404</h2>
                    <p className='sm:text-3xl text-teal-700'>Are You Lost?</p>
                    <p>Find Yourself <Link className='text-red-900 underline' to='/'>Here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;