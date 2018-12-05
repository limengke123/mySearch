import React from 'react'
import Input from 'antd/lib/input'
import { withRouter } from 'react-router-dom'
// import logo from "../logo.svg";
import style from '../style/home.module.scss'

const Search = Input.Search

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
    }


    handleSearch (value) {
        console.log(value)
        const {history} = this.props
        history.push('/search')
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <div className={style.home}>
                        <Search
                            size={'large'}
                            placeholder={'input search text'}
                            enterButton={'search'}
                            onSearch={this.handleSearch}/>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Home)
