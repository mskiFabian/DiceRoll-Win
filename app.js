// selecting elements
const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const current0 = document.querySelector("#current--0")
const current1 = document.querySelector("#current--1")
const diceScore = document.querySelector(".dice")
const btnNewGame = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const sectionPlayer0 = document.querySelector(".player--0")
const sectionPlayer1 = document.querySelector(".player--1")

// starting conditions
score0.textContent = 0
score1.textContent = 0
diceScore.classList.add("hidden")

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

// basics values
function basicValues() {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0 
    playing = true
    
    score0.textContent = 0
    score1.textContent = 0
    current0.textContent = 0
    current1.textContent = 0

    diceScore.classList.add("hidden")
    sectionPlayer0.classList.remove("player--winner")
    sectionPlayer1.classList.remove("player--winner")
    sectionPlayer0.classList.add("player--active")
    sectionPlayer1.classList.remove("player--active")
}
basicValues()

 

// function that change player
const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    sectionPlayer0.classList.toggle("player--active")
    sectionPlayer1.classList.toggle("player--active")
}
//Rolling dice funcionality
btnRoll.addEventListener("click", function() {
    if(playing === true) {
            //1. making function for dice roll
    let randomRollDice = Math.floor( Math.random() * 6 ) + 1

    //2. display dice, remove hidden class
    diceScore.classList.remove("hidden")
    diceScore.src = `dice-${randomRollDice}.png`

    // 3. if dice roll = 1,
     if(randomRollDice !== 1) {
        currentScore += randomRollDice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
     } else {
        // switch to next player
       switchPlayer()
    }
    }
    
   
})

btnHold.addEventListener("click", function() {
    if(playing === true) {
        scores[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    //finish game at 100
        if(scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner") 
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active") 
            diceScore.classList.add("hidden")      
        } else {
            switchPlayer()
        }
    }    
    
})
btnNewGame.addEventListener("click", basicValues)


