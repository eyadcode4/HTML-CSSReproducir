const divs = document.querySelectorAll('.container > div');
    let currentIndex = 0;

    function visableONot() {
        divs[currentIndex].style.opacity = 0;

        if (currentIndex > 0) {
            divs[currentIndex - 1].style.opacity = 1;
        } else {
            divs[divs.length - 1].style.opacity = 1; 
        }

        currentIndex = (currentIndex + 1) % divs.length;

        setTimeout(visableONot, 500); 
    }

    visableONot();