var car,wall;
var speeeed,weight;
var deformation ;
var lin1,lin2;
var resetButton,r;

function setup() {
  createCanvas(1650,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  lin1 = createSprite(825,43,1655,6);
  lin2 = createSprite(825,350,1655,6);
  resetButton = createSprite(795,200,60,60);

  
  resetButton.visible = false;

  speeeed = random (55,95);
  weight = random (400,1500);
  
  console.log(deformation)
}

function draw() {
  background("teal"); 
  
  lin1.shapeColor = "white"
  lin2.shapeColor = "white"
  car.velocityX = speeeed;
  wall.shapeColor = "brown"

  deformation = 0.5*weight*speeeed*speeeed/22500

  if(car.x - wall.x < wall.width/2 + car.width/2 &&
    wall.x - car.x < wall.width / 2 + car.width/2&&
    car.y - wall.y < wall.height/2 + car.height/2 &&
    wall.y - car.y   < wall.height/2 + car.height/2){
    //car.shapeColor = "blue"
    car.velocityX = 0;
    //Text(deformation,50,200);
    if(deformation < 100 ){
      car.shapeColor = "green"
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = "yellow"
    }
    if(deformation > 180 ){
      car.shapeColor = "red"
    }
    
   
    }
  
  

  drawSprites();
}


