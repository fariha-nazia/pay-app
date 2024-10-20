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


});