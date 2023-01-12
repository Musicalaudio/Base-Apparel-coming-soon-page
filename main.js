const form = document.querySelector(".email-form")
const email = document.querySelector(".email-form__inpt")
const formbtn = document.querySelector(".email-form__btn")
const errorMsg = document.querySelector(".email-form__inpt--error");
const errorIcon = document.querySelector(".error-icon");

formbtn.addEventListener('click', (e)=>{
  if(email.validity.typeMismatch || email.validity.patternMismatch || email){
    e.preventDefault();
    errorMsg.innerText = "Please provide a valid email"   
    email.setAttribute("aria-invalid", true);
    errorIcon.style.display = "block";
  }else{
    errorMsg.innerText = ""   
    email.setAttribute("aria-invalid", false);
    errorIcon.style.display = "none";
  }
})