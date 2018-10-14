// =JAVASCRIPT 
// Chapter 1: Create, intialize, start the variable

  var targetNumber = 0;
  var numberOptions = [0, 0, 0, 0];
  var counter = 0;
  var guesses = 20;
  var wins = 0;
  var losses = 0;
  // var data-crystalvalue = created dynamically below
  

// Chapter 2: Create Functions and Start 
// 2.1 Functions
function updateScore(){
    $("#number-total-count").text(counter);
    $("#number-guesses-left").text(guesses);
    $("#number-to-guess").text(targetNumber);
    $("#win-count").text(wins);
    $("#losses-count").text(losses);
}
function createTarget() {
    targetNumber = Math.floor(Math.random() * 102) + 20;
    console.log(targetNumber);
}

function resetThatDonkaDonk(){
    targetNumber = 0;
    numberOptions = [0, 0, 0, 0];
    counter = 0;
    guesses = 20;
    $("#crystals").empty();
    createTarget();
    updateScore();
    generateCrystals();
    clickEventHandler();
}

// Chapter 3: Creating the Crystals to be clicked
  // A for loop that for each target number in the array, 
  //connects it to a picture that will be our jewel
  function generateCrystals() {
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i] + Math.floor(Math.random() * 12 + 1));
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }}

//2.2 Start the page
createTarget();
updateScore();
generateCrystals();
clickEventHandler();

// Chapter 3: Creating a click event handler and function
function clickEventHandler() { $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    guesses--; 
    updateScore();

    if (counter === targetNumber) {
        wins++;
        alert("You win!");
        resetThatDonkaDonk();
      }
    
    else if (counter >= targetNumber || guesses <= 0) {
        losses++;
        alert("You lose!!");
        resetThatDonkaDonk();
      }
    })
  };
