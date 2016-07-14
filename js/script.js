$(function() {
  var div = $("div");

  // same thing happens with + in place of parseInt
  var to_this = parseInt(prompt("Pick an integer greater than 0 to fizz: "));
  console.log(typeof to_this);
  console.log("Raw print: " + to_this);


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
