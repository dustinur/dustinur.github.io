$(document).ready(function(){
  $( "#rock, #paper, #scissors" ).click(function() {

    let rps = ["rock", "paper", "scissors"];
    const randomRPS = () => Math.floor(Math.random() * 3);

    let playerChoice = this.id;
    alert( `You chose ${playerChoice}` );
    let aiChoice = rps[randomRPS()];
    alert( `AI chooses ${aiChoice}` );

    let bothChoices = [ playerChoice, aiChoice ]

    if (bothChoices.includes("rock") && bothChoices.includes("paper")) {
        playerChoice.includes("paper") ? alert("You win!") : alert("AI wins!");
    } else if (bothChoices.includes("rock") && bothChoices.includes("scissors")) {
        playerChoice.includes("rock") ? alert("You win!") : alert("AI wins!");
    } else if (bothChoices.includes("scissors") && bothChoices.includes("paper")) {
        playerChoice.includes("scissors") ? alert("You win!") : alert("AI wins!");
    } else {
        alert("Tie");
    }
  });
});
