// Welcome Intro
const nameInput = document.querySelector('#nameInput');
const person = "Robert";
let nameVal = ''
// fade out a selected element where x is the element to be faded out
function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = `alpha(opacity=${op * 100})`;
        op -= op * 0.1;
    }, 10);
}

nameInput?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#nameInput input[name="firstName"]');
  nameVal = name.value;
  nextPhase();
  name.value = "";
})

// Text Draw Animation using Vara.js
function nextPhase() {
  const phase1 = document.querySelector('#phase1');
  fadeOut(phase1);
  const contentWidth = [...document.body.children].reduce( 
    (a, el) => Math.max(a, el.getBoundingClientRect().right), 0) 
    - document.body.getBoundingClientRect().x;
  let idealFontSize = 64, idealScreenSize = 1920, maxFontSize = 64, minFontSize = 22, pageWidth = Math.min(document.body.scrollWidth, contentWidth), fontSize = (pageWidth / idealScreenSize) * idealFontSize;
  console.log(pageWidth)
  fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize));
  const vara = new Vara("#vara-container", "/Fonts/PacificoFont.json", [{
    // text: `Welcome, ${nameVal}, to Austin's Portfolio Website!`,
    text: `Welcome, ${nameVal}, to Austin's Portfolio Website!`,
    color: "purple",
    fontSize: fontSize,
    textAlign: "center",
    autoAnimation: false,
    id: "welcome",
    y:50,
    x:50,
    fromCurrentPosition: {
      x: false,
      y: false,
    }
  }],{
    strokeWidth: 1.5,
    duration: 1000,
    letterSpacing: 0
  });
  vara.ready(() => {
    // document.querySelector('#phase2')?.classList.remove('d-none');
    vara.draw("welcome", 5000);
  });
}