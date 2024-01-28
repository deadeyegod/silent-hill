var buttonColors = ["james", "anjela", "maria", "eddie"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(".btn").click(function(){
        var userChosenColor = $(this).attr("id");

        userClickedPattern.push(userChosenColor);
        
        playSound(userChosenColor);

        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
       
    });



function nextSequence(){
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    };

function playSound(name){
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    };



function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function () {

    $("#" + currentColor).removeClass("pressed");
    }, 100);
    };


$(document).keypress(function() {
    if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});


function checkAnswer(level){
    if (gamePattern[level] === userClickedPattern[level]){

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();}, 1000)};
            }
            
    else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        $('body').addClass("game-over");
    
        setTimeout(function () {

        $('body').removeClass("game-over");
         }, 200);

         $('h1').text("U lose press key if u dare");
         startover();

    };
            
        
    }

function startover(){
    level = 0;
    gamePattern.length = 0;
    started = false;
}



    