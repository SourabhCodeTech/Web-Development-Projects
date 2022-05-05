console.log('SCRIPT IS RUNNING!');
// document.querySelector('.Cross').style.display = 'none';

let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
});
