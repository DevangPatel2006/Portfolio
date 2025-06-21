// Tilt effect
const card = document.getElementById('tilt');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// Smooth scroll on button click
document.getElementById('viewWorkBtn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
