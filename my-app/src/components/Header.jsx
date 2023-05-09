// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/users">All Users</Link>
        </div>
    );
};

export default Header;