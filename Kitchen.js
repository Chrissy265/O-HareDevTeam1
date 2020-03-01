//Developer: Christina Beckford
//Logic For Food Objects and Kitchen tools
//Logic to progress from level 1 to Level 3
//Logic to place orders and handle custoemrs orders
//Level 1-3


//Sets the canvas of the game
var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
  
    //Loads the screens for the game
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}; 


//Level 1 Gameplay # of customers
var customer1 = {
    coins : 100,
    moneyRecieved: false,
    foodSelection,
};
var customer2 = {
    coins = 100,
    moneyRecieved: false,
    foodSelection,
}; 
var customer3 = {
    coins = 100,
    moneyRecieved: false,
    foodSelection,
};

//Level 2 Gameplay # of customers
var customer4 ={
    coins =300,
    moneyRecieved: false,
    foodSelection,
};
var customer5 ={
    coins =300,
    moneyRecieved: false,
    foodSelection,
};
var customer6 ={
    coins =300,
    moneyRecieved: false,
    foodSelection,
}; 

//Level 3 Gameplay
var customer7 ={
    coins = 500,
    moneyRecieved: false,
    foodSelection,
};
var customer8 ={
    coins = 500,
    moneyRecieved: false,
    foodSelection,
};
var customer9 ={
    coins =500,
    moneyRecieved: false,
    foodSelection,
};

//Food Items
var chickenSandwich ={
    cost :10,
    onPlate: true,
};
var hamburger= {
    isCooked: false,
    onBun : true,
    onSkillet: true,
    cost = 20


}; 
var salad = {
    cost : 25,
    inBowl: true,
}; 
var bbqribs = {
    cost : 50,
    isCooked: true,
    onPlate: true,
}; 
var Coffee = {
    cost : 15,
    isFull: true,
    
};
var Cola = {
    cost : 10,
    isFull: true,
};
var Donut ={
    onPlate: true
}; 

//Kitchen tools


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
var Grill ={
    isFooditemOnGrill: false,
    cookingTime()
};





function cookingTime(chickenSandwich)
{
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



function cookingTime(hamburger)
{
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
function placeOrder()
{
      
}
function collectMoney(coins)
{
    if(moneyRecieved == true)
    {
        totalUserMoney = coins++;
        
    }
}

function orderFood(customer)
{
    if(customerOrder == chickenSandwich)
    {
        
    }
}

//Payment For Food Orders 

if(foodSelection == chickenSandwich )
{
    if(onPlate == true)
    {
        //customer pays value of chicken sandwich
    }
}


if(foodSelection == Donut)
{
    if(onPlate == true)
    {
        //customer pays value of donut
    }
}
if(foodSelection == bbqribs )
{
    if(onPlate == true && isCooked == true)
    {
        //customer pays value of bbqribs
    }
}
if(foodSelection == salad )
{
    if(inBowl == true)
    {
        //customer pays value of salad
    }
}

if(foodSelection == Coffee)
{
    if(isFull == true)
    {
        //customer pays value of coffee
    }
}



//Progression of Levels 1 -3 Depending On Amount of Money Is Accumlated Per Level

var level1 ={
    TotalAmountToMake:200,
};
var level2 ={
    TotalAmountToMake:1000,
};
var level3 ={
    TotalAmountToMake: 2000,
}; 

var userTotal = 0;

while(userTotal !=0)
{
    if(userTotal ==200)
    {
        //moves on to level 2
    }
    else(userTotal <200) { //keep recieving  orders from custoemrs}

    if(userTotal == 1000)
    {
        //moves on to level 3
    }
    else(userTotal < 1000){//keep recieving orders from customers on level 2}

    if(userTotal == 2000)
    {
        //Game over render the leadership board
    }
    else(userTotal <2000){//keep recieving orders}
};


















