import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addPost } from '../../actions'

class PostFormContainer extends React.Component {




    render(){
    return (
     <div>
            <h3>FormContainer Post</h3>
            <div><PostForm addPost={this.props.addPost} history={this.props.history} /></div>
        </div>
    )
    }


}

export default connect(null, { addPost })(PostFormContainer);