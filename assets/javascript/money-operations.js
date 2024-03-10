$(document).ready(function () {
    // get the variable
    var storedBalance = sessionStorage.getItem("balance");
    
    if (storedBalance) {
        $("#balance").text("$" + storedBalance);
    } else {
        // set the initial value if there none
        let balance = 60000;
        sessionStorage.setItem("balance", balance);
        location.reload();
    }
    // increment the amount
    $("#deposit").click(function () {
        let amount = parseInt($("#amount").val());
        let storedBalance = sessionStorage.getItem("balance");
        let parseBalance = parseInt(storedBalance);
        if ($("#amount").val() >= 5000) {
            let total = parseBalance + amount;
            sessionStorage.setItem("balance", total);
            $("#balance").text("$" + total);
            alert("You have deposited " + amount + " pesos");
            $("#amount").val("");
        } else {
            alert("The amount to be deposited must be greater than or equal to 5000 pesos");
        }
    });

    // decrease the money
    $("#transfer").click(function () {
        let amount = parseInt($("#amount").val());
        let storedBalance = sessionStorage.getItem("balance");
        let parseBalance = parseInt(storedBalance);
        if
        (amount > parseBalance) {
            alert("The amount exceeds the total balance");
            $("#amount").val("");
        } else if ($("#amount").val() >= 5000) {
            let total = parseBalance - amount;
            sessionStorage.setItem("balance", total);
            $("#balance").text("$" + total);
            alert("You have transfered " + amount + " pesos");
            $("#amount").val("");
        } else {
            alert("The amount to be transfered must be greater than or equal to 5000 pesos");
        }
    });

});
