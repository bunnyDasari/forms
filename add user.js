let nameEl = document.getElementById("name");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsg = document.getElementById("emailErrMsg");
let addUserForm = document.getElementById("addUserForm");

addUserForm.addEventListener("submit", function(event) {
    event.preventDefault();
})

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "required*";
    } else {
        nameErrMsg.textContent = "";
    }
})

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "required*";
    } else {
        emailErrMsg.textContent = "";
    }
})