// Call Elements
let myForm = document.querySelector("form")
let divs = document.querySelectorAll("form > div");
let email = document.getElementById("email-address");
let emailLabel = divs[2].children[1];
// Email
let goodEmail = /\w@\w.com/ig;
let corect = email.value.match(goodEmail);

myForm.onsubmit = function() {
    divs.forEach(function(ele){
        if (ele.children[0].value == "") {
            ele.children[1].textContent = `${ele.children[0].placeholder} cannot be empty `
            ele.children[0].style.borderColor = "hsl(0, 100%, 74%)";
            ele.children[2].style.display = "block";
        }
        else {
            ele.children[1].textContent = ``;
            ele.children[0].style.borderColor = " hsl(246, 25%, 77%)";
            ele.children[2].style.display = "none";
            if (email.value.match(goodEmail) == null) {
                emailLabel.textContent = `looks like this is not an email`
            } 
        }
    })
    return false
}
