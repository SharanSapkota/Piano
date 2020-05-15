var numberOfDrumButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  
});


function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;

    case "g":
      var snare = new Audio('sounds/tom5.mp3');
      snare.play();
      break;

    case "h":
      var crash = new Audio('sounds/tom6.mp3');
      crash.play();
      break;

    case "j":
      var kick = new Audio('sounds/tom7.mp3');
      kick.play();
      break;
      case "k":
      var kick = new Audio('sounds/tom8.mp3');
      kick.play();
      break;
      case "l":
      var kick = new Audio('sounds/tom9.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}



