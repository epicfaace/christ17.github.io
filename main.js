$(document).ready(function(){
  var collapsed = true;
  $("#menu").click(function(){
    if(collapsed == true){
      $("#menu-collapse").css("display", "block");
      collapsed = false;
    }
    else {
      $("#menu-collapse").css("display", "none");
      collapsed = true;
    }
  });
});
