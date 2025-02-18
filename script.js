let isInflated = false;

function inflate() {
    let butt = document.getElementById("butt");

    if (!isInflated) {
        butt.style.transform = "translateX(-50%) scale(2)";
    } else {
        butt.style.transform = "translateX(-50%) scale(1)";
    }

    isInflated = !isInflated;
}
