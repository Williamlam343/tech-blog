const formHandler = document.querySelector("#formHandler")

function signInUpHandler(e) {
    e.preventDefault();
    const usernameInput = document.querySelector("#username-input").value.trim();
    const emailInput = document.querySelector("#email-input").value.trim();
    const pwInput = document.querySelector("#pw-input").value.trim();

    console.log(usernameInput)
    console.log(emailInput)
    console.log(pwInput)

}

formHandler.addEventListener("submit", signInUpHandler)