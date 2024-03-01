// user credentials
var email = "user@gmail.com";
var password = "User123";

// login form validation
$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        // capture of the values
        let emailInput = $("#email").val();
        let passwordInput = $("#password").val();
        
        // login validation
        if (emailInput === email && passwordInput === password) {
            alert("Beign redirected to menu...");
            window.location.href = "menu.html";
        } else if (emailInput === "" && passwordInput === "") {
            alert("Credentials are empty");
        }
            else {
            $("#email").addClass("wrong-input");
            $("#password").addClass("wrong-input");
            $("#credentials").addClass("wrong-span");
        }
    });
});