
var crsr = document.querySelector("#cursor")

var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(cur) {

    crsr.style.left = cur.x - 10 + "px"
    crsr.style.top = cur.y - 10 + "px"
    blur.style.left = cur.x - 250 + "px"
    blur.style.top = cur.y - 250 + "px"

});

var h4all = document.querySelectorAll("#nav h4") 


h4all.forEach(function (elm) {

    elm.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        
    })

    elm.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#addf24"
        
    })
    
});

// var arrow_i = document.querySelector("#arrow i") 

// arrow_i.addEventListener("mouseenter", function(){
//     crsr.style.scale = 4
//     crsr.style.border = "0.1px solid #fff"
//     crsr.style.backgroundColor = "transparent"
    
// });

// arrow_i.addEventListener("mouseleave", function(){
//     crsr.style.scale = 1
//     crsr.style.border = "0px solid #fff"
//     crsr.style.backgroundColor = "#addf24"
    
// });






gsap.to("#nav", {

    backgroundColor: "#000",
    height: "100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }


});

gsap.to("#main", {

    backgroundColor: "#000",
    scrollTrigger:{

        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -30%",
        end: "top -100%",
        scrub: 2

    }

});


gsap.from("#about-us img, #about-us-in", {

    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1

    }

});



gsap.from(".card", {

    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
    
    }

});


gsap.from("#colon1",{

    y:-70,
    x:-70,
    scrollTrigger: {

        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub: 4
    }

});

gsap.from("#colon2",{

    y:70,
    x:70,
    scrollTrigger: {

        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub: 4
    }

});

gsap.from("#page-4 h1",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
    trigger: "#page-4",
    scroller: "body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:3

    }
});
