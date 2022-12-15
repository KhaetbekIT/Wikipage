const markdownResultElement = document.querySelector("#markdown-result");
// Подключаем и парсим localStorage
const articles = JSON.parse(localStorage.getItem('articles'));
const article = articles[articles.length - 1];


// Обновляем кода
//substr - для показа количества контента от 0 диопазона до n
let result = marked.marked(article.content.substr(0, 250) + "...");
markdownResultElement.innerHTML = result;