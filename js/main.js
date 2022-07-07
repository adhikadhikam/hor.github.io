(function($) {
  $window = $(window);

  $('*[data-type="parallax"]').each(function() {
    var $bgobj = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data("speed"));
      var coords = "50% " + yPos + "px";

      $bgobj.css({ backgroundPosition: coords });
    });
  });
})(jQuery);














/* ---------------------------- header navigation ----------------------------- */

   $(function(){
    /*Mobile Menu start*/    
    $("#nav-toggle").on( "click", function() {
        $(this).toggleClass( "active" );
//        $("header").removeClass("newnav");
        $(".mainNav").toggleClass("openmenu");

    });
});


/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
 $('.hor-carosel').slick({
    slidesToShow: 4,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
      
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       arrows: true
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: true
      }
    }
    
  ]
      
      
      
       
});   
    

    
    
//$('.property-carosel').slick({
//    slidesToShow: 2,
// 	slidesToScroll: 1,
// 	arrows: true,
//    dots:false,
// 	infinite:true,
//	autoplay:false,
// 	speed:800,
//    centerMode:true,
//    variableWidth: true,   
//    
//});   
   
    
$('.property-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
    dots:false,
 	infinite:true,
	autoplay:false,
 	speed:800,
 
    
});   
          
    
 
    
    
  /* -------------------------- show hide---------- */     
    

    
    
  var $content = $(".legacy-text-box").hide();
    $(".read-less").hide();
    $(".read-more").on("click", function (e) {
        $('.legacy-text-box').slideToggle(500);
        $(".read-more").hide();
         $(".read-less").show();
    }); 
      $(".read-less").on("click", function (e) {
        $('.legacy-text-box').slideToggle(500);
        $(".read-less").hide();
        $(".read-more").show();  
    }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
 /* -------------------------- document ends here------------------ */       
    
});






 /* -------------------------- tabbing ------------------ */    
    
    
	$('#mob-tab-select').on('change', function (e) {
	    $('.nav-tabs li a').eq($(this).val()).tab('show');
	});  




  /* -------------------------- date------------------ */    
    
  $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "images/calender.png",
      buttonImageOnly: true,
      buttonText: "Select date"
    });  
    