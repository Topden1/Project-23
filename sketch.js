const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(300, random(450, height - 300),180,150);
   player = new Player(285,playerbase.body.position.y - 153, 50, 180);

   computerBase = new ComputerBase(200, random(350, height - 200), 170, 150);
   computerplayer = new ComputerPlayer(185, computerbase.body.position.x - 153, 50, 170);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   display(playerBase);
   display(computerBase);


   //display Player and computerplayer
   display(player);
   display(computerplayer);


}

//If I did something wrong, please tell me!