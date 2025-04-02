let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
let counth = 0
let countg = 0

// Home   ..............................
function onepointh() {
    counth += 1
    homeScore.textContent = counth
}

function twopointh() {
    counth += 2
    homeScore.textContent = counth
}

function threepointh() {
    counth += 3
    homeScore.textContent = counth
}



// Guest   .............................
function onepointg() {
    countg += 1
    guestScore.textContent = countg
}

function twopointg() {
    countg += 2
    guestScore.textContent = countg
}

function threepointg() {
    countg += 3
    guestScore.textContent = countg
}


function newgame() {
    guestScore.textContent = 0
    homeScore.textContent = 0
    counth = 0
    countg = 0
}
