import React from 'react';
import { getPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../post.css'
///import { deleteContact } from '../../reducers/contactReducer';

class PostAll extends React.Component {

    componentDidMount(props){
        this.props.getPosts();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="column" key={post.id}>
                    <div className="content">
                        <p>{post.date}</p>
                        <div id="title">
                            <div> Title: {post.title}</div>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <ul>
                                <li>Price: ${post.price}</li>
                                <li>Description: {post.description}</li>
                                <li>Zip: {post.job_title}</li>
                                <li>Plant Type: {post.plant_type}</li>
                            </ul>
                            <div><img className="photo" src={post.image_url} alt={`${this.props.title}'s picture`}  className="img-responsive" /></div>
                            <div><a href={"mailto:" + post.contact}>Click Here To Email Seller</a></div>
    
                        </div>
                    </div>
                </div>
            )  
        })
    }



    render() {
        return (
            <div className="ui four column relaxed grid">
                {this.renderList()}
            </div>
        )
    }
}

    const mapStateToProps = state => {
        return {
            posts: state.postReducer.posts,
            loading: state.postReducer.loading,
            currentUserId: state.auth.userId
        }
    }




export default connect(mapStateToProps, {getPosts})(PostAll);