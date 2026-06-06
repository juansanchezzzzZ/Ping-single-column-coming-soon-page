const form = document.querySelector(".email-form");
const email = document.querySelector(".input-field");
const errorMessage = document.querySelector(".error-message");
const dashboard = document.querySelector(".dashboard-img")

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let hasSubmitted = false;

function showError() {
    email.classList.add("input-error");
    errorMessage.style.visibility = "visible";
}

function hideError() {
    email.classList.remove("input-error");
    errorMessage.style.visibility = "hidden";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    hasSubmitted = true;

    if (!emailPattern.test(email.value.trim())) {
        showError();
    } else {
        hideError();
        email.value = "";
    }
});

email.addEventListener("input", () => {
    if (!hasSubmitted) return;

    if (!emailPattern.test(email.value.trim())) {
        showError();
    } else {
        hideError();
    }
});