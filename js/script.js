console.log('hello world');

const myName='bashir aremu';

// const h1=document.querySelector('heading-primary');
// console.log('h1');
// h1.textContent=myName;
// h1.style.backgroundColor='red';
// h1.style.padding="5rem";
// h1.addEventListener('click',function(){

// });
const yearEl=document.querySelector('.year');
const currentYear=new Date().getFullYear();
// console.log(currentYear);

yearEl.textContent=currentYear;
// for mobiel navigation
const btnNavEL=document.querySelector(".btn-mobile-nav");

const headerEl=document.querySelector('header');
btnNavEL.addEventListener('click',function(){
headerEl.classList.toggle('nav-open');
});

// smooth scrolling navigation
const allLinks=document.querySelectorAll('a:link');
// console.log(allLinks);
 allLinks.forEach(function(link){
  link.addEventListener('click',function(e){
    e.preventDefault();
    const href=link.getAttribute('href');
    // console.log(href);
    // Scroll back to top
    if(href==="#") window.scrollTo({
      top:0,
      behaviour:"smooth",
    });
    if(href !=="#" && href.startsWith('#')){
      const sectionEl=document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({behaviour:'smooth'})
    }
      // Close mobile navigation
      if(link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });

 });

// Sticky navigation
// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

// hjhj
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
