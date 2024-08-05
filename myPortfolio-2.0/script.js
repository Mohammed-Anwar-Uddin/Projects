function particles(){
    particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#000000" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            grab: { distance: 349.689700633461, line_linked: { opacity: 1 } },
            bubble: {
              distance: 217.04877970352746,
              size: 12.058265539084863,
              duration: 0.2431074954178594,
              opacity: 0.5225248400270107,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
      var count_particles, stats, update;
      // stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector(".js-count-particles");
      update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
}

function skillsPercentage(){
        let circle = document.querySelectorAll('.circular-progress')
        circle.forEach(function(progress){
            let degree = 0;
            var targetDegree = parseInt(progress.getAttribute('data-degree'));
            let color = progress.getAttribute("data-color");
            let number = progress.querySelector('.number')
            var interval = setInterval(() => {
                degree+=1;
                if(degree > targetDegree){
                    clearInterval(interval)
                    return;
                }
                progress.style.background = `conic-gradient(${color} ${degree}%, #ccc 0%)`;
                number.innerHTML = degree + "%";
            }, 10);
        })
    
}


// ANimation on scroll

// get the element to animate
var element = document.getElementById('skills-container');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
 
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}
let firstTime = true

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      if(firstTime){
        skillsPercentage()
        firstTime = false
      }
        
  }
}








let menu = document.querySelector("nav i")
let cross = document.querySelector("#nav-side i")
// let h4s = document.querySelectorAll('#nav-side h4')
let nav = document.querySelector('nav')

let tl = gsap.timeline()

tl.to("#nav-side",{
  right:"0",
  duration:0.1,
})

tl.from("#nav-side h4",{
  x:300,
  opacity:0,
  duration:0.2,
  stagger:0.2

})

tl.from("#nav-side .cross",{
  duration:0.3,
  opacity:0
})

tl.pause()

menu.addEventListener("click",(e)=>{
  tl.play()
})

nav.addEventListener('click',(e)=>{
  if(e.target.localName === 'a'){
    tl.reverse()
  }
})

cross.addEventListener("click",()=>{
  tl.reverse()
})



gsap.from('#hero #bug',{
  y:-700,
  duration:2,
  delay:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#hero",
    scroller:"body",
    start:"top 10%",
   end:"top -70%",
   scrub:2,
  }
})




gsap.from("#skills-question #left-in",{
  x:-300,
  duration:2.5,
  scrollTrigger:{
    trigger:"#skills-question #left-in",
    scroller:"body",
    start:"top 100%",
    end:"top 40%",
   scrub:2,
  }

})



gsap.from("#skills-question #right-in",{
  x:300,
  duration:2.5,
  scrollTrigger:{
    trigger:"#skills-question #right-in",
    scroller:"body",
    start:"top 100%",
    end:"top 40%",
   scrub:2,
  }

})



gsap.from("footer",{
  y:100,
  duration:3,
  ease:"none",
  scrollTrigger:{
    trigger:"footer",
    scroller:"body",
    start:"top 110%",
    end:"top -40%",
   scrub:2,
  }

})

let tl3 = gsap.timeline()

tl3.to(".counter",0.25,{
  delay:2.5,
  opacity:0,
})


tl3.to('.bar',1.5,{
  height:0,
  stagger:{
    amount:0.5
  },
  ease:"power4.inOut"
})



tl3.from('nav',{
  y:-200
},'-=0.2')
tl3.from(".hero-text h1 span",{
  x:300,
  opacity:0,
  stagger:0.030
})

tl3.from(".hero-text h3",{
  x:-400,
  opacity:0,
},'-=0.1')


tl3.from('.hero-btns',{
  y:300,
  opacity:0,
},'-=0.3')
tl3.from('.hero-icons',{
  x:300,
  opacity:0,
},'-=0.4')



function section3(){

  gsap.from(".left1",{
    x:-500,
    duration:1,
    scrollTrigger:{
      trigger:".left1",
      scroller:"body",
    }
  },'a')
  gsap.from(".img1",{
    x:500,
    duration:1,
    scrollTrigger:{
      trigger:".left1",
      scroller:"body",
    }
  },'a')

  gsap.from(".left2",{
    x:-500,
    duration:1,
    scrollTrigger:{
      trigger:".left2",
      scroller:"body",
    }
  },'b')
  gsap.from(".img2",{
    x:500,
    duration:1,
    scrollTrigger:{
      trigger:".left2",
      scroller:"body",
    }
  },'b')
  gsap.from(".left3",{
    x:-500,
    duration:1,
    scrollTrigger:{
      trigger:".left3",
      scroller:"body",
    }
  },'c')
  gsap.from(".img3",{
    x:500,
    duration:1,
    scrollTrigger:{
      trigger:".left3",
      scroller:"body",
    }
  },'c')
  gsap.from(".left4",{
    x:-500,
    duration:1,
    scrollTrigger:{
      trigger:".left4",
      scroller:"body",
    }
  },'d')
  gsap.from(".img4",{
    x:500,
    duration:1,
    scrollTrigger:{
      trigger:".left4",
      scroller:"body",
    }
  },'d')


}
let aboutMe = document.getElementById('about')
let blurBackground = document.getElementById('blur-background')
let section2PopUp = document.querySelector('.section2')
let aboutBtn = document.getElementById('about-btn')
let aboutCross = document.querySelector('.about-cross')
let backToTop = document.querySelector('.back-to-top')

aboutBtn.addEventListener('click',()=>{
  aboutMe.style.display = 'flex'
  blurBackground.style.display = 'block'
  gsap.from(aboutMe,{
    y:600,
    duration:1,
  })
})
aboutCross.addEventListener('click',()=>{
  aboutMe.style.display = 'none'
  blurBackground.style.display = 'none'
})
blurBackground.addEventListener('click',(e)=>{
  if(e.target.id === 'blur-background'){
    aboutMe.style.display = 'none'
    blurBackground.style.display = 'none'
  }
})




function marquee(){
  let currentScroll = 0;
let isScrollingDown = false;
// let arrows = document.querySelectorAll(arrow)

let tween = gsap
  .to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee_inner", { xPercent: -50 });

window.addEventListener("scroll", function () {
  backToTop.classList.toggle('top-style',window.pageYOffset > 500)
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;

});
}

document.addEventListener('scroll',animate)



function startLoader(){
  let counterElement = document.querySelector('.counter')
  let currentValue = 0

function updateCounter(){
  if (currentValue === 100){
    return
  }


  currentValue +=Math.floor(Math.random()*10) +1;
if(currentValue > 100){
  currentValue =100
}

  counterElement.textContent=currentValue

  let delay = Math.floor(Math.random()*160) +50;


  setTimeout(updateCounter,delay)
}
  updateCounter()
}

startLoader()




let cursor = document.querySelector("#cursor")


document.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,{
    x:e.pageX + 15,
    y:e.pageY + 10,
    duration:1,
    ease:"linear"
  })
})





section3()


marquee()


particles()