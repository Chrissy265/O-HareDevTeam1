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
        /*function timer(){
            var sec = 15; 
            var timer = setInterval(function() 
            {
                sec --;
                if (sec == 0)  
                {

                     clearInterval(timer); 
                     removePattie(); 
                }

            }
        }*/
      
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



//Kitchen Tools 




