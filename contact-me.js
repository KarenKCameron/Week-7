// TODO
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const selector = document.getElementById("contact-kind");
const submitBtn = document.querySelector(".btn-primary");
const jobFields = document.getElementById('job-fields');
const codeFields = document.getElementById('code-fields');
const messageBox = document.getElementById('messageBox');


const selectOption = () => {
    const selection = selector.value;

    if (selection === "job-opportunity") {
        const jobFields = document.getElementById('job-fields')
        jobFields.classList.remove('hidden')
        jobFields.classList.add('show')
        codeFields.classList.remove('show')
        codeFields.classList.add('hidden')
    } else if (selection === "talk-code") {
        jobFields.classList.remove('show')
        jobFields.classList.add('hidden')
        const codeFields = document.getElementById('code-fields')
        codeFields.classList.remove('hidden')
        codeFields.classList.add('show')
    } else {
        codeFields.classList.remove('show')
        codeFields.classList.add('hidden')
    }
};



function validState(x) {
    let xLength = x.value.length > 3
    if (!xLength) {
        x.validity.value = false
        x.setCustomValidity('This field must be more than three characters, please try again.')
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


function messageValidation(y) {
    let yLength = y.value.length > 10
    if (!yLength) {
        y.validity.value = false
        y.setCustomValidity('This field must be more than ten characters, please try again.')
        y.parentElement.classList.remove('valid');
        y.parentElement.classList.add('invalid');
        y.reportValidity();
        console.log('Bad input');
    } else {
        y.validity.valid = true;
        y.setCustomValidity('');
        y.parentElement.classList.remove('invalid');
        y.parentElement.classList.add('valid');
    }
};

const nameValidity = (e) => {
    e.preventDefault();
    validState(fullName);
};

const emailValidity = (e) => {
    e.preventDefault();
    emailValidation(email);
};

const messageValidity = (e) => {
    e.preventDefault();
    messageValidation(messageBox);
};

form.addEventListener("change", nameValidity, true);
form.addEventListener("change", emailValidity, true);
form.addEventListener("change", messageValidity, true);
selector.addEventListener("change", selectOption, true);


