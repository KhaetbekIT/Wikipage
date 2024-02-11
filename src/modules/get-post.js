import { marked } from "marked";
import { GetData } from "./api"

const GetPost = () => {

    const article = document.querySelector(".article-wrapper")

    const id = window.location.search.substring(8)

    article.innerHTML = ""

    GetData(`/posts/${id}`).then(data => {
        // article.innerHTML = marked.parse(data.body)

        article.insertAdjacentHTML("beforeend", `
            ${marked.parse(data.body)}

            <a href="./new.html?postId=${id}" class="button">
                Редактировать статью
            </a>
        `)
    }).catch(() => {
        window.location.replace("/")
    })
}
export default GetPost;