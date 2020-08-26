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
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

document.addEventListener('submit', (e) => {
  e.preventDefault();

  if (grecaptcha.getResponse().length) {
    create();
  }
});


document.getElementById('signButton').addEventListener('click', function () {
  document.getElementById('mask').classList.add('active');
  document.body.classList.add('body-with-modal');
});

function closeModal() {
 document.getElementById('mask').classList.remove("active");
 document.body.classList.remove('body-with-modal');
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
