import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { setSearchField, loadSearchList } from '../store/actions/search'
// import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Spin from 'antd/lib/spin'
import SearchList from '../component/search-list'
import style from '../style/search.module.scss'

const Search = Input.Search;

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSearch () {
        const { loadSearchList } = this.props
        loadSearchList()
    }

    handleChange (e) {
        const { setSearchField } = this.props
        setSearchField(e.target.value)
    }

    componentWillMount () {
        const { location, searchWord } = this.props
        const { search } = location
        const { word } = queryString.parse(search)
        if (word !== searchWord) {
            setSearchField(word)
        }
    }

    componentDidMount () {
        const { loadSearchList } = this.props
        loadSearchList()
    }

    render () {
        const {
            result,
            isLoading,
            searchWord
        } = this.props
        return (
            <div className={style.search}>
                {/*<Button type={'primary'}>test</Button>*/}
                <div className={style.main}>
                    <Search
                        placeholder={'input search text'}
                        enterButton={'search'}
                        size={'large'}
                        value={searchWord}
                        onChange={this.handleChange}
                        onSearch={this.handleSearch}
                    />
                    <Spin spinning={isLoading}>
                        <SearchList listData={result}/>
                    </Spin>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ search }) => ({
    searchWord: search.searchWord,
    result: search.result,
    isLoading: search.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    setSearchField: function (value) {
        dispatch(setSearchField(value))
    },
    loadSearchList: function () {
        dispatch(loadSearchList())
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(SearchResult)
