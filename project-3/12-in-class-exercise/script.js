$(document).ready(function () {   
    $('.plant1').click(function () {
      $('.paragraph').toggle();
    });
    
     $('.plant2').click(function () {  
//        $('.plant2').toggle(2000);  
        $(this).toggleClass("bigger");
    });
});
