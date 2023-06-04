// i want when i click the submit button, 
// with some text

// so when i click the submit button , the first main displays none and
// the second main displays block
const emailInput = document.querySelector(".input-button-container input")
const subscribeButton = document.getElementById("subscribe-button");
const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');
const dismissButton = document.getElementById("dismiss-button");
const errorMessage = document.getElementById("error-message");
subscribeButton.addEventListener("click" ,function() {
  // first validates the email:
  
  if(validateEmail(emailInput.value)) {
    main1.style.display="none";
    main2.style.display="block";
  }
  else {
    errorMessage.style.display="block";
  }

} )
dismissButton.addEventListener("click" , function() {
  main2.style.display="none";
  main1.style.display = "block";
})

function validateEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}