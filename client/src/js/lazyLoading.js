import { lazyLoadImges, lazyPropImages } from "./markups";

document.addEventListener("DOMContentLoaded", () => {
  let lazyloadImages = document.querySelectorAll(".lazy");
  let lazyloadThrottleTimeout;

  const lazyload = () => {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(() => {
      const scrollTop = window.pageYOffset;

      for (let i = 0; i < lazyloadImages.length; i++) {
        if (
          lazyloadImages[i].offsetParent.offsetTop <
          window.innerHeight + scrollTop
        ) {
          if (lazyloadImages[i].classList.contains("lazy")) {
            lazyloadImages[i].src =
              lazyLoadImges[lazyloadImages[i].offsetParent.id];
            lazyloadImages[i].classList.remove("lazy");
          }
        }
      }

      if (document.querySelectorAll(".lazy").length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  };

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

window.addEventListener("load", () => {
  const lazyLoadPropsImg = document.querySelectorAll(".property__img");
  for (let i = 0; i < lazyLoadPropsImg.length; i++) {
    lazyLoadPropsImg[i].src = lazyPropImages[lazyLoadPropsImg[i].id];
  }
});
