document.addEventListener("DOMContentLoaded", function () {
  const promotion1 = document.querySelector(".Promotion1");
  const blurredPromo = document.querySelector(".blurred-promo");

  function initializeSlideshow(promoElement) {
    const images = promoElement.querySelectorAll("img");
    const imageCount = images.length;
    let currentIndex = 0;
    const intervalTime = 4000;
    let interval = null;

    for (let i = 0; i < imageCount; i++) {
      images[i].style.display = "none";
    }

    images[currentIndex].style.display = "block";

    function switchToNextImage() {
      images[currentIndex].style.display = "none";

      currentIndex = (currentIndex + 1) % imageCount;

      images[currentIndex].style.display = "block";
    }

    function startInterval() {
      if (!interval) {
        interval = setInterval(switchToNextImage, intervalTime);
      }
    }

    function stopInterval() {
      clearInterval(interval);
      interval = null;
    }

    startInterval();

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        stopInterval();
      } else {
        startInterval();
      }
    });
  }

  initializeSlideshow(promotion1);
  initializeSlideshow(blurredPromo);
});
