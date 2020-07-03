import { SIGN_IN, SIGN_OUT } from './types';
import posts from '../apis/posts';
import axios from 'axios'

export const signIn = (userId, userEmail) => {
    return {
        type: SIGN_IN,
        payload: userId,
        payloadEmail: userEmail
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const addPost = (post, history) => {
    return dispatch => {
      return fetch('http://localhost:3002/posts', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({post})
      }).then(resp => resp.json())
        .then(post => {
            dispatch({type: "ADD_POST", post})
            history.push('/posts')
        }
      )
    }
  }

  export const getPosts = () => {
    return dispatch => {
        dispatch({type: "LOADING_POSTS"});
        return fetch ('http://localhost:3002/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({type: "LOADED_POSTS", payload: posts}))
    }
}

export const destroyPost = (id) => {
    return fetch(`http://localhost:3002/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'applications/json',
            'Content-Type': 'application/json'
        }
    })
}