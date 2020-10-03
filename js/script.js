'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

/* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
/* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

/* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

/* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

/* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(customSelector = ''){

/* remove contents of titleList */

const titleList = document.querySelector(optTitleListSelector);
let html = '';

/* for each article */

const articles = document.querySelectorAll(optArticleSelector + customSelector);

for (let article of articles){

/* get the article id */

  const articleId = article.getAttribute('id');

/* find the title element */

const articleTitle = article.querySelector('optTitleSelector').innerHTML;

/* get the title from the title element */

/* create HTML of the link */
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

/* insert link into html variable */
html = html + linkHTML;

}

titleList.innerHTML = html;
const links = document.querySelectorAll('.titles a');

for (let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

function generateTags(){

/*[NEW] create a new varible alllTags with an empty arry */
  let allTags = [];

/* find all articles */

const articles = document.querySelectorAll(optArticleSelector);

/*START LOOP: for every article: */
  for (let article of artocles) {

/* find tags wrapper */

const titleList = article.querySelector('optArticleTagsSelector');

/*m make html varible with epty string */

let html = '';

/* get tags from data-tags attribute*/
const articleTags = article.getAttribute('data-tags');

/* split tags intro array */

const articleTagsArray = articleTags.split(' ');

/* START LOOP: for echt tag  */
  for (let tag of articleTagsArray) {

/* generate HTML of the link */

const linkHTML = '<li>'<a href="#tag-' + tag +'">' + tag + '</a></li>';

  function addClickListenersToTags(){
/* find all links to tags */

/* START LOOP: for each link */

/* add tagClickHandler as event listener for that link */

/* END LOOP: for each link */
  }

  addClickListenersToTags();
