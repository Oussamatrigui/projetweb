(function ($) {
	
	//slider-area background setting
    function sliderBgSetting() {
        if ($(".slider-area-wt .slider-items-wt").length) {
            $(".slider-area-wt .slider-items-wt").each(function() {
                var $this = $(this);
                var img = $this.find(".slider").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }
    //    home2 slider   //
    //Setting hero slider home page 1
    function heroSlider() {
        if ($(".slider-active2-wt").length) {

            var time = 7, // time in seconds
                $progressBar,
                $bar,
                $elem,
                isPause,
                tick,
                percentTime,
                owl = $('.slider-active2-wt');


            owl.owlCarousel({
                items : 1,
                smartSpeed:5000,
				margin:0,
				animateOut: 'slideOutDown',
				animateIn: 'slideInDown',
				nav:true,
                rtl:true,
				autoplay:true,
				autoplayTimeout:6000,
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                onInitialized: progressBar
            });

            owl.on('changed.owl.carousel', function(event) {
               moved();
            })

            // progress bar
            function progressBar() {
                buildProgressBar();
                start();
            }

            function buildProgressBar(){
                $progressBar = $("<div>",{
                    id:"progressBar"
                });

                $bar = $("<div>",{
                    id:"bar"
                });

                $progressBar.append($bar).prependTo(owl);
            }

            function start() {
                percentTime = 0;
                isPause = false;
                tick = setInterval(interval, 10);
            };

            function interval() {
                if(isPause === false){
                    percentTime += 1 / time;

                    $bar.css({
                        width: percentTime+"%"
                    });

                    if(percentTime >= 500){
                        owl.trigger("next.owl.carousel");
                        percentTime = 0;
                    }
                }
            }

            function moved(){
                clearTimeout(tick);
                start();
            }
        }
    }

	heroSlider();

	// slider-active
	$(".slider-active2-wt").on('translate.owl.carousel', function(){
		$('.slider-content-wt h2').removeClass('fadeInUp animated').hide();
		$('.slider-content-wt p').removeClass('fadeInUp animated').hide();
		$('.slider-content-wt ul').removeClass('fadeInUp animated').hide();
	});

	$(".slider-active2-wt").on('translated.owl.carousel', function(){
		$('.owl-item.active .slider-content-wt h2').addClass('fadeInUp animated').show();
		$('.owl-item.active .slider-content-wt p').addClass('slideInUp animated').show();
		$('.owl-item.active .slider-content-wt ul').addClass('fadeInUp animated').show();
	});

    // slider-active
	$('.slider-active3-wt').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

    // slider-active
	$(".slider-active3-wt").on('translate.owl.carousel', function(){
		$('.slider-content-wt h2').removeClass('fadeInUp animated').hide();
		$('.slider-content-wt p').removeClass('fadeInUp animated').hide();
		$('.slider-content-wt ul').removeClass('fadeInUp animated').hide();
	});

	$(".slider-active3-wt").on('translated.owl.carousel', function(){
		$('.owl-item.active .slider-content-wt h2').addClass('fadeInUp animated').show();
		$('.owl-item.active .slider-content-wt p').addClass('slideInUp animated').show();
		$('.owl-item.active .slider-content-wt ul').addClass('fadeInUp animated').show();
	});
	/*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
	$(window).on('load', function() {

		sliderBgSetting();

	});

   

	

	

	
    
    

    

	

    
    
	/*===============================================
                    rtl-sj start
    =================================================*/

    // slider-active
	$('.rtl-slider-active').owlCarousel({
		smartSpeed:1000,
		margin:0,
		rtl:true,
		animateOut: 'fadeOut',
		animateIn: 'FadepIn',
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
    
    
	// slider-active
	$('.rtl-slider-active3').owlCarousel({
		smartSpeed:1000,
		margin:0,
		nav:true,
		rtl:true,
		autoplay:true,
		autoplayTimeout:3000,
		loop:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			450:{
				items:1
			},
			678:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

    // slider-active
	$(".rtl-slider-active3").on('translate.owl.carousel', function(){
		$('.slider-content h2').removeClass('fadeInUp animated').hide();
		$('.slider-content p').removeClass('fadeInUp animated').hide();
		$('.slider-content ul').removeClass('fadeInUp animated').hide();
	});

	$(".rtl-slider-active3").on('translated.owl.carousel', function(){
		$('.owl-item.active .slider-content h2').addClass('fadeInUp animated').show();
		$('.owl-item.active .slider-content p').addClass('slideInUp animated').show();
		$('.owl-item.active .slider-content ul').addClass('fadeInUp animated').show();
	});
	
})(jQuery);
