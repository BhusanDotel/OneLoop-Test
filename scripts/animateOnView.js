document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.5,
  };

  const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("why-choose-animate1");
      }
    });
  }, options);

  const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("why-choose-animate2");
      }
    });
  }, options);
  const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("why-choose-animate2");
      }
    });
  }, options);

  function observeTextElements() {
    const animate1TextElements = document.querySelectorAll(".why-choose-left");
    const animate2TextElements = document.querySelectorAll(".why-choose-mid");
    const animate3TextElements = document.querySelectorAll(".why-choose-right");

    animate1TextElements.forEach((element) => {
      observer1.observe(element);
    });

    animate2TextElements.forEach((element) => {
      observer2.observe(element);
    });
    animate3TextElements.forEach((element) => {
      observer3.observe(element);
    });
  }
  observeTextElements();
});
