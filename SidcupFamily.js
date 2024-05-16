// // // For Inspect Element hide
window.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
    (e.ctrlKey && e.shiftKey && e.keyCode == 85) || // Ctrl+Shift+U
    (e.ctrlKey && e.keyCode == 83) || // Ctrl+S
    (e.ctrlKey && e.shiftKey && e.keyCode == 83) || // Ctrl+Shift+S
    (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
    (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
    (e.keyCode == 123) || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
    (e.altKey && e.metaKey && e.keyCode == 73) || // Option+Cmd+I -- for Mac OS
    (e.altKey && e.metaKey && e.keyCode == 67)  // Option+Cmd+C -- for Mac OS
  ) {
    e.preventDefault();
  }
});

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// For Cursor
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

// For Cursor blur
document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

// NavBar effect
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 5;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "1px solid #96BD2E";
    crsr.style.backgroundColor = "#96BD2E";
  });
});

// Nav Scrolling
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// New page scrolling
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -35%",
    end: "top -75%",
    scrub: 2,
  },
});

// For Colon Animation
gsap.from(".inverted1", {
  y: -50,
  x: -50,
  scrollTrigger: {
    trigger: ".inverted1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".inverted2", {
  y: 50,
  x: 50,
  scrollTrigger: {
    trigger: ".inverted1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 10,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
