document.addEventListener("DOMContentLoaded", function (event) {

    /**
     * Fake loading screen
     */
    var loadingLogo = document.getElementById("main_loading");
    var currentRotation = 0;
    var rotateInterval = window.setInterval(function () {
        rotateFunc();
    }, 20);
    var rotateFunc = function () {
        currentRotation += 2;
        loadingLogo.style.transform = "rotate(" + currentRotation + "deg)";
        if (currentRotation >= 360) {
            document.getElementById("main_content").style.visibility = "visible";
            loadingLogo.style.display = "none";
            clearInterval(rotateInterval);
        }
    };

    /**
     * Help button
     */
    var helpButton = document.getElementById("help_button");
    var isGoing = 1;
    var timeMax = 1000;
    var timeActual = 0;
    var timePause = 1000;
    var sizeMax = 1.5;
    window.setInterval(function() {
        timeActual += 20;
        if(isGoing == 1) { // Grossit
            if(timeActual <= timeMax) {
                isGoing = -1;
                timeActual = 0;
            }
        }
        else if(isGoing == -1) { // Rétréci
            if(timeActual <= timeMax) {
                isGoing = 0;
                timeActual = 0;
            }
        }
        else if(isGoing == 0) { // Temps de pause
            if(timeActual <= timeMax) {
                isGoing = 1;
                timeActual = 0;
            }
        }
    }, 20);


    /**
     * BOTTOM BUTTONS
     */
    helpButton.onclick = function() {
        window.location.href = "./help.html";
    };
    document.getElementById("mb_button_msg").onclick = function () {
        window.location.href = "./contact.html";
    };
    document.getElementById("mb_button_news").onclick = function () {
        window.location.href = "./news.html";
    };
    document.getElementById("mb_button_profil").onclick = function () {
        window.location.href = "./profil.html";
    };
});
