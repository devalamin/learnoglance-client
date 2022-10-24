import React from 'react';
import { Link } from 'react-router-dom';
import navImg from '../../../images/educ.jpg'


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img className='h-8 rounded' src={navImg} alt="" />
                    <Link className="btn btn-ghost normal-case text-xl">Learnoglance</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu sm:menu-horizontal p-0">
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