// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const selector = document.getElementById("contact-kind");
const submitBtn = document.querySelector(".btn-primary");


function validState(x){
    let xLength = {min: 4}
    if(!xLength){
        x.validity.value = false
        x.setCustomValidity('This field must be more than three characters.')
        x.parentElement.classList.remove('valid');
        x.parentElement.classList.add('invalid');
        x.reportValidity();
        console.log('Bad input');
    } else {
        x.validity.valid = true;
        x.setCustomValidity('');
        x.parentElement.classList.remove('invalid');
        x.parentElement.classList.add('valid');
    }
};

function emailValidation(x) {
    const emailRegex = /\w+@\w+\.\w+/;
    if (!x.value.match(emailRegex)) {
        x.setCustomValidity("Invalid email address, please try again.")
        x.parentElement.classList.remove('valid');
        x.parentElement.classList.add('invalid');
        x.reportValidity();
        console.log('Bad input')
    } else {
        x.validity.valid = true;
        x.setCustomValidity('');
        x.parentElement.classList.remove('invalid');
        x.parentElement.classList.add('valid');
    }
};


const checkValidation = (e) => {
    e.preventDefault();
    // validState(firstName);
    // validState(lastName);
    emailValidation(email);
    
};

form.addEventListener("submit", checkValidation);