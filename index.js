const soundCrash = new Audio('./sounds/crash.mp3');
const soundKickBass = new Audio('./sounds/kick-bass.mp3');
const soundSnare = new Audio('./sounds/snare.mp3');
const soundTom1 = new Audio('./sounds/tom-1.mp3');
const soundTom2 = new Audio('./sounds/tom-2.mp3');
const soundTom3 = new Audio('./sounds/tom-3.mp3');
const soundTom4 = new Audio('./sounds/tom-4.mp3');

function playDrum(key){
    
    switch (key) {
        case "w":
                console.log( "inside the case: " + key);                     
                soundCrash.play();
                break;
        case "a":
                console.log( "inside the case: " + key);     
                soundKickBass.play();                    
                break;
        case "s":
                console.log( "inside the case: " + key);     
                soundSnare.play();                     
            break;
        case "d":
                console.log( "inside the case: " + key);     
                soundTom1.play();                      
            break;
        case "j":
                console.log( "inside the case: " + key);     
                soundTom2.play();                       
            break;
        case "k":
                console.log( "inside the case: " + key);     
                soundTom3.play();                       
            break;
        case "l":
                console.log( "inside the case: " + key);     
                soundTom4.play();                       
            break;

        default:
            break;
    }            
}

function animateButton(key){
    var activeButton; 
    switch (key) {
        case "w" || "a" || "s" || "d" || "j" || "k" || "l":
                    activeButton = document.querySelector("." + key).classList.add("pressed");
                setTimeout(() => {
                    activeButton =  document.querySelector("." + key).classList.remove("pressed");
                }, 100);   
        default:
            break;
    }             
}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function(){
            var buttonClass  = this.innerHTML;
            playDrum(buttonClass);
            animateButton(buttonClass);
        }
    );
}

document.addEventListener("keydown", 
    function (event){
        playDrum(event.key);
        animateButton(event.key);
    }
);



/******** MY VERSION *******/
/*
function playDrum(key){

    switch (key) {
        case "w":
                console.log( "inside the case: " + key);                     
                soundCrash.play();
                break;
        case "a":
                console.log( "inside the case: " + key);     
                soundKickBass.play();                    
                break;
        case "s":
                console.log( "inside the case: " + key);     
                soundSnare.play();                     
            break;
        case "d":
                console.log( "inside the case: " + key);     
                soundTom1.play();                      
            break;
        case "j":
                console.log( "inside the case: " + key);     
                soundTom2.play();                       
            break;
        case "k":
                console.log( "inside the case: " + key);     
                soundTom3.play();                       
            break;
        case "l":
                console.log( "inside the case: " + key);     
                soundTom4.play();                       
            break;

        default:
            break;
    }            
}
*/


/******** keydown *******/

/*
document.addEventListener("keydown", 
    function (event){
        console.log(event);
        console.log(event.key);
    }
);*/


/******** SOUND  *******/
/*  const soundTom1 = new Audio('./sounds/tom-1.mp3');
    soundTom1.play();*/

/******** MY SAMPLE CLICKS  *******/

/*
function deezNuts(){
    alert("Deez Nuts");
}    

document.querySelector(".w").addEventListener("click", deezNuts);
document.querySelector(".a").addEventListener("click", deezNuts);
document.querySelector(".s").addEventListener("click", deezNuts);
document.querySelector(".d").addEventListener("click", deezNuts);
document.querySelector(".j").addEventListener("click", deezNuts);
document.querySelector(".k").addEventListener("click", deezNuts);
document.querySelector(".l").addEventListener("click", deezNuts);
*/
