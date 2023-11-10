function myFunction(e) {
  e.classList.toggle("change");
}

const form = document.querySelector('#form');
const commentBox = document.querySelector('#comment-box');
const list = document.querySelector('#list');

const comments = [];

// form submition
form.addEventListener('submit', e => {
  e.preventDefault();
  comments.push(commentBox.value);
  const newLi = document.createElement('li');
  newLi.textContent = commentBox.value;
  list.appendChild(newLi)
  commentBox.value = ''
  
})

//donation section 
const buttons = document.querySelectorAll('#donate-btns button');
const total = document.querySelector('#total');
const customDonateForm = document.querySelector('#custom-form');
const custom = document.querySelector('#custom');

//custom donation input
customDonateForm.addEventListener('submit', e => {
  e.preventDefault();
  if( isNaN(custom.value)){
    custom.classList.add('bg-red-900')
    custom.classList.remove('bg-green-700')
  } else{
    custom.classList.remove('bg-red-900')
    custom.classList.add('bg-green-700')
    total.textContent = custom.value + '$'
  }
  custom.value = ''
})

// ready-to-use buttons 
buttons.forEach( button => {
  button.addEventListener('click', e => {
    total.textContent = e.target.textContent
  })
})

// toggling of hamburger menu
const toggleBtn = document.querySelector('#toggle');
const hamburgerMenu = document.querySelector('#hamburger-menu');

toggle.addEventListener('click', e =>{
  console.log('clicked')
  hamburgerMenu.classList.toggle('top-24');
})





