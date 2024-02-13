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
});

// Mobile navigation item click event
$(".moblie-side-nav .item a").on("click", function (e) {
    e.preventDefault();
    var targetSection = $(this).attr("href");

    // Smooth scroll to section function
    $("html, body").animate({
        scrollTop: $(targetSection).offset().top
    }, 2000);

    // Close the mobile navigation (optional)
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
        // endTrigger:".visual3",
        // end:"100% 100%",
        // markers:true,
        scrub:0
    },
    // scale:0.7
    width:"60vw",
    height: "52vh",
}) 



// const visual3 = gsap.to(".visual3 .inner .top .title",{
//     scrollTrigger:{
//         trigger:".visual3",
//         markers:false,
//         start:"top 100%",
//         end:"100% 0%",
//     },
//     opacity:1,
//     yPercent: -10,
//     stagger:1,
// })





// const visual3Desc = gsap.to(".visual3 .inner .top .desc",{
//     scrollTrigger:{
//         trigger:".visual3",
//         markers:false,
//         start:"top 80%",
//         end:"0% 0%",
//     },    
//     opacity:1,    
//     stagger:0.2,
// })

// const numberSection = gsap.to(".visual3 .number-section .item",{
//     scrollTrigger:{
//         trigger:".visual3 .number-section",
//         markers:false,
//         start:"top 90%",
//         end:"0% 100%"
//     },
//     opacity:1,
//     stagger:0.2,
// })

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

// each 부모 두마리
// each 자식들

$('[data-ani="textParent"]').each(function(){
    $child=$(this).find('[data-ani="textFade"]') //4 //2
    $($child).each(function(i,el){
        gsap.to(el,{
            scrollTrigger:{
                trigger:el,
                // markers:true,
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
            // markers:true,
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


// gsap.utils.toArray('.top-con .item').forEach((item) => {
//     gsap.fromTo(item, {
//         opacity: 0,
//         y: 20, 
//     }, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//             trigger: item,
//             start: 'top 80%', 
//             end: 'bottom 20%',
//             toggleActions: 'play none none reverse',
//         },
//     });
// });



const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".visual5 .bottom", // Set the trigger element
      start: "top 80%", // Adjust the start position based on your needs
      end: "bottom 20%", // Adjust the end position based on your needs
      toggleActions: "play none none reverse",
    //   markers: true,
    },
  });
  
  // Add animations to the timeline
  tl
//   .to(".visual5 .bottom .title", { opacity: 1, y: 0, duration: 0.3 })
    // .to(".visual5 .bottom .desc", { opacity: 1, y: 0, duration: 0.5 }, "+=0.5")
    .to(".visual5 .bottom .list .main-item", {
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
        // breakpoints : { // 반응형 설정 가능 width값으로 조정
        //     767 : {
        //         slidesPerView : 1,
        //         slidesPerGroup:1,
        //         width:"1000px"
        //     },
        // },
        
    });


       gsap.set('.visual8 .circle',{scale:0.5,opacity:0,})
       $('.visual8').mousemove(function(e){
        // console.log(+'//'+);
        
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