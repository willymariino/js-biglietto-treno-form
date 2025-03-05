const newTaskElementName = document.getElementById("new-task-name")
const newTaskElementAge = document.getElementById("new-task-age")
const newtaskkilometers = document.getElementById('new-task-kilometers')
const newTaskElementSend = document.getElementById("send-task")


console.log(newTaskElementName)
console.log(newTaskElementAge)
console.log(newtaskkilometers)
console.log(newTaskElementSend)

newTaskElementSend.addEventListener('click', function () {
    console.log('ho cliccato sul bottone')
    console.log(newTaskElementName.value)
    console.log(newTaskElementAge.value)
    console.log(newtaskkilometers.value)
})

const price = newtaskkilometers * 0.21;
let discount = 0;

function ticketPrice(ages, kilometers) {
    let ticketPrice = []
    if (newTaskElementAge < 18) {
        discount = price * 0.2
    }
    else if (newTaskElementAge > 65) {
        discount = price * 0.4
    }



    return ticketPrice
}

const FinalPrice = price - discount
console.log(ticketPrice())
console.log(FinalPrice.toFixed(2))