$(document).ready(function () {
    // get the variable
    var storedBalance = sessionStorage.getItem("balance");
    
    if (storedBalance) {
        $("#balance").text("$" + storedBalance);
    } else {
        // set the initial variable if there none
        let balance = 60000;
        sessionStorage.setItem("balance", balance);
    }
    // increment the amount
    $("#deposit").click(function () {
        let amount = parseInt($("#amount").val());
        let storedBalance = sessionStorage.getItem("balance");
        let parseBalance = parseInt(storedBalance);
        // todo: make sure to validate that the amount to deposit is positive and more than a certain number
        if ($("#amount").val() >= 5000) {
            let total = parseBalance + amount;
            sessionStorage.setItem("balance", total);
            $("#balance").text("$" + total);
            alert("You have deposited " + amount);
            $("#amount").val("");
        } else {
            alert("The amount to be deposited must be greater than or equal to 5000");
        }
    });


});