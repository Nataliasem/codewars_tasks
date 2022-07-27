/* посчитать сумму count для всех объектов с name = a */

let test = [
    {
        id: '1',
        count: 2,
        name: 'a'
    },
    {
        id: '2',
        count: 1,
        name: 'a',
        children: [
            {
                id: '3',
                count: 2,
                name: 'a'
            },
            {
                id: '4',
                count: '4',
                name: 'b',
                children: [
                    {
                        id: '5',
                        name: 'a',
                        count: 6,
                        children: [
                            {
                                id: '6',
                                name: 'b',
                                count: 3
                            },
                            {
                                id: '7',
                                name: 'a',
                                count: 3
                            },
                            {
                                id: '8',
                                name: 'c',
                                count: 3
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: '9',
        count: 1,
        name: 'a'
    },
]



let sum = 0

function iterate(arr) {
    for (let item of arr) {
        if(item.children && item.children.length) {
            iterate(item.children)
        }

        if (item.name === 'a') {
            sum += item.count
        }
    }
}

iterate(test)

console.log(sum)


