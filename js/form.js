function recaptchaValidated() {
  document.getElementById('submitButton').classList.remove('button--disabled');
  document.getElementById('submitButton').removeAttribute('disabled');
}


document.getElementById('signButton1').addEventListener('click', function () {
  document.getElementById('mask').classList.add('active');
  document.body.classList.add('body-with-modal');
});

document.getElementById('signButton2').addEventListener('click', function () {
  document.getElementById('mask').classList.add('active');
  document.body.classList.add('body-with-modal');
});

document.getElementById('signButton3').addEventListener('click', function () {
  document.getElementById('mask').classList.add('active');
  document.body.classList.add('body-with-modal');
});

function closeModal() {
 document.getElementById('mask').classList.remove("active");
 document.body.classList.remove('body-with-modal');
 document.getElementById('shareMessage').classList.add('hidden');
 document.getElementById('form').classList.remove('hidden');
 resetFormData();
}

function resetFormData() {
  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('input[name="occupation"]').value = '';
  grecaptcha.reset();
}

document.getElementById('close').addEventListener('click', function () {
  closeModal();
});

document.getElementById('mask').addEventListener('click', function () {
  closeModal();
});

document.addEventListener("keyup", event => {
  if (event.keyCode === 27) {
    closeModal();
  }
});
