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
    let ages = []
    let kilometers = []
    console.log(ticketPrice(ages, kilometers))
    const price = newtaskkilometers * 0.21;
    const FinalPrice = price - discount
    let discount = 0;
})



function ticketPrice(ages, kilometers) {
    let finalticketPrice = []
    if (newTaskElementAge < 18) {
        discount = price * 0.2
    }
    else if (newTaskElementAge > 65) {
        discount = price * 0.4
    }



    return finalticketPrice
}



console.log(FinalPrice.toFixed(2))