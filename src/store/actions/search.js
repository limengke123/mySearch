import actionType from '../actionType'

export const setSearchField = (field) => ({
    type: actionType.SET_SEARCH_FIELD,
    payload: field
})

export const setSearchList = (result) => ({
    type: actionType.SET_RESULT,
    payload: result
})

export const setIsLoading = (isLoading) => ({
    type: actionType.SET_IS_LOADING,
    payload: isLoading
})
