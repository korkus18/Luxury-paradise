var toggleButton = document.querySelector(".zobrazit-button");
var odpovedElement = document.querySelector(".odpoved");

toggleButton.addEventListener("click", function() {
  odpovedElement.classList.toggle("show");
});




function scrollPage() {
  const scrollStep = 600;
  const scrollInterval = setInterval(() => {
    if (window.scrollY === document.documentElement.scrollHeight - window.innerHeight) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 10);
}

const elements = document.getElementsByClassName("scrollElement");
Array.from(elements).forEach((element) => {
  element.addEventListener("click", scrollPage);
});



function scrollDown() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + window.innerHeight;
  const duration = 500 ; // Délka animace ve ms
  const startTime = performance.now();

  function scroll() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = easeOutCubic(progress);
    const newPosition = currentPosition + (targetPosition - currentPosition) * easing;
    window.scrollTo(0, newPosition);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  requestAnimationFrame(scroll);
}




