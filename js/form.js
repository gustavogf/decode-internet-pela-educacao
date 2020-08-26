document.addEventListener('submit', (e) => {
  e.preventDefault();

  if (grecaptcha.getResponse().length) {
    const form = e.target;
    const url = '';

    fetch(url, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(doc => {
        alert('Sucesso');

      })
      .catch(() => {
        alert('Erro');
      });
  }
});
