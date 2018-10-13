// =JAVASCRIPT 
// Chapter 1: Create, intialize, start the variable

  var targetNumber = 53;
  var numberOptions = [10, 5, 3, 7];
  var counter = 0;
  var guesses = 10;
  // var data-crystalvalue = created dynamically below
  

// Chapter 2: Create Functions and Start 
// 2.1 Functions
function updateScore(){
    $("#number-total-count").text(counter);
    $("#number-guesses-left").text(guesses);
}
function resetThatDonkaDonk(){
    targetNumber = 53;
    numberOptions = [10, 5, 3, 7];
    counter = 0;
    guesses = 10;
    $("#crystals").empty();
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
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }}

  //2.2 Start the page
$("#number-to-guess").text(targetNumber);
updateScore();
generateCrystals();

// Chapter 4: Creating a click event handler and function
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    guesses--; 
    updateScore();
    if (counter === targetNumber) {
      alert("You win!");
      resetThatDonkaDonk();
      updateScore();
      generateCrystals();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      resetThatDonkaDonk();
      updateScore();
      generateCrystals();
    }



  });
