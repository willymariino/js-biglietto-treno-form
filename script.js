const newTaskElementName = document.getElementById("new-task-name")
const newTaskElementAge = document.getElementById("new-task-age")
const newtaskkilometers = document.getElementById('new-task-kilometers')
const newTaskElementSend = document.getElementById("send-task")
const ticketPriceElement = document.getElementById('ticket-price')



newTaskElementSend.addEventListener('click', function () {
    console.log('ho cliccato sul bottone')
    console.log(newTaskElementName.value)
    console.log(newTaskElementAge.value)
    console.log(newtaskkilometers.value)
    //console.log(FinalPrice.toFixed(2))

    // convertire gli input in numeri
    const age = parseInt(newTaskElementAge.value)
    const kilometers = parseInt(newtaskkilometers.value)

    /*l'utente inserisce età e chilometri nei campi di input
    quando clicca il bottone li leggiamo e li convertiamo in numeri con le variabili sopra
  salvo il risultato della funzione per il calcolo biglietto, nella variabile FinalPrice */
    const FinalPrice = calculateTicketPrice(age, kilometers)


    // stampa il prezzo del biglietto
    console.log("prezzo del biglietto: €" + FinalPrice.toFixed(2))

    //mostra il risultato in pagina
    ticketPriceElement.textContent = newTaskElementName.value + ",  " + " il prezzo del tuo biglietto è: €" + FinalPrice.toFixed(2)

})

// aggiungo la funzione per calcolare il prezzo del biglietto con sconti

function calculateTicketPrice(età, kilometri) {
    let discount = 0
    let price = kilometri * 0.21

    if (età < 18) {
        discount = price * 0.2
    }
    else if (età > 65) {
        discount = price * 0.4
    }

    return price - discount
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Controlla se l'utente ha già selezionato il tema scuro in precedenza
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Funzione per cambiare tema
themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});