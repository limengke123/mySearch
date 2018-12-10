
class DateUtil {
    constructor(date = new Date()) {
        this.date = date
    }
    setDate (date) {
        this.date = date
    }
    getDate (date) {
        return this.date
    }
    static getFormatDate (date) {
        const [ year, month, day ] = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ]
        return `${year}-${month}-${day}`
    }

}

export {
    DateUtil
};
