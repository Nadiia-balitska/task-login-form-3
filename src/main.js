// Countdown Timer
document.addEventListener('DOMContentLoaded', function () {
  function startCountdown(targetId) {
    const eventDate = new Date('2025-03-01T00:00:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        document.getElementById(targetId).innerHTML = 'Час вийшов!';
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById(targetId + 'days').textContent = days
        .toString()
        .padStart(2, '0');
      document.getElementById(targetId + 'hours').textContent = hours
        .toString()
        .padStart(2, '0');
      document.getElementById(targetId + 'minutes').textContent = minutes
        .toString()
        .padStart(2, '0');
      document.getElementById(targetId + 'seconds').textContent = seconds
        .toString()
        .padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  startCountdown('desktop-');
  startCountdown('mobile-');
  startCountdown('modal-');
});

// Form Submission
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    name: form.querySelector('input[type="text"]').value.trim(),
    email: form.querySelector('input[type="email"]').value.trim(),
    phone: form.querySelector('input[type="tel"]').value.trim(),
    terms: form.querySelector('input[type="checkbox"]').checked,
  };

  const phoneRegex = /^\+380\d{2}\d{3}\d{2}\d{2}$/;

  if (!phoneRegex.test(data.phone)) {
    alert('Введіть коректний номер телефону у форматі +380XX XXX XX XX');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert('Введіть коректний email!');
    return;
  }

  if (!data.terms) {
    alert('Ви повинні погодитися з умовами!');
    return;
  }

  fetch('https://example.com/register', {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => alert('Форма відправлена!'))
    .catch(err => alert('Error:', err));

  form.reset();
}

document
  .getElementById('register-form')
  .addEventListener('submit', handleFormSubmit);
document
  .getElementById('modal-register-form')
  .addEventListener('submit', handleFormSubmit);
