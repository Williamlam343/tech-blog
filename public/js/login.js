const formHandler = document.querySelector("#formHandler")

async function signInUpHandler(e) {
    e.preventDefault();
    // const usernameInput = document.querySelector
    const email = document.querySelector("#email-input").value.trim();
    const password = document.querySelector("#pw-input").value.trim();

    if (email && password) {
        const res = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (res.ok) {
            document.location.replace("/");
            console.log("login successful")
        } else {
            console.log("failed to log")
        }

    }

    console.log(email)
    console.log(password)

}

formHandler.addEventListener("submit", signInUpHandler)