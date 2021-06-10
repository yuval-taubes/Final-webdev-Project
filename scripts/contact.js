let nameInput = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let form = document.getElementById('form');
let errorElement = document.getElementById('errorElement');
// taken from mr. Hardman's github code ( https://github.com/mrhardman23/javascript-2021/blob/main/js/signUp.js )
let emailAt = /@/g;
// taken from mr. Hardman's github code ( https://github.com/mrhardman23/javascript-2021/blob/main/js/signUp.js )
let phoneCheck = /\(\d{3}\)-\d{3}-\d{4}/g

function checkInput() {
    let messages = [];
    errorElement.innerText = " ";
    if (nameInput.value === '' || nameInput.value == null){
        messages.push('Please enter a Name');
    }
    if (emailAt.test(email.value) == false){
        messages.push('Please make sure your email is correct');
    }
    if(phoneCheck.test(phone.value) == false)
    {
        messages.push('Please make sure your Phone number is correct and follows this format (xxx)-xxx-xxxx');
    }
    if(messages.length > 0){
        errorElement.innerText = messages.join(', ');
    }
    else{
        errorElement.innerText = " ";
    }
}