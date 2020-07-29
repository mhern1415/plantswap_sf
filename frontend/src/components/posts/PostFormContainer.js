import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addPost } from '../../actions'

class PostFormContainer extends React.Component {




    render(){
        if (this.props.isSignedIn) {
    return (
     <div>
            <h1>Post Your Plant!</h1>
            <div><PostForm addPost={this.props.addPost} history={this.props.history} /></div>
        </div>
    )
    }
    else {
        return (
        <div>
        <br></br>
        <br></br>
        <h1>Please Sign In!</h1>
        <br></br>
        </div>
        )
    }
}
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
};
};

export default connect(mapStateToProps, { addPost })(PostFormContainer);