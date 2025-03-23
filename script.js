let check = document.querySelector("#check");

check.addEventListener("change", () => {
    if (check.checked) {
        setTimeout(() => {
            location.href = "/start.html"; // Redirect after 3 seconds
        }, 3000);
    }
});
