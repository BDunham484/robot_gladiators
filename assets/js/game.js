var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Gamma-X", "Techno-Kill", "Omega-Unit"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
// }
//alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!!");





//start fight() function expression
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    //start while() loop
    while(enemyHealth > 0) {
        //give the players the option to fight or skip the battle
        var promptFight = window.prompt("Enter 'FIGHT' or 'SKIP' to proceed.");
        
        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemeyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            )
            //check my enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
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
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        //if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            //if no (false), ask question again by running fight() again
            } else {
                fight();
            }
            
        } else {
            window.alert("You need to choose a valid option. Try again.");
        } 
    }
    //end while() loop 
}
//end fight() function expression




//start fight() function call within for loop
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    console.log("Up next is " + pickedEnemyName + "! Prepare to fight!!")
    fight(pickedEnemyName);
}
//end fight() function call within for loop