$(document).ready(function () {
    // log in redirected
    $("#login-btn").click(function () {
        alert("Starting session...");
        window.location.href = "assets/html/login.html";
    });
    // log out redirected
    $("#logout-btn").click(function () {
        alert("Ending session...");
        window.location.href = "../../index.html";
    });
    // menu redirected
    $("#menu").click(function () {
        alert("Being redirected to menu...");
        window.location.href = "menu.html";
    });
    // deposit redirect
    $(".deposit").click(function () {
        alert("Beign redirected to deposit...");
        window.location.href = "deposit.html";
    });
    // send money redirect
    $(".sendMoney").click(function () {
        alert("Being redirected to send money...");
        window.location.href = "sendmoney.html";
    });
    // transactions redirected
    $(".transactions").click(function () {
        alert("Being redirected to transactions...");
        window.location.href = "transactions.html";
    });
});