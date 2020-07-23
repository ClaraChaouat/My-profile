const GITHUB_URL = "https://github.com/ClaraChaouat?tab=overview&from=2019-12-01&to=2019-12-19";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("Clara CHAOUAT");
    profileImage.src = data.https//avatars2.githubusercontent.com/u/51032055?s=460&u=4f8db42a29248d0cd87c60eb405c65f743141766&v=4;
  });


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cities = document.querySelectorAll('.Cities');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
// We'll come back to you
});

nextBtn.addEventListener('click', function() {
    cities[currentlySelected].classList.remove("active");
    currentlySelected++;
    cities[currentlySelected].classList.add("active");

});