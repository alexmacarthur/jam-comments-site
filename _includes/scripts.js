(() => {
  const form = document.getElementById('interestForm');
  const confirmation = document.getElementById('interestConfirmation');

  if (!form) {
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    confirmation.style.display = '';
    confirmation.innerHTML = 'Hold up...';

    const result = await fetch('/api/interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: e.currentTarget.querySelector('[name=email]').value
      })
    });

    confirmation.classList.add(result.ok ? 'bg-green-500' : 'bg-red-500');
    confirmation.innerHTML = result.ok
      ? 'Gotcha! Expect an email when JamComments goes live, and then never again.'
      : 'Sorry, something went wrong. Frustratingly <a href="https://twitter.com/amacarthur" rel="noopener noreferrer" target="_blank">tweet at me.</a>'
  });
})();
