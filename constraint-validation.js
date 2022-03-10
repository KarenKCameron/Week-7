// // TODO -- IN CLASS CODE ALONG!
const nameField = document.getElementById("first-name");
const form = document.getElementById("connect-form");

const checkValidation = (e) => {
    // e.preventDefault()
    const validState = nameField.value.length > 3
    if (!validState) {
        nameField.setCustomValidity("First name must be more than three characers.")
    } else {
        nameField.validity.valid = true;
    }
};

form.addEventListener("submit", checkValidation);



























// const firstName = document.getElementById("first-name");
// const lastName = document.getElementById("last-name");
// const email = document.getElementById("email");
// const form = document.getElementById("connect-form");
// const selector = document.getElementById("contact-kind");
// const submitBtn = document.querySelector(".btn-primary");


// // const selectOption = () => {
// //     const selection = selector.value;

// //     if (selector = "busines") {
// //         const bizFields = document.getElementById('biz-name')
// //         bizFields.classList.remove('hidden')
// //         bizFields.classList.show('show')
// //     }
// // }





// function validState(x){
//     let xLength = x.value.length > 3
//     console.log(xLength);
//     if(!xLength){
//         x.validity.value = false
//         x.setCustomValidity('This field must be more than three characters.')
//         x.parentElement.classList.remove('valid');
//         x.parentElement.classList.add('invalid');
//         x.reportValidity();
//         console.log('Bad input');
//     } else {
//         x.validity.valid = true;
//         x.setCustomValidity('');
//         x.parentElement.classList.remove('invalid');
//         x.parentElement.classList.add('valid');
//     }
// };

// function emailValidation(x) {
//     const emailRegex = /\w+@\w+\.\w+/;
//     if (!x.value.match(emailRegex)) {
//         x.setCustomValidity("Invalid email address, please try again.")
//         x.parentElement.classList.remove('valid');
//         x.parentElement.classList.add('invalid');
//         x.reportValidity();
//         console.log('Bad input')
//     } else {
//         x.validity.valid = true;
//         x.setCustomValidity('');
//         x.parentElement.classList.remove('invalid');
//         x.parentElement.classList.add('valid');
//     }
// };


// const checkValidation = (e) => {
//     // e.preventDefault();
//     validState(firstName);
//     validState(lastName);
//     emailValidation(email);
    
// };

// form.addEventListener("change", checkValidation);