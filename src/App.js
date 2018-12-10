import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import searchApp from './store/reducers'
import AppRouter from './router'
import './App.css';

const store = createStore(searchApp)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
  }
}

export default App;
