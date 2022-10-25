import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({ title }) => {

    return (
        <div>
            <button className="btn btn-wide sm:my-3 my-2"><Link to={`/course-details/${title._id}`}>{title.title}</Link></button>
        </div>
    );
};

export default LeftSide;