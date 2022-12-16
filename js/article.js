const markdownResultElement = document.querySelector("#markdown-result");
// 
const getLocal = parseInt(location.search.substr(4));
let article = null;
const articles = JSON.parse(localStorage.getItem('articles'))
for (let i = 0; i < articles.length; i++) {
    if(articles[i].id === getLocal){
        article = articles[i].content;
    }
}
let result = marked.marked(article);
markdownResultElement.innerHTML = result;