const newTaskElementName = document.getElementById("new-task-name")
const newTaskElementAge = document.getElementById("new-task-age")
const newTaskElementSend = document.getElementById("send-task")

console.log(newTaskElementAge);
console.log(newTaskElementAge);
console.log(newTaskElementSend);

newTaskElementSend.addEventListener('click', function () {
    console.log('ho cliccato sul bottone')
    console.log(newTaskElementName.value)
    console.log(newTaskElementAge.value)
})