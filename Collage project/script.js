var navLinks = document.getElementById("navLinks");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}



var tl=gsap.timeline();

tl.from("nav a img",{
    opacity:0,
    duration:0.5,
    delay:1,
    y:-40,
    stagger:0.15
})
tl.from("ul li ",{
    y:-40,
    opacity:0,
    duration:0.5,
    stagger:0.15
})
tl.from(".text-box h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
 
},"-=0.3")
tl.from(".text-box p",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
 
},"-=0.4")
tl.from(".hero-btn",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:-40
 
})

gsap.from(".course h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
    scrollTrigger:{
        trigger:".course h1",
        scroller:"body",
     
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".course p",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
    scrollTrigger:{
        trigger:".course h1",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".course-col h3",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
    scrollTrigger:{
        trigger:".course h1",
        scroller:"body",
        
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from(".campus h1,.campus p",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
    scrollTrigger:{
        trigger:".campus h1",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from(".campus-col",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:40,
    scrollTrigger:{
        trigger:".campus-col",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from(".facilities h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-40,
    scrollTrigger:{
        trigger:".facilities h1",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})


gsap.from(".facilities p",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-40,
    scrollTrigger:{
        trigger:".facilities p",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from("#box1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-60,
    scrollTrigger:{
        trigger:"#adi",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#box3",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:60,
    scrollTrigger:{
        trigger:"#adi",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#box2",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:60,
    scrollTrigger:{
        trigger:"#adi",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from(".testimonials h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-40,
    scrollTrigger:{
        trigger:".testimonials h1",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".testimonials p",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-40,
    scrollTrigger:{
        trigger:".testimonials p",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from("#ta1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-60,
    scrollTrigger:{
        trigger:"#adi2",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#ta2",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:60,
    scrollTrigger:{
        trigger:"#adi2",
        scroller:"body",
       
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

function preventCodeOnMobile() {
    const width = window.innerWidth;

    // Assuming mobile devices have a screen width of 768px or less
    if (width <= 450&&width >= 200) {
        console.log("mobile is detected");
        return; // Stops further code execution
    }

    // Code that you want to execute only on non-mobile devices
    
    gsap.from(".cta",{
        opacity:0,
        duration:0.5,
        delay:0.5,
        x:100,
        scrollTrigger:{
            trigger:".cta",
            scroller:"body",
           
            start:"top 70%",
            end:"top 50%",
            scrub:1
        }
    })
    
    gsap.from(".cta h1",{
        opacity:0,
        duration:0.5,
        delay:0.5,
        x:-100,
        scrollTrigger:{
            trigger:".cta h1",
            scroller:"body",
           
            start:"top 70%",
            end:"top 50%",
            scrub:1
        }
    })
    
    gsap.from("footer",{
        opacity:0,
        duration:0.5,
        delay:0.5,
        y:100,
        scrollTrigger:{
            trigger:"footer",
            scroller:"body",
             markers:false,
            start:"top 80%",
           end:"top 85%",
            scrub:1
        }
    })
 console.log("Mobile is not detected");
    // Your code goes here
}

preventCodeOnMobile();
