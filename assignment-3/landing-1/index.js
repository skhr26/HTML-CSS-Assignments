const upar=document.querySelector('.upar')

window.addEventListener("scroll",()=> {
  console.log(window.scrollY);
  if(window.scrollY>50) {
    upar.classList.add("scrolled");
  }
  else {
    upar.classList.remove("scrolled");
  }
});