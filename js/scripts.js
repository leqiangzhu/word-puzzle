$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    // var blanks = ["number1", "number2"];
    //
    // blanks.forEach(function(blank) {
    //   var userInput = $("input." + blank).val();
    //   $("." + blank).text(userInput).val();
    // });





    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    if (isNaN(number1) || isNaN(number2) || number1 === undefined || number2 === undefined) {
      alert("Please enter a number into both fields.");
    } else if (number1 < number2) {
      alert("Please make countby smaller than count to.")
    } else {
      var result=[];

      var ntimes = Math.floor(number1 / number2);
      for (var i=0;i<ntimes;i++){
        result[i]=number2*(i+1);
      }
      $('#output').append(result.toString());
      $("#result").show();
    }
    event.preventDefault();
  });
});
