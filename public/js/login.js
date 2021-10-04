const formHandler = document.querySelector("#formHandler")

async function signInUpHandler(e) {
    e.preventDefault();
    // const usernameInput = document.querySelector
    const emailInput = document.querySelector("#email-input").value.trim();
    const pwInput = document.querySelector("#pw-input").value.trim();

    if (emailInput && pwInput) {
        const res = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ emailInput, pwInput }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.ok) {
            document.location.replace("/");
            console.log("login successful")
        } else {
            console.log("failed to login")
        }

    }

    console.log(emailInput)
    console.log(pwInput)

}

formHandler.addEventListener("submit", signInUpHandler)