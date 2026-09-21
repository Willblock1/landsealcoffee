document.documentElement.classList.add('js');

document.addEventListener('submit', function (event) {
  var form = event.target.closest('.product-form');
  if (!form) return;
  var button = form.querySelector('button[type="submit"]');
  if (!button || button.disabled) return;
  button.dataset.label = button.textContent;
  button.textContent = 'Adding…';
  button.setAttribute('aria-busy', 'true');
});
