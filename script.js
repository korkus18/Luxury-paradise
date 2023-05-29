var toggleButton = document.getElementById("zobrazit-button");
        var odpovedElement = document.querySelector(".odpoved");

        toggleButton.addEventListener("click", function() {
            if (odpovedElement.style.display === "none") {
                odpovedElement.style.display = "block";
            } else {
                odpovedElement.style.display = "none";
            }
        });