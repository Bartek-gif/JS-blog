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

function generateTitleLinks(){

/* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

/* for each article */
  let html = '';

  for(let article of articles){

/* get the article id */
  const articleId = article.getAttribute('id');

/* find the title element */

/* get the title from the title element */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

/* create HTML of the link */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';


/* insert link into html variable */
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

  function generateTags() {

/* find all articles */
  const clickedElement = this;
  const articles = document.querySelectorAll(optArticleSelector);

/* START LOOP: for every article: */
    for(let article of articles) {

/* find tags wrapper */
  const titleList = article.querySelector(optArticleTagsSelector);

/* make html variable with empty string */
  let html ='';

/* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
  console.log(articleTags);

/* split tags into array */
  const articleTagsArray = articleTags.split(' ');


/* START LOOP: for each tag */
  for(let tag of articleTagsArray) {
  console.log(tag);

/* generate HTML of the link */
  const linkHTML = '<li><a href="#tag-' + tag  + '"> ' + tag + ' </a></li>';
  console.log(linkHTML);

/* add generated code to html variable */
html = html + linkHTML;
console.log(html);

/* END LOOP: for each tag */
}

/* insert HTML of all the links into the tags wrapper */
  titleList.innerHTML = html;

/* END LOOP: for every article: */
  }
}

  generateTags();

  function tagClickHandler(event){
/* prevent default action for this event */
  event.preventDefault();

/* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

/* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

/* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

/* find all tag links with class active */
  const tagsActiveLinks = document.querySelectorAll('a.active[href^="#tag-"]');

/* START LOOP: for each active tag link */
  for(const tagsActiveLinks of tagsActiveLink) {

/* remove class active */
tagActiveLinks.classList.remove('active');

/* END LOOP: for each active tag link */
 }
/* find all tag links with "href" attribute equal to the "href" constant */
  const tagsLinks = document.querySelectorAll('a[href="' + href + '"]');

/* START LOOP: for each found tag link */
  for(const tagLinks of tagLink){

/* add class active */
  tagLinks.classList.add('active');

/* END LOOP: for each found tag link */
}
/* execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags(){
/* find all links to tags */

/* START LOOP: for each link */

/* add tagClickHandler as event listener for that link */

/* END LOOP: for each link */
  }

  addClickListenersToTags();
