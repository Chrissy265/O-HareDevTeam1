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
        cookingtime();
      
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


//Chicken Sandwich 

//Salad 

//Coffee 


//Lvl 3 Food Items

//Grilled Veggies 

//BBQ Ribs 








