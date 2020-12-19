var dog;
var dogImg1 , dogImg2;

function preload(){
dogImg1 = loadImage("images/dogImg.png")
dogImg2 = loadImage("images/dogImg1.png")
}


function setup() {
  createCanvas(500 , 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg1);
  
}


function draw() {  
 background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2)
  }

  drawSprites();

  fill("red");
  stroke("white");
  textSize(20)
  text("Food Remaining :" , 200,200);

}

function readStock(Data){
if(x >= 0){
x = 0;
}
else{
x = x-1;
}
foodS = data.val();
}

function writeStock(x){
database.ref('/').update({food:x})
}


