import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import navImg from '../../../images/educ.jpg'




const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='sm:mx-10'>
            <div className="navbar bg-base-100">
                <div className="flex-1 ">
                    <img className='h-8 rounded' src={navImg} alt="" />
                    <Link className="btn btn-ghost normal-case sm:text-xl">LearnoGlance</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu sm:menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Dark</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/registration'>Registration</Link></li>
                    </ul>
                    {
                        user?.uid ? <><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='h-12 duration-700 rounded-full relative' src={user?.photoURL} alt="" />
                            {isHovering && <span className='mt-10 duration-700 absolute top-6 right-44 font-bold text-xl'>{user?.displayName}</span>}

                            <span onClick={handleLogOut} className='bg-teal-700 py-2 px-4 ml-2 rounded text-red-900 cursor-pointer font-bold'>Log Out</span>

                        </>

                            : <></>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;