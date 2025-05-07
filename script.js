let form=document.querySelector('.SignUpForm');
let subBtn = document.querySelector(".subBtn");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");
let inputFields = document.querySelectorAll('input');
let i = document.querySelectorAll('.icon');

//form prevention
subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatepassword()) {
        alert("Form Submitted Successfully");

        //clear input fields after form submission
        form.reset();
        
        //remove check icons after form submission
        for(let icon of i){
            icon.style.display="none";
        }
    }
});





//validate Name
function validateName() {
    let name = document.querySelector(".name").value;
    if (!name) {
        nameError.innerText = "Name is required";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerText = "Write Full Name";
        nameError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    else{
        nameError.innerText = "";
        nameError.previousElementSibling.classList.add("fa-check");
        return true;
    }
    
}


//validate Email
function validateEmail() {
    let email = document.querySelector(".email").value;
    if (!email) {
        emailError.innerText = "Email is required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerText = "Enter Valid Email";
        email.Error.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    else{
        emailError.innerText = "";
        emailError.previousElementSibling.classList.add("fa-check");
        return true
    }
    
}


//validate password
function validatepassword() {
    let password = document.querySelector(".password").value;
    if (!password) {
        passwordError.innerText = "password is required";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false

    }
    else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passwordError.innerHTML = "password should contain 1 uppercase,1 Lowercase,1 Digit <br>& 1 Alphabet";
        passwordError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    else{
        passwordError.innerHTML = "";
        passwordError.previousElementSibling.classList.add("fa-check");
        return true;
    }
    
}


//focus and blur event
for(let field of inputFields){
    field.addEventListener('focus',(e)=>{
        e.target.style.boxShadow = "0 0 7px lightskyblue";
    })
    field.addEventListener('blur',(e)=>{
        e.target.style.boxShadow = "none"; 
    })
}

