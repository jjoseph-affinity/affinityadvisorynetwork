$(function($){



    $('.color-com').each( function( span, colorCom ) {
	    var $colorButton = $( colorCom );
	    $colorButton.on( 'click', 'span', function() {
	    $colorButton.find('.checked').removeClass('checked');
	    $( this ).addClass('checked');
	    });
    });

    $('.right-side').on('click',function(){
    	$('.them-style').toggleClass('color');
    });



	$('a.target[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 54)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	  });




	/*======================================================================
                color combination
    =======================================================================*/
    $(".green").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/green.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    $(".hot-pink").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/hot-pink.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    $(".pomegranate").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/pomegranate.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    $(".yellow").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/yellow.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    /*--------------------------------------------------------------------*/
    $(".victoria").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/victoria.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    $(".sunflower").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/sunflower.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/
    /*--------------------------------------------------------------------*/
    $(".Very_Berry").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/Very_Berry.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/

    /*--------------------------------------------------------------------*/
    $(".Mediterranean_Sea").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/Mediterranean_Sea.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/

    /*--------------------------------------------------------------------*/
    $(".Leagues_Under").on('click',function(){
    var element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'assets/css/theme-color-style/Leagues_Under.css');
    document.getElementsByTagName('head')[0].appendChild(element);
    })
    /*--------------------------------------------------------------------*/












		
		$(window).on('scroll',function(){
            var scrollbtn = $(window).scrollTop();
            if (scrollbtn<800) {
               $('.top-arrow ').fadeOut();
              
            }else{
              $('.top-arrow ').fadeIn();
            }
          });
          $('.top-arrow ').click(function(){
            $('html').animate({
              scrollTop:0
            },1000,'easeInOutExpo')
          });


//		$('.video-play').magnificPopup({
//	        type:'iframe',
//	        gallery: {
//	        enabled:true
//	        },
//	    });

/*============ DropDown Nav Menu Start  ================*/
	/*if($('body').outerWidth() <= 991){
	    $('.nav-menu #dropDown').click(function(j) {
	        var dropDown = $(this).closest('li').find('.dropdown-nav-menu');

	        $(this).closest('.nav-menu').find('.dropdown-nav-menu').not(dropDown).slideUp();

	        if ($(this).hasClass('active')) {
	            $(this).removeClass('active');
	        } else {
	            $(this).closest('.nav-menu').find('a.active').removeClass('active');
	            $(this).addClass('active');
	        }

	        dropDown.stop(false, true).slideToggle();

	        j.preventDefault();
	    });
	}*/

/*============ DropDown Nav Menu End  ================*/

		    $('#sidvarNavClick').click(function(){
		    	$('.navigation').addClass('open-nav');
		    });
		    $('.close-nav').click(function(){
		    	$('.navigation').removeClass('open-nav');
		    });

			$('#NavSearch').click(function(){
		    	$('#search').toggleClass('active');
		    });


			$('.search-bar form input[type="text"]').blur(function(){
				$('#search').removeClass('active');
			})





	$('.bannre-carousel').owlCarousel({
	    loop:true,
	    autoplay:true,
	    responsiveClass:true,
	    animateIn:'fadeIn',
	    animateOut:'fadeOut',
	    nav:true,
	    navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        dots: true,
        smartSpeed: 3600,
	    responsive:{
		    0:{
		    	items:1,
		    },
		    600:{
		    	items:1,
		    },
		    1000:{
		    	items:1,
		    }
	    }
	});

	$('.testmonials').owlCarousel({
	    loop:true,
	    autoplay:true,
	    responsiveClass:true,
	    nav:false,
	    dots:true,
	    margin:20,
	    responsive:{
		    0:{
		    	items:1,
		    },
		    600:{
		    	items:1,
		    },
		    1200:{
		    	items:2,
		    }
	    }
	});
	$('.memburs').owlCarousel({
	    loop:true,
	    autoplay:true,
	    responsiveClass:true,
	    nav:false,
	    dots:true,
	    margin:20,
	    responsive:{
		    0:{
		    	items:1,
		    },
		    600:{
		    	items:1,
		    },
		    1200:{
		    	items:1,
		    }
	    }
	});
	$('.teams').owlCarousel({
	    loop:true,
	    autoplay:false,
	    responsiveClass:true,
	     navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        nav: true,
	    dots:true,
	    margin:20,
	    smartSpeed:1000,
	    responsive:{
		    0:{
		    	items:1,
		    },
		    300:{
		    	items:1,
		    },
		    500:{
		    	items:1,
		    }
	    }
	});




		$(".main-menu").sticky({
			topSpacing:0,className: 'is-sticky'
		});



		$('.slid-toggle').click(function(){
			$('.sidbar-nav').toggleClass('active-nav');
		})
	
		



 	wow = new WOW(
      {
      }) 
      .init();



      	/*===================== About Tab Start =================================*/
      	$('ul.tab-btn').addClass('active').find('> li:eq(0)').addClass('current');
		$('ul.tab-btn li a').click(function (g) { 
			var tab = $(this).closest('.about-content-left'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tab-btn > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
		/*===================== About Tab End =================================*/

		/*===================== Banner Tab Start =================================*/
      	$('ul.btn-grup').addClass('active').find('> li:eq(0)').addClass('current');
		$('ul.btn-grup li a').click(function (g) { 
			var tab = $(this).closest('.barrer-content-area'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.btn-grup > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.banner-tab-content').find('div.banner-tab-item').not('div.banner-tab-item:eq(' + index + ')').slideUp();
			tab.find('.banner-tab-content').find('div.banner-tab-item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
		/*===================== Banner Tab End =================================*/






	   	  





})(jQuery);



