var buttonColors = ["red","blue","green","yellow"];
var gamePattern = []
var userClickedPattern = []
var start = document.getElementById('start')
var started = false;

var level = 0;



$(document).keypress(function(){
if (!started){
    $("#level-title").text("level: " + level);
    nextSequence();
    started = true;
    }
})

start.addEventListener('click',()=>{
    if (!started){
        $("#level-title").text("level: " + level);
        nextSequence();
        started = true;
        start.style.display='none'
        }
})





$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    
});






function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    
    }   else{
        console.log("wrong");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

        $("h1").text("GAME OVER,Press Any key to Restart");
        startOver();
        start.style.display='inline-block'

    }

    
}


function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("level: " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);



    
}
    

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }



function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}





// my written fucntion with a mistake...

// function animatePress(currentColour){
//     $(currentColour).click(function(){
//         $(currentColour).addClass("pressed");
//         setTimeout(function(){
//             $(currentColour).removeClass("pressed");
//         }, 100);

//     });
    

// }