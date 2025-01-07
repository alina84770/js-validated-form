let subBtn = document.querySelector(".subBtn");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

//form prevention
subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatepassword()) {
        alert("Form Submitted Successfully");

        //clear input fields after form submission
        document.querySelector(".name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".password").value = "";

        //remove check icons after form submission
        document.querySelector(".nameCheck").style.display = "none";
        document.querySelector(".emailCheck").style.display = "none";
        document.querySelector(".passwordCheck").style.display = "none";
    }



});


//validate Name
function validateName() {
    let name = document.querySelector(".name").value;
    let icon = document.querySelector("i");
    if (!name) {
        nameError.innerText = "Name is required";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerText = "Write Full Name";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    nameError.innerText = "";
    nameError.previousElementSibling.classList.add("fa-check");
    return true;
}


//validate Email
function validateEmail() {
    let email = document.querySelector(".email").value;
    let icon = document.querySelector("i");
    if (!email) {
        emailError.innerText = "Email is required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerText = "Enter Valid Email";
        email.Error.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    emailError.innerText = "";
    emailError.previousElementSibling.classList.add("fa-check");
    return true
}


//validate password
function validatepassword() {
    let password = document.querySelector(".password").value;
    let icon = document.querySelector("i");
    if (!password) {
        passwordError.innerText = "password is required";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false

    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passwordError.innerHTML = "password should contain 1 uppercase,1 Lowercase,1 Digit <br>& 1 Alphabet";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add("fa-check");
    return true
}

//Focus and Blur event on input field 'full Name'
let name = document.querySelector(".name");
name.addEventListener("focus", (e) => {
    name.style.boxShadow = "0 0 7px lightskyblue";
});

//Blur Event
name.addEventListener("blur", (e) => {
    name.style.boxShadow = "none";
    console.log("focus losses");
});

//Focus and Blur event on input field 'Email'
let email = document.querySelector(".email");
email.addEventListener("focus", (e) => {
    email.style.boxShadow = "0 0 7px lightskyblue";
});

//Blur Event
email.addEventListener("blur", (e) => {
    email.style.boxShadow = "none";
});


//Focus and Blur event on input field 'password'
let password = document.querySelector(".password");
password.addEventListener("focus", (e) => {
    password.style.boxShadow = "0 0 7px lightskyblue";
});

//Blur Event
password.addEventListener("blur", (e) => {
    password.style.boxShadow = "none";
});
