firebase.initializeApp({
  apiKey: 'AIzaSyD0qtFjQNMMclAZzEDu4iysSQP5I61uZPs',
  authDomain: 'quero-hackday.firebaseapp.com',
  projectId: 'quero-hackday'
});

const firestore = firebase.firestore();

function query() {
  firestore.collection('signatures')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data().name);
      });
    })
}

function create() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const occupation = document.querySelector('input[name="occupation"]').value;
  const createdAt = new Date();

  firestore.collection("signatures").add({
      name: name,
      email: email,
      occupation: occupation,
      created_at: createdAt,
    })
    .then(function () {
      console.log("Document successfully written!");
      document.getElementById('form').classList.add('hidden');
      document.getElementById('shareMessage').classList.remove('hidden');
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

function queryApprovedTestimony() {
  firestore.collection('testimony')
    .where("approved", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data().name, "and", doc.data().testimony, "and", doc.data().email);
      });
    })
}

function createTestimony() {
  const name = document.querySelector('.author-name').value;
  const testimony = document.querySelector('.testimony').value;
  const email = document.querySelector('.author-email').value;
  const createdAt = new Date();

  firestore.collection("testimony").add({
      testimony: testimony,
      name: name,
      email: email,
      approved: false,
      created_at: createdAt
    })
    .then(function () {
      console.log("Testimony successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing testimony: ", error);
    });
}

document.addEventListener('submit', (e) => {
  e.preventDefault();

  if (grecaptcha.getResponse().length) {
    create();
  }
});

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
