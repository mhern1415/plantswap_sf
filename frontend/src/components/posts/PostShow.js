import React from 'react';
import { getPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../post.css'
import { deletePost } from '../../reducers/postReducer';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


class PostShow extends React.Component {

    


    componentDidMount(){
        this.props.getPosts();
    }
    

    render() {
        const message = "Hello. I am interested in purchasing your "
        const message2 = " that is listed on Plant Swap SF."
        const post = this.props.posts.find(post => post.id == this.props.match.params.id)
        if(typeof post !=="undefined" && typeof post.id !=="undefined" && typeof post.date !=="undefined" && typeof post.title !=="undefined" && typeof post.price !=="undefined" && typeof post.description !=="undefined" && typeof post.zip_code !=="undefined" && typeof post.plant_type !=="undefined" && typeof post.image_url !=="undefined" && typeof post.contact !=="undefined") {
            return <div className="column">
            <div className="content">
                <p>{post.date}</p>
                <div id="title">
                    <div>{post.title}</div>
                    <br></br>  
                    <button className="ui button">
                    < a target="_blank" href={`https://garden.org/plants/search/text.php?q=${post.title}`}><i className="info circle icon"></i>Plants Database Info</a>
                    </button>
                    <br></br>  
                    <br></br>                       
                    <div className="itemPrice">Price: ${post.price}</div>
                    <br></br>
                    <div>Description: {post.description}</div>
                    <br></br>
                    <div>Zip: {post.zip_code}</div>
                    <br></br>
                    <div>Plant Type: {post.plant_type}</div>
                    <br></br>
                    <div><img className="photo-large" src={post.image_url} alt={`${this.props.title}'s picture`}  className="img-large" /></div>
                    <br></br>
                    <button className="ui button">
                    <div><a href={"mailto:" + post.contact + "?subject=" + post.title + " - Plant Swap SF" + "&body=" + message + post.title + message2} target="_blank"><i className="envelope outline icon"></i>
                    Email Seller</a></div>
                    </button>
                </div>
            </div>
        </div>
;
        } else {
        return null;
        }
    }
}



    const mapStateToProps = state => {
        return {
            posts: state.postReducer.posts,
            loading: state.postReducer.loading,
            currentUserId: state.auth.userId,
            isSignedIn: state.auth.isSignedIn
        }
    }




export default connect(mapStateToProps, {getPosts, deletePost})(PostShow);