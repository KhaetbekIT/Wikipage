import { marked } from "marked"
import { GetData, PatchData, PostData } from "./api"

const addArticle = () => {
    const textarea = document.querySelector(".form-textarea")
    const result = document.querySelector(".article-wrapper")
    const title = document.querySelector("input.form-input")
    const button = document.querySelector(".button-save")
    const id = window.location.search.substring(8)

    result.innerHTML = ""

    const post = {
        title: null,
        body: undefined
    }

    textarea.addEventListener("input", () => {
        result.innerHTML = marked.parse(textarea.value)
        post.body = textarea.value
    })

    title.addEventListener("input", () => {
        post.title = title.value
    })

    if (id) {
        GetData(`/posts/${id}`).then(data => {
            title.value = data.title
            textarea.value = data.body
        })

        button.addEventListener("click", () => {
            PatchData(`/posts/${id}`, post).then(() => {
                window.location.replace(`/article.html?postId=${id}`)
            }).catch(error => {
                alert("Что-то пошло не так при редактирование")
                console.error(error);
            })
        })
    } else {
        button.addEventListener("click", () => {
            PostData("/posts", post).then(() => {
                window.location.replace("/")
            }).catch(error => {

                alert("ОШИБКА")
                console.error(error);

            })
        })
    }
}

export default addArticle;