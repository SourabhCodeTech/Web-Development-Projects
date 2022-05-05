let toggle1 = document.querySelector('#toggle');
let toggle2 = document.querySelector('#toggle2');
let toggle_side_nav = document.querySelector('.side_nav');

toggle1.addEventListener('click', () => {
  toggle_side_nav.classList.toggle('none');
});

toggle2.addEventListener('click', () => {
  toggle_side_nav.classList.toggle('none');
});
