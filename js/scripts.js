$(document).ready(function(){
  $("form.survey").submit(function(event){
    event.preventDefault();
    var weather = $("input:radio[name=weather]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    $("#result").show();
if ((weather === "hot") && (environment === "bigcity") && (food === "rio")){
  $(".rioresult").show();
  $(".icelandresult").hide();
  $(".sbresult").hide();
   } else if ((weather === "cold") && (environment === "rural") && (food === "ice")){
     $(".icelandresult").show();
     $("rioresult").hide();
     $(".sbresult").hide();
   } else {
     $(".sbresult").show();
     $("rioresult").hide();
     $(".icelandresult").hide();
   }
 });
});
