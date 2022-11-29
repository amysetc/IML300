$('document').ready(function(){

  $('.bio-1').hide();
  $('.bio-2').hide();
  $('.bio-3').hide();
  $('.bio-4').hide();
  $('.bio-5').hide();
  $('.bio-6').hide();
  $('.bio-7').hide();
  $('.bio-8').hide();
  $('.bio-9').hide();
  $('.bio-10').hide();
  $('.bio-11').hide();
  $('.bio-12').hide();

  $('.picture-1').click(function(){
      $('#active').fadeOut(1000);
      $('#active').removeAttr('id');
    $('.bio-1').attr('id','active');
    $('.bio-1').delay(1300);
    $('.bio-1').fadeIn(1300);
         })
    
    $('.picture-2').click(function(){
      $('#active').fadeOut(1000);
      $('#active').removeAttr('id');
    $('.bio-2').attr('id','active');
    $('.bio-2').delay(1300);
    $('.bio-2').fadeIn(1300);
         })

});