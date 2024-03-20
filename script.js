const gameOpts = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    // console.log(num)
    return gameOpts[num]
}

function gameRound(userChoice, computerChoice){
    if(!gameOpts.includes(userChoice)){
        return "Invalid input"

    }
    console.log(`You chose ${userChoice}`)
    console.log(`Computer chose ${computerChoice}`)
    if(userChoice === computerChoice){
        return "It's a TIE!!!"
    }
    else if(userChoice === "rock" && computerChoice === "paper" ||userChoice === "paper" && computerChoice === "rock"||userChoice === "scissors" && computerChoice === "paper"){
        return "You WON!!!"
    }
    else{
        return "You LOST!!!"
    }
}



let userChoice = prompt("Enter RPS?").toLowerCase()

// console.log(getComputerChoice())

console.log(gameRound(userChoice, getComputerChoice()))
