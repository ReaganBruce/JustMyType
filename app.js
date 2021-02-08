$(document).ready(function () {
  $("#keyboard-upper-container").hide();
  const upperKeyboard = $("#keyboard-upper-container");
  const lowerKeyboard = $("#keyboard-lower-container");
  const sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let feedbackDiv = $('#feedback') //div for feedback of X or O.
  let sentenceCounter = 0; // counter for the sentence array //similar to the index of[i] in a for loop.
  let letterCounter = 0; // counter for the letters //similar to the index of [j] in a for loop.
  let highlighterPosition = 0; //counter for highlighted Div.
  //let feedbackDiv = $('#feedback');
  let highlighterDiv = $("#yellow-block");
  $("#sentence").append(sentences[sentenceCounter]);

  //keydown function
  $(document).keydown(function (e) {
    if (e.keyCode == 16) { //e.keyCode represents the specific key code(number) to that key.
      upperKeyboard.show();
      lowerKeyboard.hide();
    }

    if (e.key == sentences[sentenceCounter][letterCounter]) { //e.key represents all the keys on the keyboard.
      highlighterPosition = highlighterPosition + 17; //gave highlighterPosition a new variable to set it at 17.
      letterCounter++; //increment the letterCounter because that's what is effecting the letters in the sentences array.
      highlighterDiv.css("margin-left", `${highlighterPosition}px`); //incrementing the div left by 17 pixels.
    }

    if (e.key == sentences[sentenceCounter].charAt(letterCounter)){
      feedbackDiv.append('<span class="glyphicon-remove"></span>');
    } else {
      feedbackDiv.append('<span class="glyphicon-ok"></span>');
    }
    
  });

  //keypress function
  $(document).keypress(function (e) {
    $(`#${e.keyCode}`).css("background-color", "yellow"); //e.keyCode in template literal refers to all the key Codes in the html file.
  });

  //keyUp function
  $(document).keyup(function (e) {
    $("#target-letter").text(sentences[sentenceCounter].charAt(letterCounter)); // getting the letters and incrementing the characters with letterCounter
    let asciiKey = e.key.charCodeAt(0);
    $(`#${asciiKey}`).css("background-color", "#f5f5f5");
    if (letterCounter === sentences[sentenceCounter].length) {
      feedbackDiv.empty()
      sentenceCounter++;
      highlighterPosition = 0;
      letterCounter = 0;
      
      $("#sentence").empty();
      $("#sentence").append(sentences[sentenceCounter]);
    }
    if (letterCounter == sentences[sentenceCounter].length - 1) {
      highlighterPosition = 0;
    }
    
    

    if (e.keyCode == 16) {  //Shift //Unshift
      upperKeyboard.hide(); 
      lowerKeyboard.show();
    }
  });
});
