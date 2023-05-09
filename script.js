function myFunction(x) {
  x.classList.toggle("change");
}

const form = document.querySelector('#form');
const commentBox = document.querySelector('#comment-box');
const list = document.querySelector('#list');



const comments = [];
// do not show the comment box if there is not any comment


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
  hamburgerMenu.classList.toggle('hidden')
})

// smooth scroling 
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  
    function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }
  
    window.requestAnimationFrame(step);
  });
});




