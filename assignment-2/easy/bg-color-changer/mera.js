const body=document.querySelector('body');
body.style.backgroundColor='orange'

const red=document.querySelector('.red')
const yellow=document.querySelector('.yellow');
const black=document.querySelector('.black');
const purple=document.querySelector('.purple');
const green=document.querySelector('.green');
const blue=document.querySelector('.blue');
const def=document.querySelector('.default');

black.addEventListener('click',()=> {
  change('black')
})
yellow.addEventListener('click',()=> {
  change('yellow')
})
red.addEventListener('click',()=> {
  change('red')
})
purple.addEventListener('click',()=> {
  change('purple')
})
green.addEventListener('click',()=> {
  change('green')
})
blue.addEventListener('click',()=> {
  change('blue')
})
def.addEventListener('click',()=> {
  body.style.backgroundColor='orange';
})


function change(color) {
  body.style.backgroundColor=color;
}
