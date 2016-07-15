$(function() {
  var div = $("div");

  // same thing happens with + in place of parseInt
  var number = parseInt(prompt("Pick an integer greater than 0 to fizz: "));

  var not_number = true;
  do {

    if (isNaN(number) === true || number <= 0) {
      number = prompt("Invalid. Pick an integer greater than 0: ");
    }
    else {
      not_number = false;
    }

  } while (not_number);

  var fizz_buzz = function(last_number) {
  for (var i = 1; i <= last_number; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0)
       {
        div.append("<p>Fizzbuzz</p>");
       } else {
          div.append("<p>fizz</p>");
       }
    } else if (i % 5 === 0) {
      div.append("<p>buzz</p>");
    } else {
      div.append("<p>" + i + "</p>");
    }

  }

  };

  fizz_buzz(number);

});
