import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.clients-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  speed: 9000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const dropdownmenu1 = document.getElementById('dropdown-menu1');
  const dropdownmenu2 = document.getElementById('dropdown-menu2');
  const scrollTop = window.scrollY;

  if (scrollTop > 200) {
    navbar.classList.add('scrolled');
    dropdownmenu1.classList.add('scrolled');
    dropdownmenu2.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    dropdownmenu1.classList.remove('scrolled');
    dropdownmenu2.classList.remove('scrolled');
  }
});
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.animate-fade-in').forEach((el) => {
  fadeInObserver.observe(el);
});
