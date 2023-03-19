const arr = ["rock","paper","scissors"];
const container1 = document.querySelector(".container");
const container2 = document.querySelector(".container1");
    
const choiceButtons = document.querySelectorAll(".choice-btn");
const optionsDiv = document.querySelector(".options");
    
const resultsDiv = document.querySelector(".display");
const resultDivs = document.querySelectorAll(".display_result");
const resultWinner = document.querySelector(".display_winner");
const resultText = document.querySelector(".display_text");
const playAgainBtn = document.querySelector(".play-again");
    
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const RulesDiv = document.querySelector(".rules");

const resetBtn = document.querySelector(".reset-btn");
    
const nextbtn = document.querySelector(".next-btn");
const playAgainBtn1 = document.querySelector(".play-again1");
      
const user_scoreNumber = document.querySelector(".user_score_number");
const pc_scoreNumber = document.querySelector(".pc_score_number");
    
let user_score = 0;
let pc_score = 0;
    
//Local Storage
let uscore = localStorage.getItem("userScore");
let pscore = localStorage.getItem("pcScore");
if(uscore != undefined)
{
  user_score = uscore;
}
if(pscore != undefined)
{
  pc_score = pscore;
}
user_scoreNumber.innerText = user_score;
pc_scoreNumber.innerText = pc_score;
    
// Main Logic
choiceButtons.forEach((button) => {
button.addEventListener("click", () => {
  const choiceName = button.dataset.choice;
    choose(choiceName);
  });
});
      
function choose(choice) {
  const pcChoice = pcChoose();
  displayResults([choice, pcChoice]);
  displayWinner(choice, pcChoice);
}
      
function pcChoose() {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
      
function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <div class="choice ${results[idx]}">
          <img src="img/${results[idx]}.png" alt="${results[idx]}" />
        </div>
          `;
    }, idx * 500);
  });
      
  optionsDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}
      
function displayWinner(choice,pcChoice) {
  setTimeout(() => {
    if(choice == "rock"){
      if(pcChoice == "paper"){
        pcWin();
      }
      else if(pcChoice =="scissors"){
        userWin();
      }
      else{
        draw();
      }
    }
    else if(choice == "paper"){
      if(pcChoice == "rock"){
        userWin();
      }
      else if(pcChoice == "scissors"){
        pcWin();
      }
      else{
        draw();
      }
    }
    else if(choice == "scissors"){
      if(pcChoice == "rock"){
        pcWin();
      }
      else if(pcChoice == "paper"){
        userWin();
      }
      else{
        draw();
      }
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 500);
}
      
function userWin(){
  resultText.innerText = "you win";
  playAgainBtn.innerText = "play again";
  resultDivs[0].classList.toggle("winner");
  user_scoreNumber.innerText = ++user_score;     //Increase user score and assign value in  user score div.
  localStorage.setItem("userScore",user_score);  //Assign user score into local storage.
  rulesBtn.style.right = "12rem";
  nextbtn.style.display = "block";
        
}
function pcWin()
{
  resultText.innerText = "you lose";
  playAgainBtn.innerText = "play again";
  resultDivs[1].classList.toggle("winner");
  pc_scoreNumber.innerText = ++pc_score;       //Increase pc score and assign value in  pc score div.
  localStorage.setItem("pcScore",pc_score);    // Assign pc score into local storage. 
        
}
function draw(){
  resultText.innerText = "draw";
  playAgainBtn.innerText = "replay";
}
// Play Again
function playAgain(){ 
  optionsDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
  nextbtn.style.display = "none";
  rulesBtn.style.right = "2rem";
      
  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });
      
  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
};
      
// Rules
function rule(){
  RulesDiv.classList.toggle("show-rules");
};    
closeBtn.addEventListener("click", () => {
  RulesDiv.classList.toggle("show-rules");
});

//Reset
function reset(){
  localStorage.clear();
  location.reload();
}
    
//congratulation page
function next(){
  container1.classList.toggle("hidden");
  container2.classList.toggle("hidden");
  optionsDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
  nextbtn.style.display = "none";
  rulesBtn.style.right = "2rem";
  resetBtn.classList.toggle("hidden");
};
/*Play Again*/
function playAgain1(){
  container1.classList.toggle("hidden");
  container2.classList.toggle("hidden");
  resetBtn.classList.toggle("hidden");
  resultDivs.forEach((resultDiv) => {
   resultDiv.innerHTML = "";
   resultDiv.classList.remove("winner");
  });
      
  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
        
};