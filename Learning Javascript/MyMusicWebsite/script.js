
/*
let btn_size = document.querySelectorAll(".btn").length;

for(let i = 0; i < btn_size; i++) {
    let clicked_btn = document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        let innertext = this.innerHTML;
        console.log(innertext + " clicked.");
    });
}
*/

document.addEventListener("keydown", function(event) {  // event is the value of which keyboard event occured.
    makeSound(event.key);
    AnimationWhenPressed(event.key);
})

function makeSound(innerText) {
    switch(innerText)
    {
        case "w":
            let noteA = new Audio('sounds/note-A.wav');
            noteA.play();
            break;
        case 'a':
            let noteB = new Audio('sounds/note-B.wav');
            noteB.play();
            break;
        case 's':
            let noteC = new Audio('sounds/note-C.wav');
            noteC.play();
            break;
        case 'd':
            let noteD = new Audio('sounds/note-D.wav');
            noteD.play();
            break;
        case 'j':
            let noteE = new Audio('sounds/note-E.wav');
            noteE.play();
            break;
        case 'k':
            let noteF = new Audio('sounds/note-D.wav');
            noteF.play();
            break;
        case 'l':
            let noteG = new Audio('sounds/background-music.mp3');
            noteG.play();
            break;
        default:
            alert("key not valid");
            break;
    }
}

function AnimationWhenPressed(eventKey) {
    let keyPressed = document.querySelector("." + eventKey);
    keyPressed.classList.add("keyPressed");
    setTimeout(function() {
        keyPressed.classList.remove("keyPressed");
    }, 100);
}z