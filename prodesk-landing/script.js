//  toggle class "open" on the menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close the menu after tapping a link
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); hamburger.setAttribute('aria-expanded', false); }
});

// Dark/light toggle
const toggle = document.getElementById('theme-toggle');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved === 'dark');
toggle.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});


// ----- Scroll reveal: fade/slide items in once as they enter the screen -----
document.documentElement.classList.add('js');
const items = document.querySelectorAll('.card, .tile, .stat, .why-list li, .panel, .role, .steps li, .faq details');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.15 });
  items.forEach(el => {
    el.classList.add('reveal');
    el.style.transitionDelay = (Array.prototype.indexOf.call(el.parentNode.children, el) % 5) * 70 + 'ms';
    io.observe(el);
  });
}
