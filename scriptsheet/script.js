const menu = document.querySelector("#menu_bar")
const cross = document.querySelector("#full i")


function checkWidth() {
    var width = window.innerWidth;
    console.log("Width:", width);
    if (width > 330) {
      homepage();
    } else if (width <= 768) {
      
    }
  }


 var tl = gsap.timeline();
var feel = document.querySelector('.feelhead');
var feelText = feel.textContent;

var allfeeltext = feelText.split("")


var clutter = "";

allfeeltext.forEach( function(elem) {
    clutter += `<span>${elem}</span>`
})

feel.innerHTML = clutter;



tl.from(".feelhead span", {
    opacity:0,
    y:5,
    stagger:0.1,
    duration:0.4
})

tl.to(".feelhead span", {
    opacity:0,
    duration:0.5
})
tl.to(".feelhead span", {
    display:"none"
})


tl.from(".logo img", {
    scale:0.6,
    duration:0.4,
    opacity:0
})

tl.from("#menu_bar", {
    opacity:0,
    duration:0.2
})

if (window.innerWidth > 1100) {
    tl.from(".nav-list li", {
        y:-20,
        opacity:0,
        duration:0.7,
        stagger:0.15
    })
  }

tl.to(".hd",{
    display:"block"
},"dnone")

tl.from(".hd h1",{
    opacity:0,
    duration:0.35,
    x:-100
},"dnone")
tl.from(".line1, .line2", {
    width:"100%",
    opacity:0,
    height:"10px"
})
tl.from(".backImg img", {
    opacity:0,
    duration:0.2,
    x:100
},"dnone")
tl.from("#home-img",{
    opacity:0,
    duration:0.5
})

tl.from(".bikeImg img", {
    x:-100,
    opacity:0,
    duration:1,
},"sBike")

tl.from(".s-bike h1", {
    opacity:0,
    duration:0.3,
    x:-50
},"sBike")
tl.from(".s-bike p", {
    opacity:0,
    duration:0.7,
    x:40
},"-=0.9")

var tlbike = gsap.timeline({scrollTrigger:{
  trigger:"#bikes",
  // markers:true,
  scrub:2,
  start: "-50% 5%" ,
  end: "50% 100%"
}})
tlbike.from(".bikes-side img",{
  opacity:0,
  duration:0.3
})
tlbike.from(".bikesheading h1",{
  opacity:0,
  y:50,
  duration:0.3
})
tlbike.from(".bike-main-heading h1",{
  opacity:0,
  y:200,
  duration:0.3
})
tlbike.from(".bikes-info-side",{
  opacity:0,
  x:100,
  duration:0.3
},"border")
tlbike.from(".slidepage",{
  opacity:0,
  duration:0.3
},"border")

var tlex = gsap.timeline({scrollTrigger:{
  trigger:"#exp-page",
  // markers:true,
  scrub:2,
  start: "0% 35%" ,
  end: "80% 60%"
}})

tlex.from(".exp-heading h1",{
  y:100,
  duration:0.3,
  opacity:0
})
tlex.from(".ride1 img",{
  x:-100,
  duration:0.3,
  opacity:0
},"ride1")

tlex.from(".ride1 .exp-text",{
  x:100,
  duration:0.3,
  opacity:0
},"ride1")
tlex.from(".ride2 img",{
  x:-100,
  duration:0.3,
  opacity:0
},"ride2")

tlex.from(".ride2 .exp-text",{
  x:100,
  duration:0.3,
  opacity:0
},"ride2")
tlex.from(".ride3 img",{
  x:-100,
  duration:0.3,
  opacity:0
},"ride3")

tlex.from(".ride3 .exp-text",{
  x:100,
  duration:0.3,
  opacity:0
},"ride3")
tlex.from(".ride4 img",{
  x:-100,
  duration:0.3,
  opacity:0
},"ride4")

tlex.from(".ride4 .exp-text",{
  x:100,
  duration:0.3,
  opacity:0
},"ride4")

var tlshop = gsap.timeline({scrollTrigger:{
  trigger:"#shop-page",
  // markers:true,
  scrub:2,
  start: "0% 35%" ,
  end: "50% 100%"
}})

tlshop.from(".parts-heading h1",{
  y:100,
  duration:0.3,
  opacity:0
},)
tlshop.from(".elem h2",{
  x:100,
  duration:0.3,
  opacity:0
},)

var tlride = gsap.timeline({scrollTrigger:{
  trigger:"#ride",
  // markers:true,
  scrub:2,
  start: "0% 35%" ,
  end: "50% 100%"
}})

tlride.from(".test-ride-section",{
  opacity:0,
  duration:0.3
})
tlride.from(".animated-text",{
  opacity:0,
  duration:0.3,
  y:100
})
tlride.from(".cta-button",{
  opacity:0,
  duration:0.3,
})

var tlfooter = gsap.timeline({scrollTrigger:{
  trigger:"#footer",
  // markers:true,
  scrub:2,
  start: "0% 45%" ,
  end: "50% 100%"
}})

tlfooter.from(".foot-panel",{
  opacity:0,
  duration:0.3,
  x:-100
})
tlfooter.from(".foot-content",{
  opacity:0,
  duration:1,
  x:100
})
tlfooter.from("foot-panel2",{
  opacity:0,
  duration:0.3,
  x:-100
})
tlfooter.from("foot-panel3",{
  opacity:0,
  duration:0.3,
  x:100
})

var tltab;
var isTimelineCreated = false;

function createTabMenuTimeline() {
  var tltabLocal = gsap.timeline({ paused: true });
  tltabLocal.to("#full", {
    right: 0,
    duration: 0.6,
  })
.from("#full i", {
    opacity: 0,
    duration: 0.2
  })
.from(".nav-list li", {
    x: 100,
    stagger: 0.1,
    duration: 0.4,
    opacity: 0
  });
  return tltabLocal;
}

function tabmenu() {
  if (!isTimelineCreated) {
    tltab = createTabMenuTimeline();
    isTimelineCreated = true;
  }
  tltab.play();
}

function tabmenureverse() {
  tltab.reverse();
}
menu.addEventListener('click', tabmenu);
cross.addEventListener('click', tabmenureverse);

homepage();