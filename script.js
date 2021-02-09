function getData(event) {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    document.getElementById("screenWidth").innerHTML = screenWidth;
    document.getElementById("screenHeight").innerHTML = screenHeight;
    document.getElementById("windowWidth").innerHTML = windowWidth;
    document.getElementById("windowHeight").innerHTML = windowHeight;
}