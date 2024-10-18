// console.log('connected');

// step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
        event.preventDefault(); // stops reloading the page / prevent default behaviour
        console.log('working');

        // step 2: get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);
})