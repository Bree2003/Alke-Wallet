$(document).ready(function () {

    var storedTransaction = sessionStorage.getItem("transactionData");
    var transactions = JSON.parse(storedTransaction);

    if (transactions) {
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].name == "You"){
                $(".list-transactions").prepend(`
            <li class="transaction border transparency d-flex justify-content-between increment">
                        <span class="transaction-data text-start">${transactions[i].name}</span>
                        <span class="transaction-data text-center">$${transactions[i].amount}</span>
                        <span class="transaction-data text-end">${transactions[i].time}</span>
                    </li>
            `);
            } else {
                $(".list-transactions").prepend(`
            <li class="transaction border transparency d-flex justify-content-between decrease">
                        <span class="transaction-data text-start">${transactions[i].name}</span>
                        <span class="transaction-data text-center">$${transactions[i].amount}</span>
                        <span class="transaction-data text-end">${transactions[i].time}</span>
                    </li>
            `);
            }
        }
    } else {
            // set the initial value if there none
            let transactionData = {
                name: "You",
                amount: 60000,
                time: "01-03-2024"
        }
        saveTransactionData(transactionData);
        location.reload();
        }
});
function saveTransactionData(transactionData) {
    const storedTransactionData = JSON.parse(sessionStorage.getItem('transactionData')) || [];

    storedTransactionData.push(transactionData);

    sessionStorage.setItem('transactionData', JSON.stringify(storedTransactionData));
}