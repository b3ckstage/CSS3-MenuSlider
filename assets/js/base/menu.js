$(document).ready(function () {

/* On click menu functions */
function menuOpen() {
  $('#menu').css("transform","translateX(0px)");
  $('#wrapper').css("left","250px");
  $('#header').css("left","250px");
  $('.menu-icon').addClass('hide-menu');
  $('.menu-icon').removeClass('show-menu');
  $('body').css("overflow", "hidden");
};

function menuClose() {
  $('#menu').css("transform","translateX(-250px)");
  $('#wrapper').css("left","0px");
  $('#header').css("left","0px");
  $('.menu-icon').addClass('show-menu');
  $('.menu-icon').removeClass('hide-menu');
};

$(document).on("click", ".show-menu", function () {
  menuOpen(); // Menu Open function, you can call this function anywhere and will work like magic
});

$(document).on("click", ".hide-menu", function () {
  menuClose(); // Menu close function, you can call this function anywhere and will work like magic
});

});

/* Response js operation */
Response.action(function(){
  if (Response.band(0, 961)) {
    $('#menu').css("transform","translateX(-250px)");
    $('#header').css("left","0px");
    $('#wrapper').css("margin-left","0px");
    $('#header').css("display","block");
  }
  else {
    $('#menu').css("transform","translateX(0px)");
    $('#header').css("left","0px");
    $('#wrapper').css("margin-left","250px");
    $('#header').css("display","none");
  }
});
