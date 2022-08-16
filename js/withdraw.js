document.getElementById('btn-withdraw').addEventListener('click', function () {
    const getWithdrawDoc = document.getElementById('input-withdraw');
    const getWithdrawAmountString = getWithdrawDoc.value;
    const withdrawAmount = parseFloat(getWithdrawAmountString);

    console.log(withdrawAmount);
    getWithdrawDoc.value = '';
    if (isNaN(withdrawAmount) == true) {
        alert('Enter a valid Number');
        return;
    }


    // console.log(typeof withdrawAmount);

    const getPreviousWithdrawDoc = document.getElementById('total-withdraw');
    const getPreviousWithdrawString = getPreviousWithdrawDoc.innerText;
    const previousWithdraw = parseFloat(getPreviousWithdrawString);
    // console.log(typeof previousWithdraw, previousWithdraw);

    const currentWithdraw = previousWithdraw + withdrawAmount;



    const getTotalBanlanceDoc = document.getElementById('total-balance');
    const getTotalBalanceString = getTotalBanlanceDoc.innerText;
    const totalBalance = parseFloat(getTotalBalanceString);
    // console.log(typeof totalBalance, totalBalance);


    if (totalBalance >= withdrawAmount) {

        const remainBalnace = totalBalance - withdrawAmount;
        getPreviousWithdrawDoc.innerText = currentWithdraw;
        getTotalBanlanceDoc.innerText = remainBalnace;
    }
    else {
        alert('Your Current Balance is low to withdrag amount');
    }



    getWithdrawDoc.value = '';
});