import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Input from 'antd/lib/input'
import { withRouter } from 'react-router-dom'
// import logo from "../logo.svg";
import style from '../style/home.module.scss'
import { fetchLinks } from '../service/search'
import { setSearchField } from '../store/actions/search'

const Search = Input.Search

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const { setSearchField } = this.props
        console.log(e)
        setSearchField(e.target.value)
    }

    handleSearch (value) {
        console.log(value)
        // fetchLinks({
        //     website: '种子搜',
        //     key: '毒液',
        //     page: '1'
        // }).then(res => {
        //         console.log(res)
        // })
        const {history} = this.props
        history.push('/search')
    }

    render () {
        const { searchField } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <div className={style.home}>
                        <Search
                            value={searchField}
                            size={'large'}
                            placeholder={'input search text'}
                            enterButton={'search'}
                            onChange={this.handleChange}
                            onSearch={this.handleSearch}/>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setSearchField: function (value) {
            console.log(value)
            dispatch(setSearchField(value))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Home)
