const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');

  header.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
