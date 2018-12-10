import axios from 'axios'
import md5 from 'md5'
import { DateUtil } from '../util/index'

const SECRET_STRING = 'qws8c12kas'

const getToken = () => {
    return md5(DateUtil.getFormatDate(new DateUtil().date) + SECRET_STRING).toUpperCase()
}

console.log(getToken())
const instance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'token': getToken()
    }
})

export default instance
