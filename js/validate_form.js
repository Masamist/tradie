'use strict';

//Validate Email for contact form
document.querySelector('.submit').addEventListener('click', (e) => {

    let emailAddress = document.querySelector('#emailAddress');
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailAddress.value.match(validRegex)) {
        alert("Thank you. We will be in touch soon!");

    } else {
        alert("Email Address is invalid. Please enter again.");
    }

});