
/*
* Project: Lab5 Validation
* Authour: Chris Beaucage
* Date: 2022/11/20
*/

let buttons = document.getElementsByTagName("button");
let signUp = buttons[0];
let reset = buttons[1];

let labels = document.getElementsByTagName("label");
let emailLabel = labels[0];
let loginLabel = labels[1];
let passLabel = labels[2];
let pass2Label = labels[3];
let newsLabel = labels[4];
let termsLabel = labels[5];

signUp.style.backgroundColor = "cornflowerblue";
reset.style.backgroundColor = "red";

var validForm = false;
var validEmail = false;
let emailPattern = /^[a-zA-Z0-9\._-]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]+$/;
var validLogin = false;
let loginPattern = /^[a-zA-Z0-9]{1,20}$/i;
var validPass = false;
let passPattern = /^[a-zA-Z0-9]{6,}$/;
var validPass2 = false;
var validAgree = false;

let error = document.createElement("div");

let email = document.getElementById('email');
let login = document.getElementById('login');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('pass2');
let news = document.getElementById('newsletter');
let agree = document.getElementById('terms');
let errorElement = document.querySelectorAll(".textfield > div");

console.log(errorElement)

function hasLowerCase(str) {
    return str !== str.toUpperCase();
}

function hasUpperCase(str) {
    return str !== str.toLowerCase();
}

function validateEmail() {
    let result = emailPattern.test(email.value);

    if (result == false) {
        email.style.border = "solid 1px red";
        emailLabel.style.color = "#ff3300";
        validEmail = false;
        if (email.nextElementSibling === null) {
            error.textContent = "X  Email address should be non-empty with format xyz@xyz.xyz"
            email.after(error);
        }
    }

    if (result == true) {
        validEmail = true;
        email.style.border = "solid 1px black";
        emailLabel.style.color = "#000000";
    }
}

function validateLogin() {
    let result = loginPattern.test(login.value);
    var lowerLogin = login.value.toLowerCase();

    if (result == false || hasUpperCase(lowerLogin) == true) {
        login.style.border = "solid 1px red";
        loginLabel.style.color = "#ff3300";
        validLogin = false;
        if (login.nextElementSibling === null) {
            login.after(error, "X  Username should be non-empty and within 20 characters long", 'fggg', 'gghgg');
            errorElement.style.color = "red";
        }
    }

    if (result == true && hasUpperCase(lowerLogin) == false) {

        validLogin = true;
        login.style.border = "solid 1px black";
        loginLabel.style.color = "#000000";
    }
}

function validatePass() {
    let result = passPattern.test(pass.value);

    if (result == false || hasLowerCase(pass.value) == false || hasUpperCase(pass.value) == false) {
        pass.style.border = "solid 1px red";
        passLabel.style.color = "#ff3300";
        validPass = false;
        if (pass.nextElementSibling === null) {
            pass.after(error, "X  Password should be at least 6 characters: 1 uppercase and 1 lowercase");
            errorElement.style.color = "red";
        }
    }

    if (result == true && hasLowerCase(pass.value) == true && hasUpperCase(pass.value) == true) {
        validPass = true;
        pass.style.border = "solid 1px black";
        passLabel.style.color = "#000000";
    }
}

function validatePass2() {

    if (pass.value !== pass2.value) {
        validPass2 = false;
        pass2.style.border = "solid 1px red";
        pass2Label.style.color = "#ff3300";
        if (pass2.nextElementSibling === null) {
            pass2.after(error, "X  Please re-type password");
            errorElement.style.color = "red";
        }

    }

    if (pass.value === pass2.value) {
        validPass2 = true;
        pass2.style.border = "solid 1px black";
        pass2Label.style.color = "#000000";
    }

}

function termsAgree() {
    if (agree.checked) {
        validAgree = true;
        agree.style.border = "solid 1px black";
        termsLabel.style.color = "#000000";
    }

    else {
        validAgree = false;
        agree.style.border = "solid 1px red";
        termsLabel.style.color = "#ff3300";
        if (agree.previousElementSibling === null) {
            agree.before(error, "X Please accept the terms and conditions")
            errorElement.style.color = "red";
        }

    }

}

function newsAlert() {
    if (news.checked) {
        alert("Check your spam folder.");
    }

}

news.addEventListener("blur", newsAlert);

email.addEventListener("blur", validateEmail);
login.addEventListener("blur", validateLogin);
pass.addEventListener("blur", validatePass);
pass2.addEventListener("blur", validatePass2);
agree.addEventListener("blur", termsAgree);



function validateForm() {

    if (validEmail == true && validLogin == true && validPass == true && validPass2 == true) {
        validForm = true;
    }

    else {
        validForm = false;
    }


}

function validate() {
    if (validForm == true) {
        return true;
    }
    else {
        return false
    }
}

signUp.addEventListener("click", validateForm);





