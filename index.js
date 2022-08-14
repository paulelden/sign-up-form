// variables

const firstNameBox = document.getElementById('firstNameBox');
const lastNameBox = document.getElementById('lastNameBox');
const emailBox = document.getElementById('emailBox');
const phoneNumberBox = document.getElementById('PhoneNumberBox');
const passwordBox = document.getElementById('passwordBox');
const confirmPasswordBox = document.getElementById('confirmPasswordBox');
const passwordError = document.getElementById('passwordError');
const createAccount = document.getElementById('createAccount');

// functions 



// listeners

passwordBox.addEventListener('input', function() {
    if (passwordBox.value !== confirmPasswordBox.value){
        passwordBox.classList.add('error');
        confirmPasswordBox.classList.add('error');
        passwordError.hidden = false;
    }
    else {
        passwordBox.classList.remove('error');
        confirmPasswordBox.classList.remove('error');
        passwordError.hidden = true;
    }
});

confirmPasswordBox.addEventListener('input', function() {
    if (passwordBox.value !== confirmPasswordBox.value){
        passwordBox.classList.add('error');
        confirmPasswordBox.classList.add('error');
        passwordError.hidden = false;
    }
    else {
        passwordBox.classList.remove('error');
        confirmPasswordBox.classList.remove('error');
        passwordError.hidden = true;
    }
});

// main

