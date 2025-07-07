document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu-nav button');
  const sections = document.querySelectorAll('.section');

  function showSections(category) {
    sections.forEach(section => {
      if (category === 'all' || section.dataset.category === category) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showSections(btn.dataset.target);
    });
  });

  showSections('all');
});
