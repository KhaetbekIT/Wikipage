import { GetData } from "./api";

const AllPosts = () => {
    const lists = document.querySelector(".all-list");

    lists.innerHTML = ""

    GetData("/posts").then(data => {
        data.forEach(post => {
            
            lists.insertAdjacentHTML("beforeend", `
            <li class="other-list__item">
            <a class="other-list__link" href="./article.html?postId=${post.id}">
            ${post.title}
            </a>
            </li>
            `)
        });
    }).catch(error => console.error(error))
}

export default AllPosts