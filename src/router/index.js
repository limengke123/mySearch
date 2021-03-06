import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../view/home'
import About from '../view/about'
import User from '../view/user'
import SearchView from '../view/search-result'

export default class AppRouter extends React.Component {
    render () {
        return (
            <Router>
                <Fragment>
                    <Route path={'/'} component={Home} exact/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/user'} component={User}/>
                    <Route path={'/search'} component={SearchView}/>
                </Fragment>
            </Router>
        )
    }
}

