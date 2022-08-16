document.getElementById('btn-deposite').addEventListener('click', function () {
    const deposite = document.getElementById('input-deposite');
    const depositeAmountString = deposite.value;
    const depositeAmount = parseFloat(depositeAmountString);
    // console.log(typeof depositeAmount);
    deposite.value = '';
    if (isNaN(depositeAmount) == true) {
        alert('Enter a valid Number');
        return;
    }

    const mainDeposite = document.getElementById('total-deposit');
    const previousDepositeString = mainDeposite.innerText;
    const previousDeposite = parseFloat(previousDepositeString);
    const currentDeposite = previousDeposite + depositeAmount;
    // console.log(typeof currentDeposite);
    mainDeposite.innerText = currentDeposite;



    const totalBalanceDoc = document.getElementById('total-balance');
    const totalAmountString = totalBalanceDoc.innerText;
    const totaBalance = parseFloat(totalAmountString);
    const currentTotal = totaBalance + depositeAmount;
    totalBalanceDoc.innerText = currentTotal;
    // console.log(typeof totaBalance);
    // console.log(totaBalance)



});