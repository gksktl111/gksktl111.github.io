const $header = document.querySelector('.header');
const headerHeight = $header.clientHeight;

const $home = document.querySelector('#home');
const homeHeight = $home.clientHeight;
const $homeAvatar = document.querySelector('.home__avatar');
const $homeTitle = document.querySelector('.home__title');
const $homeDescription = document.querySelector('.home__description');
const $homeContact = document.querySelector('.home__contact');

const $arrow = document.querySelector('.arrow-up');

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

window.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    $arrow.classList.add('arrow--up--visible');
  } else {
    $arrow.classList.remove('arrow--up--visible');
  }
});

// navbar 토글버튼 클릭 처리
const navBarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navBarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navBarMenu.addEventListener('click', (event) => {
  // if (event.target.tagName !== 'A') return;
  navBarMenu.classList.remove('open');
});
