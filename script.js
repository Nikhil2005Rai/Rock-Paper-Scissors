const gameOpts = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    // console.log(num)
    return gameOpts[num]
}

console.log(getComputerChoice())