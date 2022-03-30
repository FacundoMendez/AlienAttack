

const SliderFuncional = ({setCharacterId} ) =>{
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    var activeIndex = 1;
    var animating = false;
    var translateDuration = 0.5;

    slides.forEach((slide, index) => {
      slide.dataset.index = index + 1;
    });

    next.addEventListener("click", () => changeStep("next"));
    prev.addEventListener("click", () => changeStep("prev"));

    function changeStep(direction, id) {
      if (!animating) {
        animating = true;
        var transX;
        var currentIndex = activeIndex;

        slides.forEach((slide, index) => {
          index + 1 === activeIndex
            ? slide.classList.add("active")
            : slide.classList.remove("active");
        });

        if (direction === "next") {
          if (activeIndex < slides.length) {
            transX = (100 / slides.length) * activeIndex;
            currentIndex++;
            id = currentIndex;
            setCharacterId(id);
          } else {
            transX = 0;
            currentIndex = 1;
            id = currentIndex;
            setCharacterId(id);
          }
        } else {
          if (activeIndex >= 2) {
            transX = (100 / slides.length) * (activeIndex - 2);
            currentIndex--;
            id = currentIndex;
            setCharacterId(id);
          } else {
            transX = 100 - 100 / slides.length;
            currentIndex = slides.length;
            id = currentIndex;
            setCharacterId(id);
          }
        }
        document.querySelector(
          `[data-index="${activeIndex}"]`
        ).style.animation = `motion-blur ${translateDuration}s ease-in forwards`;
        setTimeout(() => {
          slider.style.transform = `translateX(-${transX}%)`;
        }, translateDuration * 1000);
        setTimeout(() => {
          document.querySelector(
            `[data-index="${activeIndex}"]`
          ).style.animation = `none`;
          activeIndex = currentIndex;
          animating = false;
        }, translateDuration * 1000 * 2);
      }

    }
}


export default SliderFuncional
