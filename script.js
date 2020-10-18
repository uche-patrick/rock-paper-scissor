  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissor = document.querySelector("#scissor");

  const text = document.querySelector("#text");
  const gameplayed = document.querySelector("#gamePlayed");
  const playerScore = document.querySelector("#playerCount");
  const computerScore = document.querySelector("#computerCount");

  const restBtn = document.querySelector("#resetBtn");

    const generalBtn = document.querySelectorAll(".generalBtn button");

// this function return a random string btw rock, paper or scissor for the computer;
function computerPlay(){
   var arr = ["rock","paper","scissor"];
   var computerChoice = arr[Math.floor(Math.random()*arr.length)];
   return computerChoice;
}

function disableButtons() {
  generalBtn.forEach(elem => {
      elem.disabled = true;
  })
}

var playerCount = 0;
var computerCount = 0;
var gamePlayed = 0;

// this function picks player selection and computer selections a returns a result of win or lose.
function playRound(playerSelection, computerSelection){

 if (playerSelection == "rock"){
   if(computerSelection == "paper") {computerCount++; gamePlayed++;  return "you lose! paper beat rock";}
  else if (playerSelection == computerSelection) {gamePlayed++; return "draw";}
   else { playerCount++; gamePlayed++; return "you win! rock beat scissor";}

}

else if(playerSelection == "paper"){
  if (computerSelection == "scissor") {computerCount++; gamePlayed++; return "you lose! scissor beat paper";}
  else if(playerSelection == computerSelection) { gamePlayed++; return "draw";}
  else {playerCount++; gamePlayed++; return "you win! paper beat rock";}
}

else if (playerSelection == "scissor"){
  if (computerSelection == "rock") {computerCount++; gamePlayed++; return "you lose! rock beat scisspr";}
  else if (playerSelection == computerSelection) {gamePlayed++; return "draw";}
  else { playerCount++; gamePlayed++; return "you win! scissor beat paper";}
}

else if(playerSelection == "paper"){
  if (computerSelection == "rock"){playercount++; gamePlayed++; return "you win! paper beat rock"}
  else if (playerSelection == computerSelection) { gamePlayed++; return "draw";}
  else {computerCount++; gamePlayed++; return "you lose! rock beat scissor"}
}

else if (playerSelection == "scissor"){
if (computerSelection == "paper"){playerCount++; gamePlayed++; return "you win! scissor beat paper"}
else if (playerSelection == computerSelection) {gamePlayed++;  return "draw";}
else {computerCount++; gamePlayed++; return "you lose paper beat rock"}
}

else if(playerSelection == "rock"){
  if(computerSelection == "scissor") {playerCount++; gamePlayed++; return "you win rock beat scissor"}
  else if (playerSelection == computerSelection) {gamePlayed++; return "draw";}
  else {computerCount++; gamePlayed++; return "you lose scissor beat paper"}
}

}


  //  this function calls for user's input 5 times and out the result final result; lose, win or draw
function game(playerPick){
    
 text.textContent =  (playRound(playerPick, computerPlay() ));
 gameplayed.textContent = "Game played: " +  gamePlayed;
 playerScore.textContent = "Player won: " +  playerCount;
 computerScore.textContent = "Player lost " + computerCount;

 if (playerCount === 5 && playerCount > computerCount){
   text.textContent = "YOU WIN THIS ROUND CONGRATULATIONS";
   text.style.color = "green";
   disableButtons();
 }

 else if(computerCount ===5 && computerCount > playerCount){
   text.textContent = "YOU LOSE THIS ROUND TRY AGAIN";
   text.style.color = "red";
   disableButtons();
 }
 
}

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissor.addEventListener("click", () => game("scissor"));



// resets game after a round

function resetGame(){
  restBtn.addEventListener("click", () => location.reload() );
}

resetGame();
