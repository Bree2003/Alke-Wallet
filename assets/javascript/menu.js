$(document).ready(function () {
    // todo: link the href to the another views
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
    // transactions redirect
    $(".transactions").click(function () {
        alert("Being redirected to transactions...");
        window.location.href = "transactions.html";
    });
});