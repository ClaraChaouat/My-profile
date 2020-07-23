const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cities = document.querySelectorAll('.Cities');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {

    cities[currentlySelected].classList.remove("active");
    currentlySelected--;
    cities[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {
    cities[currentlySelected].classList.remove("active");
    currentlySelected++;
    cities[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if(cities.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }

});
