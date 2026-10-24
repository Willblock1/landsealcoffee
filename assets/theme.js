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

document.addEventListener('click', function (event) {
  var card = event.target.closest('[data-product-select]');
  if (!card) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  var id = card.getAttribute('data-product-select');
  var panel = document.querySelector('[data-product-panel="' + id + '"]');
  if (!panel) return;
  event.preventDefault();

  document.querySelectorAll('[data-product-panel]').forEach(function (p) {
    p.hidden = p !== panel;
  });
  document.querySelectorAll('[data-product-select]').forEach(function (c) {
    var active = c === card;
    c.classList.toggle('inventory-card--featured', active);
    if (active) c.setAttribute('aria-current', 'true');
    else c.removeAttribute('aria-current');
  });

  var details = document.getElementById('product-details');
  if (details && window.matchMedia('(max-width: 800px)').matches) {
    details.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (details) details.focus({ preventScroll: true });
});

document.addEventListener('change', function (event) {
  var radio = event.target.closest('[data-purchase-type]');
  if (!radio) return;
  var options = radio.closest('[data-purchase-options]');
  if (!options) return;
  var subscribe = radio.value === 'subscribe' && radio.checked;
  var frequency = options.querySelector('[data-frequency]');
  var select = options.querySelector('[data-selling-plan]');
  if (frequency) frequency.hidden = !subscribe;
  if (select) select.disabled = !subscribe;
});
