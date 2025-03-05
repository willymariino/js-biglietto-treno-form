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
    //console.log(FinalPrice.toFixed(2))

    // convertire gli input in numeri
    const age = parseInt(newTaskElementAge.value)
    const kilometers = parseInt(newtaskkilometers.value)
    let discount = 0

    const price = kilometers * 0.21


    if (age < 18) {
        discount = price * 0.2
    }
    else if (age > 65) {
        discount = price * 0.4
    }

    const FinalPrice = price - discount
    console.log(FinalPrice.toFixed(2))
})