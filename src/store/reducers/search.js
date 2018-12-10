import actionTypes from '../actionType'

const search = (state = {
    searchWord: '',
    result: [],
    isLoading: false
}, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_FIELD:
            return {
                ...state,
                searchWord: action.payload
            }
        case actionTypes.SET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default search
