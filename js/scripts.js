$(document).ready(function() {

  $("form#shout-input").submit(function(event) {
    var loud = $("input#uppercase").val().toUpperCase();

    $("p.uppercase").text(loud);
    $("#uppercase").val(" ");
    event.preventDefault();
  });

  $('button#clear').click(function() {
      // $("div#Shout").reload(true);
  });

  $("form#letter-input").submit(function(event) {
    var info = $("input#name").val();

    $("#name").val(" ");

    $(".name").text(info);
    $('#letter').show();

    event.preventDefault();
  });


});
