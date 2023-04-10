$(document).ready(function() {
  $('.list-item:first').hover(function() {
    $(this).toggleClass('active');
  });

  $('.list-item:eq(2)').on('click', function() {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(4)').on('click', function() {
    $('.image:odd').animate({
      opacity: "hide",
      height: "hide"
    }, 5000);
  });
});