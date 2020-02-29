var game;

window.onload = function () {

    var gameconfig = {
        width: 1924,
        height: 973,
        scene: [bootGame, playGame]

    }

    
    game = new Phaser.Game(gameconfig);
    this.window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);

}

function resizeGame() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

/*******Classes to Control Scenes ********/

class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame")
    }
    create(){
        console.log("this is great!");
        var background = this.add.sprite(980, 485, 'background', 'background.png');
        var donut = this.add.image(800, 600, 'donut', 'Donut.png');
        donut;
        
        background;
      
    }
}

class bootGame extends Phaser.Scene{
    constructor(){
        super("BootGame");
    }
    preload(){
        this.load.image('background', 'assets/background/background.png');
        this.load.image('donut', 'assets/images/Donut.png');
    }

    create(){
        console.log("Game is being loaded...");         
        this.scene.start("PlayGame");
    }
}

