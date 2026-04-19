function createSlider(container) {
  const slides = container.querySelectorAll(".slide");
  const nextBtn = container.querySelector(".next");
  const prevBtn = container.querySelector(".prev");

  let counter = 0;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  nextBtn.onclick = () => {
    if (counter < slides.length - 1) {
      counter++;
      slideImage();
    }
  };

  prevBtn.onclick = () => {
    if (counter > 0) {
      counter--;
      slideImage();
    }
  };
}

const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");

createSlider(slider1);
createSlider(slider2);

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

const lightmode = localStorage.getItem('lightmode');

if (lightmode === 'enabled') {
  body.classList.add('lightmode');
}

themeSwitch.addEventListener("click", () => {
  const isLightMode = body.classList.contains('lightmode');
  
  if (isLightMode) {
    body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'disabled');
  } else {
    body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'enabled');
  }
});