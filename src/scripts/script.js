$(document).ready(function () {
  // TOGGLE MENU - NAVBAR
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // TYPING ANIMATION SCRIPT
  let typed1 = new Typed('.typed', {
    strings: [
      'Model',
      'Athlete',
      'Fit-preneur',
      'Fitspiration Bootcamp Queen',
      'your Miss Nevada',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
