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

    console.log('clickedElement (with plus): ' + clickedElement);

    clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles links */

    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active'); }

  alert(a); // pokaże wartość atrybutu "align" dla elementu o id="div1"

    console.log('clickedElement:', clickedElement);

  /* get 'href' attribute from the clicked link */

  

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
};

const links = document.querySelectorAll('.titles a');

for(let link of links)  {
  link.addEventListener('click', titleClickHandler);
  }
