$('document').ready(function () {

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

    $('.answer-1').hide();
    $('.answer-2').hide();
    $('.answer-3').hide();
    $('.answer-4').hide();
    $('.answer-5').hide();
    $('.answer-6').hide();
    $('.answer-7').hide();
    $('.answer-8').hide();
    $('.answer-9').hide();
    $('.answer-10').hide();
    $('.answer-11').hide();
    $('.answer-12').hide();
    
    $('.picture-1').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-1').attr('id', 'active');
        $('.bio-1').delay(1300);
        $('.bio-1').fadeIn(1300);
    })

    $('.picture-2').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-2').attr('id', 'active');
        $('.bio-2').delay(1300);
        $('.bio-2').fadeIn(1300);
    })
    $('.picture-3').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-3').attr('id', 'active');
        $('.bio-3').delay(1300);
        $('.bio-3').fadeIn(1300);
    })
    $('.picture-4').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-4').attr('id', 'active');
        $('.bio-4').delay(1300);
        $('.bio-4').fadeIn(1300);
    })
    $('.picture-5').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-5').attr('id', 'active');
        $('.bio-5').delay(1300);
        $('.bio-5').fadeIn(1300);
    })
    $('.picture-6').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-6').attr('id', 'active');
        $('.bio-6').delay(1300);
        $('.bio-6').fadeIn(1300);
    })
    $('.picture-7').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-7').attr('id', 'active');
        $('.bio-7').delay(1300);
        $('.bio-7').fadeIn(1300);
    })
    $('.picture-8').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-8').attr('id', 'active');
        $('.bio-8').delay(1300);
        $('.bio-8').fadeIn(1300);
    })
    $('.picture-9').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.bio-9').attr('id', 'active');
        $('.bio-9').delay(1300);
        $('.bio-9').fadeIn(1300);
    })
    $(".click-1").click(function () {
        $('#active-2').removeAttr('id');
        $('click-1').attr('id', 'active-2');
        $('#active-1').fadeOut(1000);
        $('#active-1').removeAttr('id');
        $('.answer-1').attr('id', 'active-1');
        $('.answer-1').delay(1300);
        $('.answer-1').fadeIn(1300);
    })
   
     $(".click-2").click(function () {
        $('#active-2').removeAttr('id');
        $('click-2').attr('id', 'active-2');
        $('#active-1').fadeOut(1000);
        $('#active-1').removeAttr('id');
        $('.answer-2').attr('id', 'active-1');
        $('.answer-2').delay(1300);
        $('.answer-2').fadeIn(1300);
    })
     $(".click-3").click(function () {
         $('#active-2').removeAttr('id');
         $('click-2').attr('id', 'active-2');
        $('#active-1').fadeOut(1000);
        $('#active-1').removeAttr('id');
        $('.answer-3').attr('id', 'active-1');
        $('.answer-3').delay(1300);
        $('.answer-3').fadeIn(1300);
    })
     $(".click-4").click(function () {
         $('#active-2').removeAttr('id');
        $('click-4').attr('id', 'active-2');
        $('#active-1').fadeOut(1000);
        $('#active-1').removeAttr('id');
        $('.answer-4').attr('id', 'active-1');
        $('.answer-4').delay(1300);
        $('.answer-4').fadeIn(1300);
    })
     $(".click-5").click(function () {
         $('#active-2').removeAttr('id');
        $('click-5').attr('id', 'active-2');
        $('#active-1').fadeOut(1000);
        $('#active-1').removeAttr('id');
        $('.answer-5').attr('id', 'active-1');
        $('.answer-5').delay(1300);
        $('.answer-5').fadeIn(1300);
    })
    
     $('.tap-out').click(function () {
        $('#active').fadeOut(1000);
        $('#active').removeAttr('id');
        $('.thank-u-tina').attr('id', 'active');
        $('.thank-u-tina').delay(1300);
        $('.thank-u-tina').fadeIn(1300);
    })
});
