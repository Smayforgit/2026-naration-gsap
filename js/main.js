gsap.registerPlugin(ScrollTrigger);

const heroText = gsap.timeline({ delay: .25 });

heroText
  .from(".hero-subtitle", {
    opacity: 0, 
    x: -28, 
    duration: .55, 
    ease: "power3.out" 
  })
  .from(".hero-title", {
    opacity: 0, 
    y: 55, 
    duration: .85, 
    ease: "power4.out" 
  }, "-=.18"); 

gsap.to("#valorant-header-logo", {
    rotation: 720,
    ease: "none",
    scrollTrigger: {   
    trigger: "body",
    start: "top top",
    end: "max",
    scrub: true
    }
});

const championsStyleButtons = document.querySelectorAll('.champions-style-button');
const championsBundleVisual = document.querySelector('.champions-bundle-visual');

championsStyleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    championsStyleButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    championsBundleVisual.dataset.style = button.textContent.trim();
  });
});
