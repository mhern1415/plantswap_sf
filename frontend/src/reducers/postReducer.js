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
            default:
                return state;
        }
}