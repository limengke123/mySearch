// import {all} from 'redux-saga'
import { fork, takeLatest, select, call, put } from 'redux-saga/effects'
import actionType from '../actionType'
import { fetchLinks } from '../../service/search'
import { getSearchWord } from '../selectors/search'
import { setIsLoading, setSearchList } from '../actions/search'

const loadList = function* () {
    yield put(setIsLoading(true))
    const searchWord = yield select(getSearchWord)
    try {
        const result = yield call(fetchLinks, {
            website: '种子搜',
            key: searchWord,
            page: '1'
        })
        console.log(result)
        yield put(setSearchList(result.data.results))
    } catch (e) {
        console.log(e)
    } finally {
        yield put(setIsLoading(false))
    }
}

const watchLoadList = function* () {
    yield takeLatest(actionType.LOAD_SEARCH_LIST, loadList)
}

export const searchSagas = [
    fork(watchLoadList)
]
