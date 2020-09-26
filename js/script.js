const titleClickHandler = function(event) {

  console.log('Link was clicked!');
  console.log('event');

event.preventDefault();

/* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks)  {
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

    const clickedElement = this;

    console.log('clickedElement (with plus): ' + clickedElement);

    clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
   }

    console.log('clickedElement:', clickedElement);

  /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    console.log(targetArticle);

  /* add class 'active' to the correct article */
    targetArticle.classList.add('active');

}
