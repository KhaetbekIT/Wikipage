;(function () {
    'use strict'
    const markdownSourceElement = document.querySelector("#markdown-source textarea");
    const markdownResultElement = document.querySelector("#markdown-result");
    // Ищем элементы для событии и заголовок
    const buttonSave = document.querySelector("#button-save-js");
    const titleInputElement = document.querySelector("#title-input-js");

    markdownSourceElement.value = ` # Заголовок статьи
Далеко-далеко за [словесными горами в стране](#), гласных и согласных живут рыбные тексты. Использовало однажды гор семь, снова раз. Города большой безорфографичный меня.

Lorem имени, продолжил своего реторический своих послушавшись грустный даль страну парадигматическая океана рыбными, рыбного переписывается, страна? Свой заголовок свое, он.

## Заголовок второго уровня

Что, повстречался последний всеми его щеке не, знаках встретил использовало, прямо, раз свой. 

Города силуэт, заглавных всеми, свою прямо но!

Текстов которой вскоре журчит рекламных свою, сбить на берегу рот. Великий страну проектах знаках над что путь языком, подпоясал, свой они!

### Заголовок третьего уровня

Скатился переулка первую единственное имени над запятых, грустный заголовок переписывается власти переписали. Букв строчка вскоре продолжил, страна злых раз страну.

Букв переписали, продолжил. Силуэт, путь текста журчит переписывается назад от всех его выйти однажды, бросил букв, путь несколько вскоре даже рукопись.
    `;

    // Создадим обработчик для markdownSource
    markdownSourceElement.addEventListener("keyup", function(){
        const result = marked.marked(markdownSourceElement.value);
        markdownResultElement.innerHTML = result
        
    });
    // Создадим обработчик для buttonSave
    buttonSave.addEventListener("click", function(){
        // Создадим объект для получение навого статьи
        const newArticle = {
            id: 0,
            title: titleInputElement.value,
            content: markdownSourceElement.value
        }
        // Создаем парсинг для articles
        const json = localStorage.getItem("articles");
        const articles = JSON.parse(json);

        newArticle.id = articles.length + 1;
        articles.push(newArticle);
        localStorage.setItem("articles", JSON.stringify(articles));
    })
})();
    