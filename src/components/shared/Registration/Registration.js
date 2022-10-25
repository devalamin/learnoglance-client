import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div class="w-1/3 mx-auto bg-white shadow-md rounded">
                <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='email' type="text" placeholder="email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-teal-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <Link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <div className='grid text-center'>
                    <button class="mx-auto bg-teal-700 hover:bg-cyan-900 sm:w-2/4 my-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <p>
                            Sign in with Google
                        </p>
                    </button>
                    <button class="mx-auto bg-cyan-700 hover:bg-teal-900 sm:w-2/4 my-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <p>
                            Sign in with Github
                        </p>
                    </button>
                </div>
                <p class="text-center text-gray-500 text-xs my-4 py-4">
                    &copy;2022 Learno Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Registration;