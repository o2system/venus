import * as jQuery from 'jquery';
import owlCarousel from 'owl.carousel';

export default(function(){
	
  	$('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        autoplay: true,
        smartSpeed: 2500,
        autoplaySpeed: false,
        responsiveClass:true,
        nav: true,
        dot: true,
        stagePadding: 0,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        navContainer: '.nav-container'
    });
    jQuery('.screenshot-slider').owlCarousel({
        loop:true,
        margin:10,
        items: 5,
        autoplay: false,
        smartSpeed: 2000,
        responsiveClass:true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items: 1
            },
            650:{
                items:2, 
            },
            776:{
                items:4, 
            },
            1199:{
                items:5,   
            },
        },
    })
});