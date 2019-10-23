$(document).ready(function() {

  $("form#letter-input").submit(function(event) {
    var info = $("input#name").val();

    $(".name").text(info);
    $('#letter').show();
    // info.clear();

    event.preventDefault();

  });

});
