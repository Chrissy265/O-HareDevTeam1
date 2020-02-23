

var config = {

    type: Phaser.AUTO,
    parent: 'kitchen-scene',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload(){
    this.load.multiatlas('kitchenscene', 'assets/kitchen.json', 'assets');  
}

window.onload = function(){

    scene: [bootGame, playGame]
    //this.onload.image('kitchen', 'assets/kitchenscene.json/trail1.jpg', 'assets');
}

class bootGame extends Phaser.Scene{
    constructor() {
        super("BootGame");
    }

    preload(){

    }
}



function create(){

var background = this.add.sprite(0,0, 'cityscene','kitchenscene.png');

//Creating the touch inputs up to four fingers

graphics= this.add.graphics(); // insert the kitchen scene

//1 pointer by default 
this.input.addPointer(3);


//Enable Dragged 

//insert the food items images
var image = this.add.sprite().setInteractive();

image.on('pointover', function (){
    this.setTint(0x00ff0);
});

image.on('pointerout', function () {

    this.clearTint();
});

this.input.setDraggable(image);

this.input.on('dragstart', function (pointer, gameObject) {

    gameObject.setTint(0xff0000); 
}); 

this.input.on('drag', function (pointer, gameObject, dragX, dragY){

    gameObject.x = dragX;
    gameObject.y = dragY; 
}); 


this.input.on('dragend', function (pointer, gameObject) {

     gameObject.clearTint();

});

}








//Fooditem

//Hamburger 
 var  Hamburger = {


    isCooked : true, 
    color : "pink",
    onBun : true, 
    onSkillet : true,  
   
    isPattieCooked(){
    if(onSkillet == true)
    {
        cookingtime(); //create the function under scenes
      
        color = 'brown' ; //represents the pattie is cooked
        isCooked = true;
    }elseif(onSkillet == false)
     {
          isCooked = false; 
     }

     
    
    return isCooked; 
    }
 };

//Coke

var Coke = {
  grabCup : true,
  isFilled : true, 
  color: 'brown',

 isCokefull()
  {
      if(isFilled == true)
      {
           return true; 
      }

      return false;

  }
};

//Donut

var donut ={

    onPlate : true
}; 


//Lvl 2 Food items 

var chickenSandwich = {
    onPlate :true
};
//Chicken Sandwich 

//Salad 

var salad = {
    onBowl: true
}; 

//Coffee 

var coffee = {
    isFilled: true
};


//Lvl 3 Food Items



//BBQ Ribs 

var bbqRibs = {
    isCooked : true
};





//Kitchen Tools 

var Skillet = {

    isCooked : false, 
     onBun :false,
     time =10,
     }, 


var Plate = {

    isFooditemOnPlate :false,
}

var Cup = {
     isFull : true,
     isCupAtDispenser: false, 
}

var Bowl = {
    isFooditemOnBowl : false,
}


/*var Grill = {

    isFooditemOnGrill: false,
    cookingTime(); 
} */
removeFooditem()
{
    //create a function that removes a food item from the kitchen tool
    //ex if the food item is on a skillet then remove it from there
}

placeFooditem()
{
    //place food item on the kitchen tool

}

cookingtime()
{
     var timeleft = 10,

     var cooktime = setInterval(function(){
         if(timeleft <=0){
             clearInterval(cooktime);
         }
        document.getElementById("progressBar").value = 10 -timeleft;
         timeleft -=1;
            
    
}, 1000);
} //end of create function 

function update()
{
         //User input touchscreen
if(this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown || this.input.pointer4.isDown)
{
    graphics.clear();
}

//execute the action of moving the kitchen objects 


}





