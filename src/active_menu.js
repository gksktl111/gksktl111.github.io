'use strict';

function handleActiveSelection(targetId) {
  const active = document.querySelector('.active');
  const target = document.querySelector(
    `.header__menu__itme[data-link="${targetId}"]`
  );

  if (active !== target) {
    active.classList.remove('active');
    target.classList.add('active');
  }
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handleActiveSelection(entry.target.id);
    }
  });
};

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9,
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.section');

targets.forEach((target) => {
  observer.observe(target);
});
