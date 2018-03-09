$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var weather = $("input:radio[name=weather]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    $(".sbresult").hide();
    $(".rioresult").hide();
    $(".icelandresult").hide();

  if (weather === "hot" && environment === "bigcity" && food === "rio") {
    $(".sbresult").show();
    $(".rioresult").hide();
    $(".icelandresult").hide();
  } else if (weather === "cold" && environment === "rural" && food === "ice") {
    $(".sbresult").hide();
    $(".rioresult").hide();
    $(".icelandresult").show();
  } else if (weather === "mild" && environment === "beach" && food === "sb") {
    $(".sbresult").show();
    $(".rioresult").hide();
    $(".icelandresult").hide();
  } else {
    $("#result").hide();
  }

  $("#survey").trigger("reset");

 });
});
