import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchApp from './reducers'
import sagas from './sagas'

export function configureStore () {
    const sagaMiddleware = createSagaMiddleware()
    let middleware = applyMiddleware(sagaMiddleware)
    const store = createStore(
        searchApp,
        composeWithDevTools(middleware)
    )
    sagaMiddleware.run(sagas)

    return store
}
