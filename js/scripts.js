$(document).ready(function() {

  $("#wordInput").submit(function(event) {
    var userInput = $("#textInput").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var userInputArray = userInput.split("");

    for (i = 0; i < userInputArray.length; i++) {
      for (j = 0; j < vowels.length; j++) {
        if (userInputArray[i].indexOf(vowels[j]) !== -1) {
              userInputArray[i] = "-";
        }
      }
    }

    $("#output").text(userInputArray.join(""));
    $("#result").show();
    $(".intro").hide();
    event.preventDefault();
  });
});
