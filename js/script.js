const titleClickHandler = function(event) {

  console.log('Link was clicked!');
  console.log('event');

event.preventDefault();

/* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  /* [IN PROGRESS] add class 'active' to the clicked link */

  const clickedElement = this;
    activeLink.classList.Add('active');

    console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles links */

  for(let activeLink of activeLinks)  {
    activeLink.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = href;
    activeLink.classList.Add('href')
      atrybut = element.getAttribute(nazwaAtrybutu)
        var div1 = document.getElementById("href");
        var a = div1.getAttribute("href");
          alert(a);

          console.log('artocleSelector');


  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
};

const links = document.querySelectorAll('.titles a');

for(let link of links)  {
  link.addEventListener('click', titleClickHandler);
  }
