$(document).ready(function () {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });
});

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textInput = document.querySelector("#message");

emailInput.addEventListener("focus", () => {
    emailInput.style.border = "2px solid hsl(214 95% 59%)";
});

nameInput.addEventListener("focus", () => {
    nameInput.style.border = "2px solid hsl(214 95% 59%)";
});

textInput.addEventListener("focus", () => {
    textInput.style.border = "2px solid hsl(214 95% 59%)";
});