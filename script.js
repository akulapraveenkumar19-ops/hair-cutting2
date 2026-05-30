document.querySelector(".booking-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Appointment Booked Successfully!");

    this.reset();
});

window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(".card,.package,.review");

    cards.forEach(card => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".card,.package,.review")
.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s";

});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});