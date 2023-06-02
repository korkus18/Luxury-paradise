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






var images = ["images/apartman-1.png", "images/apartman-2.png", "images/apartman-3.png"];
        var gradient = "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))";

        document.body.style.background = `${gradient}, url(${images[0]}) no-repeat center / cover`;

        var currentIndex = 0;
        var backgroundElement = document.getElementById("background");
        var buttons = document.getElementsByClassName("button");

        function changeBackground(index) {
            currentIndex = index;
            backgroundElement.style.backgroundImage = "url('" + images[index] + "')";

            for (var i = 0; i < buttons.length; i++) {
                if (i === index) {
                    buttons[i].classList.add("active");
                } else {
                    buttons[i].classList.remove("active");
                }
            }
        }

        function rotateBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            backgroundElement.style.backgroundImage = "url('" + images[currentIndex] + "')";

            for (var i = 0; i < buttons.length; i++) {
                if (i === currentIndex) {
                    buttons[i].classList.add("active");
                } else {
                    buttons[i].classList.remove("active");
                }
            }
        }

        setInterval(rotateBackground, 5000);
