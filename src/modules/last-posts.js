import { GetData } from "./api"

const LastPosts = ()=>{
    const list = document.querySelector(".articles-list")

    list.innerHTML = ""

    GetData("/posts").then(data =>{
        data.splice((data.length - 3)).forEach(post => {
            list.insertAdjacentHTML("beforeend", `
                <li class="articles-list-item">
                    <a href="./article.html?postId=${post.id}" class="articles-list-link">
                        ${post.title}
                    </a>
                </li>
            `)
        });
    })
}

export {LastPosts}