$(".header  .item").hover(function(){    
    $(this).addClass("active");
    $(this).find(".sub-nav").addClass("active")
}, function(){
    $(this).removeClass("active");
    $(this).find(".sub-nav").removeClass("active")
});

$(".moblie-header .hambuger-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".moblie-side-nav").toggleClass("on");
    
    $("body").toggleClass("no-scroll");
});

$(".moblie-side-nav .item a").on("click", function (e) {
    e.preventDefault();
    var targetSection = $(this).attr("href");


    $("html, body").animate({
        scrollTop: $(targetSection).offset().top
    }, 2000);


    $(".moblie-header .hambuger-btn").removeClass("active");
    $(".moblie-side-nav").removeClass("on");
});





$(".visual4 .scroll-slider .item").hover(function(){
    $(this).find(".txt").addClass("active");
}, function() {
    $(this).find(".txt").removeClass("active");

});






gsap.registerPlugin(ScrollTrigger); 

gsap.set(".header .logo", {scale:15,})

gsap.to(".header .logo", {
    scale:3,
    position:"absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

scrollTrigger: {
    trigger: '.header',
    start: "top top",
    endTrigger: ".visual2",
    
    scrub:0
}
});

const visual2IMG = gsap.from(".visual2 .img-box",{
    scrollTrigger:{
        trigger:".visual2",
        start:"top 90%",
        end:"100% 70%",
        scrub:0
    },
    scale:0.7,
    height: "52vh",
}) 



gsap.to('.visual4 .scroll-slider .item .wrap',20,{
    xPercent:-100,
    repeat:-1,
    ease:'none'
})

gsap.set('.visual4 .scroll-slider',{xPercent:-30})
gsap.set('.visual4 .scroll-slider:last-child',{xPercent:20})


const ScrollSlider = $(".visual4 .scroll-slider").each(function(index) {
    var direction = $(this).data('x');



    
    gsap.to(this, {
        xPercent: direction,
        scrollTrigger: {
            trigger: this,
            start: "0% 100%",
            end: "100% 0%",
            scrub: true
        }
    });
 
});




gsap.set('[data-ani="textFade"]',{opacity:0.3}) 


$('[data-ani="textParent"]').each(function(){
    $child=$(this).find('[data-ani="textFade"]') 
    $($child).each(function(i,el){
        gsap.to(el,{
            scrollTrigger:{
                trigger:el,
                start:`${70*i}% 80%`,
                end:"0% 0%",
            },    
            opacity:1,    
        })
    })

})


$('[data-ani="fadeUp"]').each(function(i,el){
    $delay = ($(this).data('delay'))?$(this).data('delay'):0;
    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:"top 90%",
            end:"0% 0%",
        },
        delay:$delay,    
        opacity:0,    
        yPercent:20
    })
})


ScrollTrigger.create({
    trigger:".visual7",
    start:"0% 50%",
    onEnter:function(){
        $('.visual7 .list').addClass('active');
    }
})



const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".visual5 .bottom",
      start: "top 80%", 
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
  
  tl.to(".visual5 .bottom .list .main-item", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.5,
    });


    const mainSlide = new Swiper(".visual6 .swiper", {
        slidesPerView: "1",
        speed: 1000,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".visual6 .swiper-pagination",
        },
    });


       gsap.set('.visual8 .circle',{scale:0.5,opacity:0,})
       $('.visual8').mousemove(function(e){
        gsap.to('.visual8 .circle',{
            x:e.offsetX-window.innerWidth/2,
            y:(e.offsetY-$('.visual8').outerHeight()/2)/3,
            opacity:1,
            scale:1
        })

       })

       $('.visual8').mouseleave(function(){
          
            gsap.to('.visual8 .circle',{
                x:0,
                y:0,
                opacity:0,
                scale:0
            })
       })


       gsap.to(".visual8 .rotate-txt",20,{
        xPercent:-100,
        repeat:-1,
        ease:"none",
       })