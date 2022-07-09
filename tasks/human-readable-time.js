function humanReadable (seconds) {
    if(seconds === 0) {
        return '00:00:00'
    }

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const sec = Math.floor(seconds % 60)

    const time = [hours, minutes, sec].map(item => {
        if(item === 0) {
            return '00'
        }

        if(item < 10) {
            return '0' + item
        }

        return item
    })


    return time.join(':')
}
