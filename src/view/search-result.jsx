import React from 'react'
// import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Spin from 'antd/lib/spin'
import SearchList from '../component/search-list'
import style from '../style/search.module.scss'

const Search = Input.Search;

export default class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch (value) {
        console.log(value)
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
