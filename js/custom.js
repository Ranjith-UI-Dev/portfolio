$(document).ready(function(){

	/*****************mobile menu accordian**************/

		// Toggle main menu open/close on clicking .navbar-toggle
		$(".navbar-toggle").on("click", function () {
			$(".mob_navi").toggleClass("menu_open");
		  });
		
		  // Close the menu when clicking .mob_sub_navigate i
		  $(".mob_sub_navigate i").on("click", function () {
			$(".mob_navi").removeClass("menu_open");
		  });
		
		  // Hide all submenus initially
		  $(".mob_sub_menu").hide();
		
		  // Accordion functionality for submenus
		  $(".mob_sub_link").click(function () {
			if ($(this).hasClass("active")) {
			  // If the clicked menu is already active, close it
			  $(this).removeClass("active").find(".mob_sub_menu").slideUp();
			} else {
			  // Close any open submenus
			  $(".mob_sub_link.active .mob_sub_menu").slideUp();
			  $(".mob_sub_link.active").removeClass("active");
		
			  // Open the clicked submenu
			  $(this).addClass("active").find(".mob_sub_menu").slideDown();
			}
		
			// Prevent event propagation to child elements
			$(".mob_sub_menu").click(function (e) {
			  e.stopPropagation();
			});
		
			return false; // Prevent default behavior
		  });

		// Menu toggle button
		$(".mobile-header").on("click", function () {
			$(".navbar-toggle").toggleClass("menu_open")
		})

	/*******home-review*******/
	$('.hme_Sectors_slick').slick({
		slidesToShow: 3,
		slidesToScroll:1,
	    accessibility:false,
		speed: 3000,
		autoplay: false,
		arrows:false,
		dots: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						speed:2000,
						infinite: true
						
					}
			},
		
			{
				breakpoint: 767,
				settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
						
					}
			},
			{
				breakpoint: 480,
				settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
						
					}
			}
		]
	});	

	/*******home-insights/ blogs*******/
	$('.hme_insights_slick').slick({
		slidesToShow: 3,
		slidesToScroll:1,
	    accessibility:false,
		speed: 2000,
		autoplaySpeed:4000,
		infinite:true,
		autoplay: true,
		arrows:false,
		dots: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
						
					}
			},
		
			{
				breakpoint: 767,
				settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
			},
			{
				breakpoint: 480,
				settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
			}
		]
	});


	/** fixed header **/
	$(window).scroll(function () {	var e = $(".header_wrapper");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});
	$(window).scroll(function () {	var e = $(".mobile-header");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});
	$(window).scroll(function () {	var e = $(".mob_navi");		$(window).scrollTop() >= 100 ? e.addClass("fixed") : e.removeClass("fixed")	});


    // accordion faq
    $(".set > a").on("click", function(e) {
        e.preventDefault();
        const isActive = $(this).hasClass("active");
        const $parentSet = $(this).closest(".set");
        const isInFaqBox = $parentSet.closest(".faq_question_box").length > 0;
        
        // Collapse all accordion items
        $(".set > a").removeClass("active");
        $(".content").slideUp(300);
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");

        // If clicked item wasn't active, open it
        if (!isActive) {
            $(this).addClass("active");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(this).siblings(".content").slideDown(300);
        }
        
        // Handle .faq_question_box .set active class separately
        if (isInFaqBox) {
            $(".faq_question_box .set").removeClass("active");
            if (!isActive) {
                $parentSet.addClass("active");
            }
        }
    });

});
