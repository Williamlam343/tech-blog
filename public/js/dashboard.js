const createPost = document.querySelector(".post-btn")
const postContainer = document.querySelector("#postContainer")
const formHandler = document.querySelector("#formHandler")

function renderPostContainer(event) {
    event.preventDefault();

    postContainer.classList.toggle("invisible")
    createPost.classList.toggle("invisible")
}

async function postHandler(event) {
    event.preventDefault()
    const title = document.querySelector("#title-input").value.trim();
    const post = document.querySelector("#blogtext-input").value.trim();

    if (title && post) {
        const res = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({ title, post }),
            headers: {
                "content-type": "application/json",
            },

        })
        if (res.ok) {
            document.location.replace("/");
        } else {
            console.log("failed to create post")
        }
        console.log(title)
        console.log(post)
    }
}



createPost.addEventListener("submit", renderPostContainer)
formHandler.addEventListener("submit", postHandler)