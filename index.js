

$(document).ready(function(){
  let time = 10;
  let hiddenBox = $( ".reloj" );
$( ".BotonFBI" ).on( "click", function(){
  hiddenBox.html(time);
  hiddenBox.show();
  
});

});

