/***************** Transection page ********************/
document.getElementById('deposite-btn').addEventListener('click', function () {

    const presentDeposite = document.getElementById('depodite-amount');
    const presentAmount = parseFloat(presentDeposite.value);


    const previousDeposite = document.getElementById('user-deposite');

    const previousAmount = parseFloat(previousDeposite.innerText);


    const totalDeposite = previousAmount + presentAmount;
    // console.log(totalDeposite);

    previousDeposite.innerText = totalDeposite;
    presentDeposite.value = '';


    const balanceText = document.getElementById('user-balance');


    const WithdrawText = document.getElementById('user-withdraw');
    const totalWithdraw = parseFloat(WithdrawText.innerText);

    const totalBalance = totalDeposite - totalWithdraw;

    balanceText.innerText = totalBalance;




});

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const presentWithdrawText = document.getElementById('withdraw-amount');
    const presentWithdraw = parseFloat(presentWithdrawText.value);

    const previousWithdrawText = document.getElementById('user-withdraw');
    const previousWithdraw = parseFloat(previousWithdrawText.innerText);


    const totalWithdraw = presentWithdraw + previousWithdraw;
    previousWithdrawText.innerText = totalWithdraw;

    presentWithdrawText.value = '';


    const balanceText = document.getElementById('user-balance');
    const depositeText = document.getElementById('user-deposite');
    const totalDeposite = parseFloat(depositeText.innerHTML);

    const totalBalance = totalDeposite - totalWithdraw;
    balanceText.innerText = totalBalance;



});
