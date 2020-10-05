{
  'use strict';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

/* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
}
/* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorsSelector = '.post-author';

  function generateTitleLinks(customSelector = '') {

/* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

/* for each article */
  let html = '';

  for (let article of articles) {

/* get the article id */
  const articleId = article.getAttribute('id');

/* find the title element */

/* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
/* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

/* insert link into html variable */
    html = html + linkHTML;

}

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

  function generateTags() {
/* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

/* START LOOP: for every article: */
  for (let article of articles) {
/* find tags wrapper */
  const tagWrapper = article.querySelector(optArticleTagsSelector);

/* make html variable with empty string */
  let html = '';
/* get tags from data-tags attribute */
/* split tags into array */
  const dataTags = article.getAttribute('data-tags').split(' ');

/* START LOOP: for each tag */
  for (let tag of dataTags) {

/* generate HTML of the link */
  const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
/* add generated code to html variable */
  html = html + linkHTML;
/* END LOOP: for each tag */
}
/* insert HTML of all the links into the tags wrapper */

  tagWrapper.innerHTML = html;
/* END LOOP: for every article: */
  }
}

generateTags();

  const tagClickHandler = function (event) {
/* prevent default action for this event */
  event.preventDefault();

/* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

/* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
    console.log(href);
/* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
/* find all tag links with class active */
  const tagLinksActive = document.querySelectorAll('a.active[href^="#tag-"]');
/* START LOOP: for each active tag link */
  for (let tag of tagLinksActive) {
/* remove class active */
  tag.classList.remove('active');
/* END LOOP: for each active tag link */
}
/* find all tag links with "href" attribute equal to the "href" constant */
  const tagHref = document.querySelectorAll('a[href="' + href + '"]');

/* START LOOP: for each found tag link */
  for (let tag of tagHref) {
/* add class active */
  tag.classList.add('active');
/* END LOOP: for each found tag link */
}
/* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

  function addClickListenersToTags() {
/* find all links to tags */
  const tagLinks = document.querySelectorAll('.post-tags a');
/* START LOOP: for each link */
  for (let tag of tagLinks) {
/* add tagClickHandler as event listener for that link */
  tag.addEventListener('click', tagClickHandler);
/* END LOOP: for each link */
  }
}

addClickListenersToTags();

}
