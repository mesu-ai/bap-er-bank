document.getElementById('deposite-btn').addEventListener('click', function () {


    const depositeAmount = getInputAmount('depodite-amount');

    const totalDeposite = getPreviousAmount('user-deposite', depositeAmount);

    balance(depositeAmount, true);


});

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const currentWithdraw = getInputAmount('withdraw-amount');

    const totalWithdraw = getPreviousAmount('user-withdraw', currentWithdraw);


    balance(currentWithdraw, false);


});

function balance(amount, amountType) {

    const balanceField = document.getElementById('user-balance');
    const previousBalance = parseFloat(balanceField.innerText);
    //console.log(previousBalance);

    if (amountType == false) {
        const totalBalance = previousBalance - amount;

        balanceField.innerText = totalBalance;
        // console.log(totalBalance);
    } else {
        const totalBalance = previousBalance + amount;
        balanceField.innerText = totalBalance;

        //  console.log(totalBalance);
    }





}


function getInputAmount(id) {
    const inputField = document.getElementById(id);
    const inputAmount = parseFloat(inputField.value);
    //  console.log(inputAmount);
    inputField.value = '';
    return inputAmount;
}

function getPreviousAmount(previousAmountId, currentAmount) {

    const previousamountText = document.getElementById(previousAmountId);
    const previousAmount = parseFloat(previousamountText.innerText);



    const totalAmount = previousAmount + currentAmount;

    previousamountText.innerText = totalAmount;

    // console.log(totalAmount);

    return totalAmount;

}