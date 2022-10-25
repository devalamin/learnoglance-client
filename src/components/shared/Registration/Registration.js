import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Registration = () => {

    const { createNewUser } = useContext(AuthContext);

    const createUserSubmission = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)
    }

    return (
        <div>
            <div className="w-1/3 mx-auto bg-white shadow-md rounded">
                <form onSubmit={createUserSubmission} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Your Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Photo Link
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='photo' type="text" placeholder="photo url" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='email' type="text" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******" />

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>

                    </div>
                </form>
                <div className='p-4'>
                    <p>Already Have An Account? <Link className='underline text-blue-800' to='/login'>Log In</Link></p>
                </div>

                <p className="text-center text-gray-500 text-xs my-4 py-4">
                    &copy;2022 Learno Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Registration;