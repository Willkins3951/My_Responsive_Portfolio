
// TO TOP BUTTON JS

const scrollUpBtn = document.getElementById('scroll-up-btn');

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





//  scroll effect ON NAVBAR 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get scroll position
    const threshold = 50; // Threshold for applying background color (adjust as needed)

    if (scrollY >= threshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ========= ANIMATED JS CODE 

const textElement = document.getElementById('text');
  const texts = ['Frontend Developer', 'Designer.', 'Blogger.' , 'hacker.' , 'freelancer.'];
  let index = 0;
  let isDeleting = false;
  let speed = 120; // typing speed

  function type() {
    const currentText = texts[index];
    if (!isDeleting) {
      textElement.textContent = currentText.substring(0, textElement.textContent.length + 1);
    } else {
      textElement.textContent = currentText.substring(0, textElement.textContent.length - 1);
    }

    let typeSpeed = speed;

    if (isDeleting) {
      typeSpeed /= 0.5; // faster deletion
    }

    if (!isDeleting && textElement.textContent === currentText) {
      typeSpeed = 1500; // pause after typing
      isDeleting = true;
    } else if (isDeleting && textElement.textContent === '') {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(type, typeSpeed);
  }

  document.addEventListener('DOMContentLoaded', type);




  const modeToggle = document.querySelector('.mode-toggle');
  const container = document.querySelector('.container');
  
  modeToggle.addEventListener('click', () => {
      container.classList.toggle('dark-mode');
      if (container.classList.contains('dark-mode')) {
          modeToggle.querySelector('i').classList.remove('uil-moon');
          modeToggle.querySelector('i').classList.add('uil-sun');
      } else {
          modeToggle.querySelector('i').classList.remove('uil-sun');
          modeToggle.querySelector('i').classList.add('uil-moon');
      }
  });
  

  //show nav menu

const menu = document.querySelector('.navlinks');
const menuBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');



menuBtn.addEventListener('click', () =>{
    menu.style.display = "block";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);




