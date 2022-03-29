// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
//     input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.
//
//     Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
//
// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times
//
// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.
//
// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
    // делим на n массивов через одного. Каждый n-ый отправляется в свой массив по очереди

    // количество массивов для разбиения = 3
    // i+1 отправляется в массив i+1
    // до тех пор, пока не закончатся элементы в массиве

    let boxes = {}
    for (let i = 0; i < n; i++) {
        boxes[i] = []
    }

    // console.log(boxes)

    let size = n;
    let subarray = [];
    for (let i = 0; i <Math.ceil(customers.length/size); i++){
        subarray[i] = customers.slice((i*size), (i*size) + size);
    }
    console.log(subarray);

    // for (let i = 0; i < n; i++) {
    //     boxes[i].push(subarray[i][i])
    // }

    // console.log(boxes)

    subarray.forEach((item, index)=> {
        // console.log(item)
        // console.log(index)
        item.forEach((item, index) => {
            console.log(item[index])
        })

        // boxes[index].push(item[index])
        // console.log(item)
    })

    boxes[0].push(subarray[0][0])
    boxes[0].push(subarray[1][0])
    boxes[0].push(subarray[2][0])
    boxes[0].push(subarray[3][0])




    boxes[0].push(subarray[0][0])
    boxes[1].push(subarray[0][1])
    boxes[2].push(subarray[0][2])

    boxes[0].push(subarray[1][0])
    boxes[1].push(subarray[1][1])
    boxes[2].push(subarray[2][2])

    boxes[0].push(subarray[2][0])
    boxes[1].push(subarray[2][1])
    boxes[2].push(subarray[1][2])

    boxes[0].push(subarray[3][0])
    boxes[1].push(subarray[3][1])
    boxes[2].push(subarray[3][2])

    // console.log(boxes)
}

queueTime([2,2,3,3,4,4,5,5,6,2,4,5], 3)