// smooth scrolling
//   attach loco scroll css
//   attach locomotive scroll min js
//   some code from loco github for js

// gsap
// scrollTrigger

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function firstNameAnim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -0.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".home-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

let timeout;
const mouseSkew = () => {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleFollwer(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        ".miniCircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
};
mouseSkew();

function circleFollwer(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector(
      ".miniCircle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleFollwer();
firstNameAnim();




document.querySelectorAll(".elem").forEach(function (elem) {
  var diffrot = 0;
  var rotate = 0;

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;

    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: dets.clientX,
      rotate:gsap.utils.clamp(-18,18, diffrot)
    });
  });

  elem.addEventListener("mouseleave",function(){
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      ease:Power3,
    })
  })
});
