export default (state = {contacts: [], loading: false}, action) => {
    switch (action.type){
        case "ADD_CONTACT":
            return {
                ...state,
                loading: false,
                contacts: [...state.contacts, action.contact]
            }
            default:
                return state;
        }
}