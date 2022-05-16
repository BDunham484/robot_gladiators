var playerName = window.prompt("What is your robot's name?");
var playerHealth = 20;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Gamma-X", "Techno-Kill", "Omega-Unit"];
var enemyHealth = 15;
var enemyAttack = 12;





//start fight() function expression
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    //start while() loop
    while(playerHealth > 0 && enemyHealth > 0) {
        //give the players the option to fight or skip the battle
        var promptFight = window.prompt("Enter 'FIGHT' or 'SKIP' to proceed.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney: ", playerMoney);
                break;
            //if no (false), ask question again by running fight() again
            }
        }
        //if player chooses to fight, then fight
        // if (promptFight === "fight" || promptFight === "FIGHT") {
            //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemeyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            )
            //check my enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                //award player money for winning
                playerMoney = playerMoney + 20;
                //leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            //log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //leave while() loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        // } else {
        //     window.alert("You need to choose a valid option. Try again.");
        // } 
    }
    //end while() loop 
}
//end fight() function expression




//start function expression to start new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //start fight() function call within for loop
    for(var i = 0; i < enemyNames.length; i++) {
        
        if (playerHealth > 0) {
            //let the player know what round they are starting
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + "!");
            

            //pick new enemy to fight based on index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            console.log("Up next is " + pickedEnemyName + "! Prepare to fight!!")
            //reset enemyHealth before starting new fight
            enemyHealth = 15;

            // debugger

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            //if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
                //ask if player wants to use the shop before next round
                var storeConfirm = window.confirm("Would you like to visit the shop before the next round?");
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
        
            }
        } else {//end fight() function call within for loop
            console.log("Better luck next time, " + playerName + "!");
            break;
        }
        //end if statement
    }
    //end for loop

    //after loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};
//end startGame() function expression





//start function expression to end the game
var endGame = function() {
    //if player is still alive, they win
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    } else {
        window.alert("You've lost you're robot in battle.")
    }
    
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
//end function expression to end the game





//start shop function expression
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Please choose one: REFILL your health, UPGRADE your attack, LEAVE the store."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refillng " + playerName + "'s health by 20 for 7 bucks.");
                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough cash.");
            }          
            break;
        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading " + playerName + "'s attach by 6 for 7 bucks.");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You broke!");
            }
            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option.  Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};





//start the game when the page loads
startGame();
