// register form validation
$(document).ready(function () {
    $("#registerForm").submit(function (event) {
        event.preventDefault();

        // capture of the values
        let nameInput = $("#name").val();
        let emailInput = $("#email").val();
        let passwordInput = $("#password").val();

        // save the values in session storage
        let storedName = sessionStorage.setItem("name", nameInput);
        let storedEmail = sessionStorage.setItem("email", emailInput);
        let storedPassword = sessionStorage.setItem("password", passwordInput);
        
        // register validation
        if (emailInput === "" && passwordInput === "") {
            alert("Credentials are empty");
        } else {
            alert("Beign redirected to login...");
            window.location.href = "login.html";
        }
    });
});