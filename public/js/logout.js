const logoff = document.querySelector('#logout')

async function logout() {
    const res = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
        document.location.replace('/');
        console.log("logged out")
    } else {
        console.log("logged failed")
    }
}

logoff.addEventListener('click', logout);