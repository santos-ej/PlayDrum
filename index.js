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
                soundCrash.currentTime = 0;
                soundCrash.play();
                break;
        case "a":
                console.log( "inside the case: " + key); 
                soundKickBass.currentTime = 0;     
                soundKickBass.play();                    
                break;
        case "s":
                console.log( "inside the case: " + key);
                soundSnare.currentTime = 0;     
                soundSnare.play();                     
            break;
        case "d":
                console.log( "inside the case: " + key);     
                soundTom1.currentTime = 0; 
                soundTom1.play();                      
            break;
        case "j":
                console.log( "inside the case: " + key);     
                soundTom2.currentTime = 0; 
                soundTom2.play();                       
            break;
        case "k":
                console.log( "inside the case: " + key); 
                soundTom3.currentTime = 0; 
                soundTom3.play();                       
            break;
        case "l":
                console.log( "inside the case: " + key);
                soundTom4.currentTime = 0;
                soundTom4.play();                       
            break;

        default:
            break;
    }            
}

function animateButton(key){
    var activeButton; 

    switch (key) {    
        case "w": 
        case "a": 
        case "s": 
        case "d": 
        case "j": 
        case "k": 
        case "l": 
                    activeButton = document.querySelector("." + key).classList.add("pressed");
                setTimeout(() => {  
                    activeButton =  document.querySelector("." + key).classList.remove("pressed");
                }, 100);   
        default:
            console.log( "inside the animate button - enters default: " + key);  
            break;
    }             
}

document.addEventListener("keydown", 
    function (event){
        playDrum(event.key);
        animateButton(event.key);
    }
);
