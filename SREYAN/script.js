const images = ["Catering_image.png", "hero1.jpeg", "hero2.jpeg", "hero3.jpeg","hero4.jpeg"];
let index = 0;

function changeHeroImage() {
    index = (index + 1) % images.length;
    document.getElementById("hero").style.backgroundImage = `url(${images[index]})`;
}

// Change image every 5 seconds
setInterval(changeHeroImage, 2000);
