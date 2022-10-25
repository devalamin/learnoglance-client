import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    const { googleSignInProvider, githubLoginProvider, LogIn } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error.message))
    }

    const handleGithubLogin = () => {
        githubLoginProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => setError(error))

    }

    const handleLoginSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                navigate(from, { replace: true })

            })
            .catch(error => setError(error.message))


    }

    return (
        <div>
            <div className="w-1/3 mx-auto bg-white shadow-md rounded">
                <form onSubmit={handleLoginSubmission} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='email' type="text" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******" />

                    </div>
                    <div>
                        {error ? <span className='text-red-900'>{error}</span> : <></>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <div className='mx-auto text-center'>
                    <p>Don't Have An Account? <Link className='underline text-blue-600' to='/registration'>Create One</Link></p>
                    <br />
                    <span>Or</span>
                </div>
                <div className='grid text-center'>
                    <button onClick={handleGoogleSignIn} className="mx-auto bg-teal-700 hover:bg-cyan-900 sm:w-2/4 my-4 text-white font-bold rounded focus:outline-none focus:shadow-outline" type="button">
                        <p className='flex py-2 px-2'>
                            <span><FaGoogle className='text-yellow-300 mr-3 mb-0' /></span> Sign in with Google
                        </p>
                    </button>
                    <button onClick={handleGithubLogin} className="mx-auto bg-teal-700 hover:bg-cyan-900 sm:w-2/4 my-4 text-white font-bold rounded focus:outline-none focus:shadow-outline" type="button">
                        <p className='flex py-2 px-2'>
                            <span><FaGithub className=' mr-3 mb-0' /></span> Sign in with Github
                        </p>
                    </button>
                </div>
                <p className="text-center text-gray-500 text-xs my-4 py-4">
                    &copy;2022 Learno Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;