const commentHandler = document.querySelector("#commentHandler")
const editHandler = document.querySelector(".edit-post")
const deleteBtn = document.querySelector(".delete-post")
const updateBtn = document.querySelector(".update-post")
const editBtn = document.querySelector(".edit-btn")


async function addComment(event) {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(id)
        const response = await fetch(`/api/post/`, {
            method: 'POST',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log("failed to add comment")
        }
    }


}

async function deleteComment(event) {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(id)
        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log("failed to delete post")
        }
    }

}

async function updateComment(event) {
    event.preventDefault()
    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, post }),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log("failed to update post")
        }
    }

}

updateBtn.addEventListener("submit", updateComment)
deleteBtn.addEventListener("click", deleteComment)
commentHandler.addEventListener("submit", addComment)

