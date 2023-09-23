document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset previous messages
        messageContainer.innerHTML = "";

        // Get form values
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        // Perform validation
        if (name === "" || email === "" || message === "") {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        if (!isValidEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Form is valid, you can submit it to your server here
        showMessage("Form submitted successfully!", "success");
        form.reset();
    });

    function showMessage(message, messageType) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.classList.add(messageType);
        messageContainer.appendChild(messageDiv);
    }

    function isValidEmail(email) {
        // A simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
