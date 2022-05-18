//start function to generate a rondom numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
//end randomNumber function





//start function to set name
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}
//end function to set name





//player stats object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling " + playerInfo.name + "'s  health by 20 for 7 bucks.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough cash!");
        }
        
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading " + playerInfo.name + "'s attack by 6 for 7 bucks");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough cash!");
        }
        
    }
};

console.log(playerInfo);

//enemy stats array of objects
var enemyInfo = [
    {
        name: "Gamma-X",
        attack: randomNumber(10,14)
    },
    {
        name: "Techno-Kill",
        attack: randomNumber(10,14)
    },
    {
        name: "Omega-Unit",
        attack: randomNumber(10,14)
    }   
];





//start fight() function expression
var fight = function(enemy) {
    //repeat and execute as long as the enemy-robot is alive
    //start while() loop
    while(playerInfo.health > 0 && enemy.health > 0) {
        //give the players the option to fight or skip the battle
        var promptFight = window.prompt("Enter 'FIGHT' or 'SKIP' to proceed.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money: ", playerInfo.money);
                break;
            //if no (false), ask question again by running fight() again
            }
        }
        //if player chooses to fight, then fight
        // if (promptFight === "fight" || promptFight === "FIGHT") {
            //generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);            //subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemeyHealth' variable
            enemy.health = Math.max(0, enemy.health - damage);

            //log a resulting message to the console so we know that it worked
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            )
            //check my enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                //award player money for winning
                playerInfo.money = playerInfo.money + 20;
                //leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
            //generate random damage value based on enemies attack value
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            //subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // console.log(playerInfo.name + "Health: " + playerInfo.health);

            //log a resulting message to the console so we know that it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            //check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                //leave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
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
    playerInfo.reset();

    //start fight() function call within for loop
    for(var i = 0; i < enemyInfo.length; i++) {
        
        if (playerInfo.health > 0) {
            //let the player know what round they are starting
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + "!");

            //pick new enemy to fight based on index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
            console.log("Up next is " + pickedEnemyObj.name + "! Prepare to fight!!")
            //reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            console.log(pickedEnemyObj);

            // debugger

            //pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            //if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                //ask if player wants to use the shop before next round
                var storeConfirm = window.confirm("Would you like to visit the shop before the next round?");
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
        
            }
        } else {//end fight() function call within for loop
            console.log("Better luck next time, " + playerInfo.name + "!");
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
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
           playerInfo.refillHealth();    
            break;
        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
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
