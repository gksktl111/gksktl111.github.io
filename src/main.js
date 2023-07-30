const $header = document.querySelector('.header');
const headerHeight = $header.clientHeight;

const $home = document.querySelector('#home');
const homeHeight = $home.clientHeight;
const $homeAvatar = document.querySelector('.home__avatar');
const $homeTitle = document.querySelector('.home__title');
const $homeDescription = document.querySelector('.home__description');
const $homeContact = document.querySelector('.home__contact');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    $header.classList.add('header--dark');
  } else {
    $header.classList.remove('header--dark');
  }
});

window.addEventListener('scroll', () => {
  let opacity = 1 - window.scrollY / homeHeight;

  $homeAvatar.style.opacity = `${opacity}`;
  $homeTitle.style.opacity = `${opacity}`;
  $homeDescription.style.opacity = `${opacity}`;
  $homeContact.style.opacity = `${opacity}`;
});
