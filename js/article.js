const markdownResultElement = document.querySelector("#markdown-result");
const editElementButton = document.querySelector("#edit-button");
const articlesList = document.querySelector("#articles-list-js");
// 
const getLocal = parseInt(location.search.substr(4));
let article = null;
const articles = JSON.parse(localStorage.getItem('articles'))
for (let i = 0; i < articles.length; i++) {
    if(articles[i].id === getLocal){
        article = articles[i].content;
    }
}

let str = '';
for (let i = articles.length - 3; i < articles.length; i++) {
    const current = articles[i];
  
    str = str + `<li class="articles-list-item"><a href="article.html?id=${current.id}" class="articles-list-link">${current.title}</a></li>`;

    articlesList.innerHTML = str;
    
}

let result = marked.marked(article);
markdownResultElement.innerHTML = result;

editElementButton.addEventListener('click', function(){
    location.replace('./new.html?id=' + getLocal);
});