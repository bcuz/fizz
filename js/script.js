$(function() {
for (var i = 0; i <= 30; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0)
     {
      $("body").append("<p>Fizzbuzz</p>");
     }
  } else if (i % 5 === 0) {
    $("body").append("<p>" + "buzz" + "</p>");
  }



}

});
