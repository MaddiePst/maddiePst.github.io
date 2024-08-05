//////////////////////////////////////////////
// SMOOTH SCROLLING

const work = document.querySelector('.work-link');
console.log(work);
work.addEventListener('click', function(e){
  const href = work.getAttribute('href');
  console.log(href);
  const section = document.querySelector(href);section.scrollIntoView({ behavior: 'smooth'});
})