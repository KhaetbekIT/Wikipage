const markdownResultElement = document.querySelector("#markdown-result");
const allListElement = document.querySelector('#all-list');
const articleListElement = document.querySelector('#article-list');
// Подключаем и парсим localStorage
const articles = JSON.parse(localStorage.getItem('articles'));
const article = articles[articles.length - 1];


// Обновляем кода
//substr - для показа количества контента от 0 диопазона до n
let result = marked.marked(article.content.substr(0, 250) + "...");
markdownResultElement.innerHTML = result;

// for
let str = '';
for (let i = 0; i < articles.length; i++) {
    const currentIndexPost = articles[i];
    str = str + `
    <li class="other-list__item"><a class="other-list__link" href="#">${currentIndexPost.title}</a></li>
    <li class="other-list__item
    `;
    allListElement.innerHTML = str;
}

str = '';

for (let i = articles.length - 3; i < articles.length; i++) {
    const current = articles[i];
  
    str = str + `<li class="articles-list-item"><a href="article.html" class="articles-list-link">${current.title}</a></li>`;

    articleListElement.innerHTML = str;
    
}