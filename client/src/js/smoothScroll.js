export const smoothScroll = (target, duration) => {
  // define positions
  const currentPosition = document.documentElement.scrollTop;
  const targetPotition = target.getBoundingClientRect().top;
  let startTime = null;

  // define time stamp
  const animationScroll = currentTime => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const start = ease(timeElapsed, currentPosition, targetPotition, duration);
    window.scrollTo(0, start);

    if (timeElapsed < duration) {
      requestAnimationFrame(animationScroll);
    }
  };

  // scrolling function
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animationScroll);
};

const sidebarItemsArr = Array.from(document.querySelectorAll(".sidebar__item"));
const navItemsArr = Array.from(document.querySelectorAll(".nav__item"));

//Looping
const scrollLooping = e => {
  e.forEach(e => {
    e.addEventListener("click", () => {
      const target = document.querySelector(e.children[0].hash);
      //scrolling time
      smoothScroll(target, 1500);
    });
  });
};

scrollLooping(sidebarItemsArr);
scrollLooping(navItemsArr);
