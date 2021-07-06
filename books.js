window.onload = () => {
    const scrollLeft = document.querySelector("#scroll-left");
    const main = document.querySelector("#books-films-wrap");
    const scrollRight = document.getElementsByClassName("scroll-right");

    for (let index = 0; index < scrollRight.length; index++) {

    scrollRight[index].onclick = () => {
            main.style.transform = "translateX(-100%)"
            console.log("hey")
    }

}



    scrollLeft.onclick = () => {
        main.style.transform = "translateX(0%)"
    }

    
}