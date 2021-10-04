const createPost = document.querySelector(".post-btn")
const postContainer = document.querySelector("#postContainer")
const formHandler = document.querySelector("#formHandler")

function renderPostContainer(event) {
    event.preventDefault();
    // event.preventDefault();
    postContainer.classList.toggle("invisible")
    createPost.classList.toggle("invisible")
}

function postHandler(event) {
    event.preventDefault()
    const titleInput = document.querySelector("#title-input").value.trim();
    const textInput = document.querySelector("#blogtext-input").value.trim();

    console.log(titleInput)
    console.log(textInput)

}



createPost.addEventListener("submit", renderPostContainer)
formHandler.addEventListener("submit", postHandler)