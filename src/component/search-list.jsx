import React from 'react'
import PropTypes from 'prop-types'
import style from '../style/search-list.module.scss'

export default class SearchList extends React.Component {

    static propTypes = {
        listData: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            formatSize: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
            detailUrl: PropTypes.string.isRequired
        })).isRequired
    }
    render () {
        return (
            <div className={style["search-list"]}>
                {
                    this.props.listData.map(item => {
                        return (
                            <div key={item.detailUrl} className={style.item}>
                                <div className={style.name}>{ item.name }</div>
                                <span className={style.formatSize}>{ item.formatSize }</span>
                                <span className={style.count}>{ item.count }</span>
                                <div className={style.detailUrl}>{ item.detailUrl }</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
