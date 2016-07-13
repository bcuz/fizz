$(function() {
  var body = $("body");

  var to_this = parseInt(prompt("How high? "));

  var no_number = true;
  do {

    if (isNaN(to_this) === true) {
      var to_this = parseInt(prompt("Numbers only, chief. Try again. "));
    } else {
      no_number = false;
    }

  } while (no_number)


for (var i = 0; i <= 30; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0)
     {
      body.append("<p>Fizzbuzz</p>");
     } else {
        body.append("<p>fizz</p>");
     }
  } else if (i % 5 === 0) {
    body.append("<p>buzz</p>");
  } else {
    body.append("<p>" + i + "</p>");
  }

}

});
