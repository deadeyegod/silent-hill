var numberOfDrums = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfDrums; i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound(key){

switch (key) {
    case "w":
        var audioOfJump = new Audio("sounds/jump_4.adx.wav")
        audioOfJump.play();
        break;
    case "a":
        var audioOfDoor = new Audio("sounds/hotel_d1_cl.adx.wav")
        audioOfDoor.play()
        break;
    case "s":
        var audioOflove = new Audio("sounds/letter_water_st.adx.wav")
        audioOflove.play();
        break;
    case "d":
        var audioOfGive = new Audio("sounds/703_b.adx.wav")
        audioOfGive.play()
        break;
    case "j":
        var audioOfDaddy = new Audio("sounds/703_c.adx.wav")
        audioOfDaddy.play();
        break;
    case "k":
        var audioOfHotel = new Audio("sounds/m_deai_tsuika.adx.wav")
        audioOfHotel.play()
        break;
    case "l":
        var audioOfDust = new Audio("sounds/dust_1.adx.wav")
        audioOfDust.play()
        break;

    default: console.log();
        
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}

