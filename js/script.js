$(function() {
for (var i = 0; i <= 30; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0)
     {
      $("body").append("<p>Fizzbuzz</p>");
     } else {
        $("body").append("<p>" + "fizz" + "</p>");
     }
  } else if (i % 5 === 0) {
    $("body").append("<p>" + "buzz" + "</p>");
  } else {
    $("body").append("<p>" + i + "</p>");
  }

}

});
