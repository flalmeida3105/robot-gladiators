// Defining Player's details 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo TRumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Defines fight function 
var fight = function(enemyName) {
    // window.alert("Welcome to Robot Gladiators!");

    while(playerHealth > 0 && enemyHealth > 0) {
        // Asks the player whether they want to fight or run
        var promptFight = window.prompt("Would you like to FIGHT ot SKIP this battle? Enter FIGHT or SKIP to choose.");

        // If player choses to skip
        if (promptFight === "SKIP" || promptFight === "skip") {
            // confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight! Goodbye.");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning 
            playerMoney = playerMoney + 20;
            // leave the while () loop since the enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave the while () loop since the enemy is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } //end of while loop
}; // end of fight function

// loop through Enemy Array 
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
}

// fight();