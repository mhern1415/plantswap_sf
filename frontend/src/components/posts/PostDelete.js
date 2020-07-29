import React from 'react';
import { Link } from 'react-router-dom';


const PostDelete = () => {




    return (

     <div>
            <h1>Post Deleted Successfully</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1><Link to="/" className="item">
             Home
            </Link>
            </h1>
            <br></br>
            <br></br>
            <h1><Link to="/posts" className="item">
             My Posts
            </Link>
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )



}

export default PostDelete;