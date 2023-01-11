const form = document.querySelector(".email-form")
const email = document.querySelector(".email-form__inpt")
const formbtn = document.querySelector(".email-form__btn")

formbtn.addEventListener('click', (e)=>{
  let messages = []
  console.log(email.validity)
  if(email.validity.typeMismatch || email.validity.patternMismatch){
    document.querySelector(".email-form__inpt--error").innerText = "Please provide a valid email";   
  }
  // if(email.value === "" || email.value === null){
  //   message.push("Email is required")
  // }
  // if(messages.length > 0){
  //   e.preventDefault()
  //   errorElement.innerText = messages.join(", ")
  // }  
})