import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/memes'>Memes</Link>
        </div>
    )
}

export default Header;