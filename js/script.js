const titleClickHandler = function(event) {

event.preventDefault();

const clickedElement = this;
console.log('Link was clicked!');

/* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks)  {
    activeLink.classList.remove('active');
  }

/* [IN PROGRESS] add class 'active' to the clicked link */

  console.log('clickedElement (with plus): ' + clickedElement);

  clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
}

/* get 'href' attribute from the clicked link */

const articleSelector = clickedElement.getAttribute('href');

  console.log(articleSelector);

/* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(articleSelector);

  console.log(targetArticle);

/* add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

  const links = document.querySelectorAll('.titles a');

  for(let link of links)  {
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelectory(optTitleSelector);

  /* for each article */

  const articles = document.querySelectorAll(optTitleSelector);

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();
