document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.navbar .menu').classList.toggle('active');
  document.querySelector('.hamburger i').classList.toggle('active');
});
