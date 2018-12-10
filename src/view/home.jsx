import React from 'react'
import Input from 'antd/lib/input'
import { withRouter } from 'react-router-dom'
// import logo from "../logo.svg";
import style from '../style/home.module.scss'
import { fetchLinks } from '../service/search'

const Search = Input.Search

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
    }


    handleSearch (value) {
        console.log(value)
        fetchLinks({
            website: '种子搜',
            key: '毒液',
            page: '1'
        }).then(res => {
                console.log(res)
        })
        // const {history} = this.props
        // history.push('/search')
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
