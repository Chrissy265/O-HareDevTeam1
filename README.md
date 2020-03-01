#Chef O'Hare Game
Creating a game for Chicago O'Hare Airport 






Chef O’Hare Game Development Report 
 Christina Beckford
Alejandro Biancucci
Riddhi Kiritkumar Pandit 
Emmanuel Roman





Game Overview :
           
Game Concept: 
   Chef O’Hare is a fun and interactive game to run a restaurant at O’Hare airport. The user will have to upkeep the restaurant by accepting orders from customers.  Every level will have a specific menu and the speed of orders will increase. The higher levels allow users to utilize various cooking styles. The game is a touch interface where the user would have to select the correct food item and use the appropriate kitchen tool to prepare the dish. When the customer places the order there are only 30 seconds to prepare the meal before the customer becomes upset. When the customer reaches the level of being upset due to the wait or they received the wrong order, the restaurant will lose profit.  The objective of the game is to accumulate the total amount of money for that specific level.  If the user meets the money goal for the level then they can progress to the next level. The goal is to become the best restaurant at the Chicago O’Hare airport. 

Genre: 
Addictive time management game

Target Audience:
Target all age groups, ideally for ages 5 and up. 



Game Flow Summary: 

The game will boot up, it will prompt the user to input their name. Their name will be stored in a table which will track the amount of money they made in the session. The following screen will display the instructions for the game. The user will click on the button next to move to the next screen which is the actual game screen. You will be able to view the kitchen counter which consists of the level one of amenities and food options. Customers will walk in and place orders at a moderate speed, ask for one food item at a time. The user will only have 30 seconds to prepare the food item by picking the correct food item and the appropriate kitchen equipment. The user has to touch the food item object and drag to the kitchen equipment to prepare the meal, to the place the food item on the plate. The food on the plate will trigger the transaction process. The amount of money made for the food order will be stored in the user money collection. The money accumulates for the level will determine if the user can progress to the next level.  If the user doesn’t meet the amount required to pass the current level, the customers will loop through until the money meter is full. 

Reference the flow chart diagram below: 


 Look & Feel Of The Game: 







Gameplay and Mechanics:
GamePlay:
The objective of the game is to be the best restaurant at Chicago O’Hare Airport.  The user will not only play a time management addictive game but learn about the various restaurants and food vendors located at the airport. The player will have to prepare the correct number of meals in order to gain a profit. Once the player reached the threshold amount of money for a particular level. The next kitchen scene will appear with additional kitchen equipment and more food options. This allows the user to experience various cooking styles. Along with various cooking styles of food, the number of customers will increase with the complexity of the orders themselves.  Once the user reaches the final level of the game then the amount of money is stored in the Leaderboard. Any player who plays afterward will need to beat the high score to have a chance to be on the board. 

Mechanics: 
 Physics: The user will use touch input to interact with the food objects in the game only. 
 Objects: Food items such as burger patty, cup, bbq ribs and etc.
 Actions: Touch the food item to progress the food preparation. Place the food item on the kitchen tool will trigger the cooking timer functionality. Placing the food item on the plate triggers the customer transaction. 
. For example, if the hamburger needs to be prepared the user needs to drag the hamburger patty to the skillet. Placing the patty on the skillet triggers the cooking time for the skillet. Then the user will have to move the cooked hamburger patty onto the bun. Then drag the plate to the customer to trigger the transaction. 

Screen Flow:  
Introductory Screen for Chef O’Hare
Main Menu Screen
Screen to request for user name
Render the screen for the kitchen scene at the restaurant (level 1)
Next Level Screen (render the kitchen scene with additional kitchen tools and food items options) 
Leaderboards
Main Menu Screen


The game will save automatically for each level that is possessed. The money accumulated for a particular level serves as the ‘checkpoint’ to the user’s last gameplay. 
           
The Story, Setting, and Character
Story and Narrative: You just arrived at one of the busiest airports in the United States, Chicago O’Hare airport. You recently received funds to start your own restaurant. Yes, you could’ve went out to purchase a property in downtown Chicago but you are smart, you know the largest traffic of customers will be at the airport. All walks of life who touch at O’Hare airport, waiting for their next flight, aimlessly walking around looking for something appetizing to consume.  After talking with management and purchased a section of the airport to open your restaurant. The goal is to open multiple locations of your restaurant at every terminal. The restaurant you open now can be a dealbreaker if you are able to expand your business. Your reputation is on the line due to the amount of exposure from various walks of life.  You have your eyes set on to be the best restaurant in the airport that offers a variety of foods and cooking styles to please any taste palette. 

Levels 
The game will have multiple levels
Each level will be reached when the cooker accumulates a certain amount of money given by the customers
At the beginning of each level, there will be instructions on how much food needs to be delivered and how much money needs to be collected in order to advance to the next level.
The difficulty will increase at each level
The amount of food that will need to be cooked in a certain amount will increase; so will the numbers of customer orders
Interface
Visual System:
  What menus are you displaying? 
Introductory Screen for Chef O’Hare
Main Menu Screen
Screen to request for user name
Instructions on how to play the game
Render the screen for the kitchen scene at the restaurant (level 1)
Next Level Screen (render the kitchen scene with additional kitchen tools and food items options) 
Leaderboards
Main Menu Screen


Phaser 3 framework uses “scenes” which handle the images and the camera of the game. 
Control System – Touch interface (users can only interact with the game by touch. Only can touch the food items). 
Audio, music, sound effects (no audio provided yet for the game)
Help System (before the start of the game there is an instruction game on how to play the game). 
Artificial Intelligence
There is no artificial intelligence for this game.
The whole game advances by calling scenes functions
There are no features of AI development since this is more of a simple game development framework 
Technical 
Target Hardware: the game is designed to function on any device since is a cross-platform application
The game engine utilized for the game is a framework called Phaser3 This is an HTML5 game framework which helps to build projects for modern browsers for both desktops and mobile
The logic of the gameplay: Kitchen.js file contains the food items, kitchen tools, transaction, and customer model. This file is the brain of how to move the objects throughout the canvas and trigger functionality for each object. 
Requirements needed to operate the game is a local web server and any updated browser. 

Game Art 
The game consists of one background image that is a restaurant and the kitchen from where the customers order from.
The asset list consists of: 
Assets folder containing: 
Background folder
Background.png
Image folder
Bunchbread.png
Burgerbread.png
Burgerwithpatty.png
Chicksandwich.png
Cola_dispenser.png
Donut.png
patty1.png
Animation - the key to animate all elements (Riddhi)
Created Background in HTML
Created All elements using HTML and CSS like 
Bunchbread
Burgerbread
Burger With Patty
Chicksandwich
Cola_dispenser
Patty1.png
Created Background in JS
Gave animation to the elements (allows the object to move from on point of the canvas to another part of it. These movements trigger an event of the game). 
To create animation from a static image, you must use the software called Texture Packer. Read the following article to understand how to create a sprite sheet to create an animation for the Phaser 3 framework.
https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?utm_source=ad&utm_medium=banner&utm_campaign=phaser-2018-10-16


 
	


