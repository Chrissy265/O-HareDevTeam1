

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
    this.load.multiatlas('kitchenscene',)
}

window.onload = function(){

    scene: [bootGame, playGame]
}

class bootGame extends Phaser.Scene{
    constructor() {
        super("BootGame");
    }

    preload(){

    }
}
function create(){
//Create Each Food item with timer functionality 

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


}


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


}
