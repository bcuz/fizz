$(function() {
  var div = $("div");

  var to_this = prompt("Pick an integer greater than 0 to fizz: ");

  var no_number = true;
  do {

    if (isNaN(to_this) === true || to_this <= 0) {
      to_this = prompt("Invalid. Pick an integer greater than 0: ");
    }
    else {
      no_number = false;
    }

  } while (no_number);


for (var i = 1; i <= to_this; i++) {
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

});
