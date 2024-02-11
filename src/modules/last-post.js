import { marked } from "marked";
import {GetData} from "./api";

const LastPost = () => {
    const article = document.querySelector(".article-wrapper")

    article.innerHTML = ""

    GetData("/posts").then(data => {
        // article.innerHTML = marked.parse(data[data.length - 1].body)

        const lastPost = data[data.length - 1]

        article.insertAdjacentHTML("beforeend", `
            ${marked.parse(lastPost.body.substring(0, 350) + "...")}

            <a href="./article.html?postId=${lastPost.id}" class="button">Читать полностью</a>
        `)


    }).catch(error => {
        throw new Error(error)
    })
}

export {LastPost}