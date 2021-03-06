const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

//counter
let counter = 1;
const size=carouselImages[0].clientWidth;

//Button listener
nextBtn.addEventListener("click",()=>{
	if (counter >= carouselImages.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});
prevBtn.addEventListener("click",()=>{
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});