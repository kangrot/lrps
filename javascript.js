let player;
let yourScore = 0;
let opponent;
let opponentScore = 0;
let choices = ["rock", "paper", "scissors"];

window.onload = function() {
     player = prompt('Hello there, what is your name?');
    document.getElementById('player').innerHTML = player;
    for (let i = 0; i < 3; i++) {
        //<img id="rock" src="rock.png">
       let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
    }

    function selectChoice() {
        player = this.id;
        document.getElementById("your-choice").src = player + ".png";
    
        //random for oppponent
        opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
        document.getElementById("opponent-choice").src = opponent + ".png";
    
        //check for winner
        if (player == opponent) {
            yourScore += 1;
            opponentScore += 1;
        }
        else {
            if (player == "rock") {
                if (opponent == "scissors") {
                    yourScore += 1;
                }
                else if (opponent == "paper") {
                    opponentScore += 1;
                }
            }
            else if (player == "scissors") {
                if (opponent == "paper") {
                    yourScore += 1;
                }
                else if (opponent == "rock") {
                    opponentScore += 1;
                }
            }
            else if (player == "paper") {
                if (opponent == "rock") {
                    yourScore += 1;
                }
                else if (opponent == "scissors") {
                    opponentScore += 1;
                }
            }
        }
    
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("opponent-score").innerText = opponentScore;
    }
       
