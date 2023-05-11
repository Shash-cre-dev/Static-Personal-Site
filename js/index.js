//Cursor
const customCursor = document.getElementById('custom-cursor');
const hoverContainer = document.querySelector('.hover-container');
const updateCursorPosition = (event) => {
  customCursor.style.top = `${event.clientY}px`;
  customCursor.style.left = `${event.clientX}px`;
}
window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)
})


//Navbar 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

//Loader Jqueries

TweenMax.set($("#header2"), { scale: 0.7 });
TweenMax.set($("#header3"), { scale: 0.8 });
TweenMax.set($("#header"), { backgroundColor: "rgba(255,255,255,1)" });
TweenMax.set($("#cercle1"), { scale: 0 });

TweenMax.to($("#header"), 1, { scale: 1, yoyo: true, repeat: -1, opacity: 1 });
TweenMax.to($("#header"), 5, { backgroundColor: "rgba(3,255,129,1)", yoyo: true, repeat: -1 });

TweenMax.to($("#header2"), 1, { rotation: 360, repeat: -1, opacity: 1 });
TweenMax.to($("#header2"), 2, { scale: 1, yoyo: true, repeat: -1, });
TweenMax.to($("#header3"), 2, { rotation: 720, repeat: -1, ease: Power0.easeNone, y: 0 });
TweenMax.to($("#header3"), 1, { scale: 0.9, yoyo: true, repeat: -1, });
TweenMax.to($("#header3"), 2, { borderRadius: 100, yoyo: true, repeat: -1, });

TweenMax.set($(".desinks"), { x: -1000, color: "rgba(255,255,255,1)" });
TweenMax.set($(".petit"), { x: 1000, color: "rgba(255,255,255,1)" });

TweenMax.to($(".desinks"), 5, { color: "rgba(3,255,129,1)", yoyo: true, repeat: -1 });
TweenMax.to($(".petit"), 5, { color: "rgba(3,255,129,1)", yoyo: true, repeat: -1 });
TweenMax.to($(".desinks"), 1, { delay: 7, x: 0, ease: Back.easeOut.config(0.7) });
TweenMax.to($(".petit"), 1, { delay: 7.5, x: 0, ease: Back.easeOut.config(0.7) });


// For Loader
setTimeout(function () {
    $('.loader-wrapper').fadeToggle();
}, 5000)


// For Work
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(L=> L.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener('click', activeWork))