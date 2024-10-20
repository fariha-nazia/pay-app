// Button add money ---> connect the btn for click


// step 1:adding the event handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    console.log('working');
    event.preventDefault(); // stope the default nature

    // step 2.1: add money to the  account ---> to get the input of amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step 2.2: ---> to get the input of pin
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step 3: verify the pin number ---> this is a wrong way to do validation
    if(pinNumberInput === '3333'){
        // step 4: get the current balance ---> to get the value we can see that it is in the div not in input so we need to use innerText
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step 5: we need to add adMoneyInput with balance to find the total
        // const newBalance = balance + addMoneyInput; ---> not the correct way because we are adding string not numbers 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step 6: update the new balance in the DOM/UI/Web
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Your Pin is Wrong');
    }
});