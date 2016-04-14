/* Create a file called `terrain.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your 
code in the pull request.
  * Create a constructor function called `Tile` that can create new tiles. This function will take parameters `x` and `y` and create an object that 
  has these properties:
    * `x`: the value that was passed to the constructor
    * `y`: the value that was passed to the constructor
    * `height`: a random number between 1 and 3
    * `type`: a random word between `grass`, `rocks` or `water`
    * `condition`: a random word between `burning`, `normal` or `frozen`
  * In addition to that, every object that gets created should have the following methods:
    * `burn`: if the object is frozen, then it will become normal. if the object is normal, then it should change to `burning`. 
    if it is already burning, then its height should decrement by 1 until it gets to 0.
  * Write a piece of code that will use the `Tile` constructor to create a 20x20 map of `Tile`s. The map will be a 2D array (array inside array).
  * Output the map to the console in the following way:
    * For each tile, output the height of the tile as an "icon" for that tile
  * Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again*/

function Tile(x, y) {
        var tile = {};
        tile.x = x;
        tile.y = y;
        tile.height = Math.ceil(Math.random()*3); //random number 1-3
        var possibleCondition = ["burning", "normal", "frozen"];
        tile.condition = possibleCondition[Math.floor(Math.random()*3)]; //burning, normal, frozen
        var possibleType = ["grass", "rocks", "water"];
        tile.type = possibleType[Math.floor(Math.random()*3)]; //grass, rocks, water

        tile.burn = function() {
             if (tile.condition === "frozen") {
                tile.condition = "normal";
             }
             else if (tile.condition === "normal") {
                 tile.condition = "burning";
             }
             else {
                 tile.height = tile.height - 1;
             }
        };
        
        return tile;
}