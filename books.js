window.onload = () => {
    const scrollLeft = document.querySelector("#scroll-left");
    const main = document.querySelector("#books-films-wrap");
    const scrollRight = document.querySelector("#scroll-right");

    scrollRight.onclick = () => {
            main.style.transform = "translateX(-100%)"
    }

    scrollLeft.onclick = () => {
        main.style.transform = "translateX(0%)"
    }
}