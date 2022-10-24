import React from 'react';
import { Link } from 'react-router-dom';
import navImg from '../../../images/educ.jpg'


const Header = () => {
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;