var battleCommands = {
    fight: function(){
        if (this.gender === "male")
            console.log(this.name + " rushes into battle with his " + this.weapon + "!");
        else 
            console.log(this.name + " rushes into battle with her " + this.weapon + "!");

    },
    
    faceoff: function(opponent){
        console.log(this.name + " faces off against " + opponent.name + "!");
        this.fight();
        opponent.fight();
        if (this.power > opponent.power) {
            console.log(this.name + "'s power of " + this.power.toString() + " has triumphed over their opponent's power of " + opponent.power.toString() + "!")
        }
        else {
            console.log(opponent.name + "'s power of " + opponent.power.toString() + " has triumphed over their opponents power of " + this.power.toString() + "!")
        }

    }
}

function Warrior(name, gender) {
    var warrior = Object.create(battleCommands);
    warrior.name = name;
    warrior.gender = gender;
    warrior.level = 1;
    warrior.weapon = "wooden sword";
    warrior.power = Math.floor(Math.random() * 101);
    return warrior;
}

/*    * `fight`: will output to the console: "<name> rushes to the arena with <his/her> 
      <weapon>"
    * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of 
    each opponent, this method should output to the console which player won the fight 
    based on their power. Be as creative as you like with the text of this method :)
  * Finally, create a bunch of warriors and make them fight together. */
  
var warrior1 = new Warrior("Crohm", "male");
//warrior1.fight();
var warrior2 = new Warrior("Linda", "female");
//warrior2.fight();

warrior2.faceoff(warrior1)