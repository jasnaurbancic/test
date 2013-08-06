$(document).ready(function(){
  $('nav ul ul').hide();
  $('nav ul').click(function(){
    $('*').removeClass("show");
    $('nav ul ul').hide();
    $(this).children().addClass("show");
    $('.show').show();    
  });
  $(document).click(function(){
    $('div').fadeOut('slow');
  });
});