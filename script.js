$(document).ready(function(){
  $('nav ul ul').hide();
  $('nav ul li').click(function(event){
    $('nav ul ul').hide();
    $(this).next('ul').toggle();
  });
  //$(document).click(function(){
    //$('div').fadeOut('slow');
  //});
});