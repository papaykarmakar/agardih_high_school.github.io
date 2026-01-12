// Toggle dropdown menus on click (works on mobile and desktop)
document.querySelectorAll('.navitem > button').forEach(btn => {
  btn.addEventListener('click', e => {
    const item = e.currentTarget.closest('.navitem');
    const alreadyOpen = item.classList.contains('open');
    document.querySelectorAll('.navitem.open').forEach(i => i.classList.remove('open'));
    if (!alreadyOpen) item.classList.add('open');
  });
});

// Close menus when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navitem')) {
    document.querySelectorAll('.navitem.open').forEach(i => i.classList.remove('open'));
  }
});