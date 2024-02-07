const mainCarouselcContainer = document.querySelector(
  ".main-carousel-container"
);
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const carouselControlls = document.querySelector(".carousel-controlls");

function positionControllers() {
  arrowLeft.classList.remove("move-arrow-left");
  arrowRight.classList.remove("move-arrow-right");
  arrowLeft.classList.add("position-left-arrow");
  arrowRight.classList.add("position-right-arrow");
}
mainCarouselcContainer.addEventListener("mouseover", () => {
  positionControllers();
});
mainCarouselcContainer.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!mainCarouselcContainer.matches(":hover")) {
      arrowLeft.classList.remove("position-left-arrow");
      arrowRight.classList.remove("position-right-arrow");
      arrowLeft.classList.add("move-arrow-left");
      arrowRight.classList.add("move-arrow-right");
    }
  }, 200);
});

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const section1 = `<div style="width: 100%; height: 100vh" class="section1 section">
      <div class="section-left">
        <p class="reality-end-text carousel-animate-type1">
          Where Reality Ends And
        </p>
        <h1 class="imagination-text carousel-animate-type2">Imagination</h1>
        <h1 class="begins-text carousel-animate-type2">Begins</h1>
        <p class="we-specialize-text carousel-animate-type1">
          We specialize in providing cutting-edge Virtual Reality solutions that
          transport you to immersive digital worlds.
        </p>
        <div class="section-button-container carousel-animate-type1">
          <button class="explore-btn">Explore More</button>
          <div class="radiate-btn-container">
            <div class="outer-radiate"></div>
            <div class="radiate-btn">
              <svg
                class="radiate-btn-triangle"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"
                />
              </svg>
            </div>
          </div>
          <p class="watch-intro-text">Watch Intro</p>
        </div>
      </div>
      <div class="section-right"></div>
    </div>`;
const section2 = `<div style="width: 100%; height: 100vh" class="section2 section">
      <div class="section-left">
        <p class="reality-end-text carousel-animate-type1">
          Where Reality Ends And
        </p>
        <h1 class="imagination-text carousel-animate-type2">Imagination</h1>
        <h1 class="begins-text carousel-animate-type2">Begins</h1>
        <p class="we-specialize-text carousel-animate-type1">
          We specialize in providing cutting-edge Virtual Reality solutions that
          transport you to immersive digital worlds.
        </p>
        <div class="section-button-container carousel-animate-type1">
          <button class="explore-btn">Explore More</button>
          <div class="radiate-btn-container">
            <div class="outer-radiate"></div>
            <div class="radiate-btn">
              <svg
                class="radiate-btn-triangle"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"
                />
              </svg>
            </div>
          </div>
          <p class="watch-intro-text">Watch Intro</p>
        </div>
      </div>
      <div class="section-right"></div>
    </div>`;

let sectionIndex = 1;
slider.innerHTML = section1;

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.5,
  };

  const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate1");
      }
      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate1");
      }
    });
  }, options);

  const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate2");
      }
      if (!entry.isIntersecting) {
        entry.target.classList.remove("animate2");
      }
    });
  }, options);

  function observeTextElements() {
    const animate1TextElements = document.querySelectorAll(
      ".carousel-animate-type1"
    );
    const animate2TextElements = document.querySelectorAll(
      ".carousel-animate-type2"
    );

    animate1TextElements.forEach((element) => {
      observer1.observe(element);
    });

    animate2TextElements.forEach((element) => {
      observer2.observe(element);
    });
  }
  observeTextElements();

  leftArrow.addEventListener("click", () => {
    positionControllers();
    sectionIndex--;
    if (sectionIndex <= 0) {
      sectionIndex = 2;
    }

    let prevSectionIndex = sectionIndex + 1;
    if (prevSectionIndex === 3) {
      prevSectionIndex = 1;
    }

    const prevSection = document.querySelector(`.section${prevSectionIndex}`);
    prevSection.classList.add("go-right");

    let currentSection;
    if (sectionIndex === 2) {
      currentSection = section2;
    } else {
      currentSection = section1;
    }

    setTimeout(() => {
      prevSection.classList.remove("go-right");
      slider.innerHTML = currentSection;
      observeTextElements();
    }, 800);
  });

  rightArrow.addEventListener("click", () => {
    positionControllers();
    sectionIndex++;
    if (sectionIndex > 2) {
      sectionIndex = 1;
    }

    let prevSectionIndex = sectionIndex - 1;
    if (prevSectionIndex === 0) {
      prevSectionIndex = 2;
    }

    const prevSection = document.querySelector(`.section${prevSectionIndex}`);
    prevSection.classList.add("go-left");

    let currentSection;
    if (sectionIndex === 2) {
      currentSection = section2;
    } else {
      currentSection = section1;
    }

    setTimeout(() => {
      prevSection.classList.remove("go-left");
      slider.innerHTML = currentSection;
      observeTextElements();
    }, 800);
  });
});
