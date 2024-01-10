
    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Simple validation for the name field (non-empty)
        if (name.trim() === "") {
            alert("Name must not be empty");
            return false;
        }

        // Simple validation for the email field (non-empty and a basic email pattern)
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.trim() === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        // Simple validation for the password field (non-empty and at least 6 characters)
        if (password.trim() === "" || password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }

        // If all validations pass, the form will be submitted
        return true;
    }

