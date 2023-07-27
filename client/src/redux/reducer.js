const initialState = {
    store: [{
        name: "gino"
    }],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                store: action.payload
            }
        case 'EDIT_DATA':
            return {
                ...state,
                store: state.store.find(x => x.task._id === action.payload._id ? action.payload : null)
            }
        case 'REMOVE_DATA':
            return {
                store: state.store.filter(x => x.task._id !== action.payload._id)
            }
        default:
            return state;
    }
}


export default reducer;