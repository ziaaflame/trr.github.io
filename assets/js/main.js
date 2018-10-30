(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".product-list").owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            items:5,
          
        });
        $(".people-comment-list").owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    items:1,
		  
		});

        



        


    });



    jQuery(window).load(function(){

        
    });


}(jQuery));	

