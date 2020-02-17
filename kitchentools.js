//Kitchen Tools 

var Skillet = {

    isCooked : false, 
     onBun :false,

     cookingTime()
     {
         //set the time we are counting down to 

         var countDownSecs = new Date ("18:58:53").getTime();
         var seconds = 10; //only 10 seconds limit
         var x = setInterval(function(){

            //get time
            var today = new Date();
            var time = today.getSeconds;
         })

         var distance = countDownSecs - now;

         // time calculate for seconds
         var seconds = Math.floor((distance % (1000*60)) /1000); 
    
         
         if(distance < 0)
         {
             clearInterval(x); 
             removeFooditem();
         }
     }, 
}

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


var Grill = {

    isFooditemOnGrill: false,
    cookingTime(); 
}
removeFooditem()
{
    //create a function that removes a food item from the kitchen tool
    //ex if the food item is on a skillet then remove it from there
}

placeFooditem()
{
    //place food item on the kitchen tool 
}