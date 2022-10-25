import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../images/person.jpg'

const Home = () => {
    return (
        <div className='text-center'>
            <h2 className='font-bold sm:text-4xl my-6 text-teal-700'>Learn To Serve Your Nation</h2>
            <div className='w-9/12 mx-auto'>
                <div className="card glass">
                    <figure><img src={person} alt="car!" /></figure>
                    <div className="card-body bg-gradient-to-r from-cyan-300 to-teal-500">
                        <h2 className="card-title">Wisdom Is Power</h2>
                        <p>Create A Nation Educated</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-sky-800"><Link to='/courses'>Learn now!</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;