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
    }

    handleSearch (value) {
        console.log(value)
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
        const listData = [
            {
                name: '毒液',
                formatSize: '2.2g',
                count: '3028-12--5',
                detailUrl: 'http://bsdjkaaidu.com'
            },
            {
                name: '毒液',
                formatSize: '2.2g',
                count: '3028-12--5',
                detailUrl: 'http://baidufdsakss.com'
            }
        ]
        return (
            <div className={style.search}>
                {/*<Button type={'primary'}>test</Button>*/}
                <div className={style.main}>
                    <Search
                        placeholder={'input search text'}
                        enterButton={'search'}
                        size={'large'}
                        onSearch={this.handleSearch}
                    />
                    <Spin spinning={false}>
                        <SearchList listData={listData}/>
                    </Spin>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ search }) => ({
    searchWord: search.searchWord
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
