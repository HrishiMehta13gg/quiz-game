var canva;
var gameState,contestantCount,database,quiz,question,contestant

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}


function draw(){
  background("pink");

  
}
