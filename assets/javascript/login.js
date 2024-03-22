// recover credentials in session storage
var storedEmail = sessionStorage.getItem("email");
var storedPassword = sessionStorage.getItem("password");
// login form validation
$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        // capture of the values
        let emailInput = $("#email").val();
        let passwordInput = $("#password").val();
        
        // login validation
        if (emailInput === storedEmail && passwordInput === storedPassword) {
            alert("Beign redirected to menu...");
            window.location.href = "menu.html";
        } else if (emailInput === "" && passwordInput === "") {
            alert("Credentials are empty");
        } else if (!storedEmail && !storedPassword) {
            alert("You need to register");
        }
        else {
            $("#email").addClass("wrong-input");
            $("#password").addClass("wrong-input");
            $("#credentials").addClass("wrong-span");
        }
    });
});