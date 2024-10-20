document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);

    console.log(cashOutNumber);

    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(pinNumber);

    if(pinNumber === '3333'){
        // console.log('cash out done');
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        console.log(balanceNumber);

        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong input');
    }
});