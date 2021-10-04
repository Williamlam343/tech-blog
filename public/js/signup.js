const formHandler = document.querySelector("#formHandler")

async function signInUpHandler(e) {
    e.preventDefault();
    const usernameInput = document.querySelector("#username-input").value.trim();
    const emailInput = document.querySelector("#email-input").value.trim();
    const pwInput = document.querySelector("#pw-input").value.trim();

    if (usernameInput && emailInput && pwInput) {
        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace("/")
            console.log("sign up successful")
        } else {
            console.log("sign up failed")
        }
    }

    console.log(usernameInput)
    console.log(emailInput)
    console.log(pwInput)

}

formHandler.addEventListener("submit", signInUpHandler)