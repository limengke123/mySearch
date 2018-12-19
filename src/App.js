import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router'
import { configureStore } from './store'
import './App.css';

const store = configureStore()

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
