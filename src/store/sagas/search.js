import { put, all} from 'redux-saga'
import { fork, takeLatest, select } from 'redux-saga/effects'
import actionType from '../actionType'
import { fetchLinks } from '../../service/search'
import { getSearchWord } from '../selectors/search'

const loadList = function* () {
    const searchWord = yield select(getSearchWord)
    console.log('sagas', searchWord)
}

const watchLoadList = function* () {
    yield takeLatest(actionType.LOAD_SEARCH_LIST, loadList)
}

export const searchSagas = [
    fork(watchLoadList)
]
