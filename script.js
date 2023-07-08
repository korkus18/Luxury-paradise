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






