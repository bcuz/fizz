$(function() {
  var body = $("body");

  var to_this = parseInt(prompt("Pick number greater than 0: "));

  var no_number = true;
  do {

    if (isNaN(to_this) === true || to_this <= 0) {
      var to_this = parseInt(prompt("Can you read?"));
    }
    else {
      no_number = false;
    }

  } while (no_number);


for (var i = 1; i <= to_this; i++) {
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
