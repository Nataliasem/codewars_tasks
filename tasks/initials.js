function toInitials(name) {
    const initials =  name.split(' ').map(item => {
        return item.slice(0,1).toUpperCase() + '.'
    })

    return initials.join('')
}

console.log(toInitials('Наталья Сёмка'))
