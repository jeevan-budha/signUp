
const btn = document.querySelector("#btn");
const inputs = document.querySelectorAll("input");


function CheckField(){
  inputs.forEach((input) => {
    const container = input.closest(".input-container");
    const inputWrapper = container.querySelector(".input-wrapper");
    const errorIcon = container.querySelector(".error-icon");
    const errorMessage = container.querySelector(".error-message");
    if (input.value.trim() === "") {
      errorIcon.style.display = "block";
      errorMessage.style.display = "block";
      input.removeAttribute("placeholder");
      inputWrapper.classList.add("border-color");
    }else {
       errorIcon.style.display = "none";
      errorMessage.style.display = "none";
      inputWrapper.classList.remove("border-color")
    }
    if (input.type === "email") {
      input.setAttribute("placeholder", "email@example/com")
      input.classList.add("input-email");
      if(!input.value.includes("@")){
      errorIcon.style.display = "block";
      errorMessage.style.display = "block";
      }
    }
  })
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  CheckField();
});