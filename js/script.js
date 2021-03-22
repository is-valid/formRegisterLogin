"use strict";

let emailArray = [];
let passwordArray = [];
const loginTab = document.getElementById("login-tab");
const registrationTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login");
const registrationForm = document.getElementById("register");

const form = document.getElementById('form');
const sendLogin = document.getElementById('sendLogin');
const sendRegistration = document.getElementById('sendRegistration');
const username = document.getElementById('userName');
const password = document.getElementById('password');
const newUserName = document.getElementById('newUserName');
const newPassword = document.getElementById('newPassword');
const newEmail = document.getElementById('newEmail');
const newPhone = document.getElementById('newPhone');

/*= TABS*/
registrationTab.onclick = function (event) {
    loginForm.className = "form-display hide";
    registrationForm.className = "form-display show";
    return false;
};
loginTab.onclick = function (event) {
    loginForm.className = "form-display show";
    registrationForm.className = "form-display hide";
    return false;
};
/*= VALIDATION*/
sendLogin.onclick = function (event) {
    event.preventDefault();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue === '' || (usernameValue.length < 4)) {
        username.style = 'border: 4px solid Red';
    } else {
        username.style = 'border: 2px solid green';
    }
    if (passwordValue === '' || (passwordValue.length < 4)) {
        password.style = 'border: 4px solid Red';
    } else {
        password.style = 'border: 2px solid green';
        return;
    }
}
sendRegistration.onclick = function (event) {
    event.preventDefault();
    const newUserNameValue = newUserName.value.trim();
    const newPasswordValue = newPassword.value.trim();
    const newEmailValue = newEmail.value.trim();
    const newPhoneValue = newPhone.value.trim();
    if (newUserNameValue === '' || (newUserNameValue.length < 4)) {
        newUserName.style = 'border: 4px solid Red';
    } else {
        newUserName.style = 'border: 2px solid green';
    }
    if (newPasswordValue === '' || (newPasswordValue.length < 4)) {
        newPassword.style = 'border: 4px solid Red';
    } else {
        newPassword.style = 'border: 2px solid green';
    }
    if (newEmailValue === '') {
        newEmail.style = 'border: 4px solid Red';
    } else if (!isEmail(newEmailValue)) {
        newEmail.style = 'border: 4px solid Red';
        alert('email is not valid')
    } else {
        newEmail.style = 'border: 2px solid green';
    }
    if (newPhoneValue === '') {
        newPhone.style = 'border: 4px solid Red';
    } else if (!isPhone(newPhoneValue)) {
        newPhone.style = 'border: 4px solid Red';
        alert('number is not valid')
    } else {
        newPhone.style = 'border: 2px solid green';
    }

}
function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}
function isPhone(phone) {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(phone)
}