// Better way of doing the work

// step 1: make the button work
document.getElementById('button-login').addEventListener('click', function(event){ //we need to put event as a parameter inside because we are working in side a form amd when we inside a form we need to do this
        // step 1.1: we need to write event.preventDefalut(), because a from has a nature of reloading the page by itself and this is a problem. to stop this we need to write this
        // console.log('button clicked')
        event.preventDefault();

        // step 2: take input from pass and number field when you click on the button
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);

        // step 3: now we need to validate it. This process of validation is not correct, in future we will do this using server and other things.
        if(phoneNumber === '123' && pinNumber === '3333'){
                // console.log('Logged in');
                // step 4: now if the number and pass is correct it will take you to the home page. And to do so the step are given
                window.location.href = '/home.html';
        }
        else{
                alert('invalid input');
        }
});





// console.log('connected');

// step 1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//         event.preventDefault(); // stops reloading the page / prevent default behaviour
//         // console.log('working');

//         // step 2: get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         console.log(phoneNumber);

//         const pinNumber = document.getElementById('pin-number').value;
//         console.log(pinNumber);

//         /* 
//         A temporary way to check if you are giving the correct phone number and password is given below. LAter on we will work with server to do this.
//         */
//        if(phoneNumber === 12345 && pinNumber === 1234){
//         console.log('You logged in');
//        }
//        else{
//         alert('Wrong input');
//        }
// })
