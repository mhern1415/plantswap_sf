import React from 'react';
import { getPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../post.css'
import { deletePost } from '../../reducers/postReducer';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


class PostList extends React.Component {

    


    componentDidMount(props){
        this.props.getPosts();
    }

    renderList = () => {
        const myPosts = this.props.posts.filter(post => post.user_id === this.props.currentUserId);
        const sortedPosts = myPosts.sort((a, b) => b.id - a.id);
        return sortedPosts.map(post => {
            return (
                <div className="column" key={post.id}>
                    <div className="content">
                        <p>{post.date}</p>
                        <div id="title">
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            <br></br>                        
                            <div>Price: ${post.price}</div>
                            <br></br>
                            <div>Description: {post.description}</div>
                            <br></br>
                            <div>Zip: {post.zip_code}</div>
                            <br></br>
                            <div>Plant Type: {post.plant_type}</div>
                            <br></br>
                            <div><img className="photo" src={post.image_url} alt={`${this.props.title}'s picture`}  className="img-responsive" /></div>
                            <br></br>
                            <Link to={`/posts/delete`} className="ui red button" onClick={() => this.props.deletePost(post.id)}><i className="trash alternate icon"></i>
 Delete </Link>

                        </div>
                    </div>
                </div>
            )  
        })
    }



    render() {
        if (this.props.isSignedIn) {
        return (
            <div className="ui four column relaxed grid">
                {this.renderList()}
            </div>
        )
        }
        else {
            return (
                <div><h1>Please Sign In To View Your Posts</h1></div>
            )
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




export default connect(mapStateToProps, {getPosts, deletePost})(PostList);