import instance from './index'

export const fetchLinks = function (data) {
    return instance.post('/magnet/search', data)
}
