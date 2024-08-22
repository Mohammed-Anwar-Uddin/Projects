function firstSection(){
    gsap.set(".slidesm", { scale: 5 });

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});

tl.to(
  ".vdodiv",
  {
    "--clip": "0%",
    ease: Power2,
  },
  "a"
)
  .to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  )
  .to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  )
  .to(
    ".rgt",
    {
      xPercent: 8,
      ease: Power4,
      stagger: 0.03,
    },
    "b"
  );

gsap.to(".slide", {
  scrollTrigger: {
    trigger: ".real",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
  xPercent: -200,
  duration: 4,
});
}

function team(){
    document.querySelectorAll(".listelem").forEach(function (list) {
        list.addEventListener("mousemove", function (e) {
          gsap.to(this.querySelector(".picture"), {
            opacity: 1,
            ease: Power2,
            duration: 0.5,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
          });
        });
         
              list.addEventListener("mouseenter", function (e) {
                gsap.to(list.querySelector('.bluelayer'), {
                  height:'100%' ,
                });
              });
      
        list.addEventListener("mouseleave", function (e) {
          gsap.to(this.querySelector(".picture"), {
            opacity: 0,
            ease: Power2,
            duration: 0.6,
          });
      
          gsap.to(list.querySelector('.bluelayer'),{
              height:'0%'
          })
          
        });
      });
}

function textParaAnimation(){
    var clutter = "";
let arr = document
  .querySelector(".textpara")
  .textContent.split("")
  .forEach((e) => {
    if (e === " ") clutter += `<span>&nbsp;</span>`;
    clutter += `<span>${e}</span>`;
  });

document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", { opacity: 0.1 });

gsap.to(".textpara span", {
  scrollTrigger: {
    trigger: ".para",
    scrub: 1,
    start: "top 90%",
    end: "top 20%",
},
  opacity: 1,
  stagger: 0.3,
  ease: Power4,
  duration: 2,
});
}

function capsule(){
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
          trigger: ".capsules",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 0,
        ease: Power4,
      });
}

function backgroundColorChange(){
    document.querySelectorAll(".section").forEach(function (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: function () {
            document.body.setAttribute("theme", section.dataset.color);
          },
          onEnterBack: function () {
            document.body.setAttribute("theme", section.dataset.color);
          },
        });
      });
      
      let capsules = document.querySelector('.capsules')
      
      ScrollTrigger.create({
          trigger: capsules,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: function () {
            document.body.setAttribute("theme", capsules.dataset.color);
          },
          onEnterBack: function () {
            document.body.setAttribute("theme", capsules.dataset.color);
          },
        });
}
function loco(){
    (function () {
        var scroll = new LocomotiveScroll();
    })();
}

firstSection()
team()
textParaAnimation()
capsule()
backgroundColorChange()
loco()