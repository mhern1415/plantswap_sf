import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
       
      
        <div className="header">
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                All Posts
            </Link>
            <div className="center menu">
                <Link to="/posts/new" className="item">
                    Add Post
                </Link>
            </div>
            <div className="right menu">
                <Link to="/posts" className="item">
                    My Posts
                </Link>
                <GoogleAuth />
            </div>
        </div>
        </div>
    );
};

export default Header;