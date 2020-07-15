import { destroyPost } from '../actions';

export const deletePost = (id, history) => {
    return (dispatch) => {
        destroyPost(id).then(() => dispatch(removePost(id)))
    }
    history.push('/')
}


export const removePost = (id) => ({type: 'DELETE_POST'})



export default (state = {posts: [], loading: false}, action) => {
    switch (action.type){
        case "ADD_POST":
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.post]
            }
        case "LOADING_POSTS":
            return {
                ...state,
                loading: true
            }
        case "LOADED_POSTS":
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
            case "DELETE_POST":
            const posts = state.posts.filter(post => post.id !==action.id)
            return {
                ...state,
                posts
            }
            case "POST_REPLACE":
            return {
            ...state,
            posts: state.posts
            .map(post => post.id === action.payload.id ? action.payload : post)
            }
            default:
                return state;
        }
}