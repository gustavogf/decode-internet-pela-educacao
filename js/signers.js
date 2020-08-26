function createSigner() {
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


function displaySigners() {
  firestore.collection('signatures')
    .orderBy('created_at')
    .get()
    .then(function(results) {
      let resultsCount = results.docs.length - 2;
      let signersCount = -2;
      let lastSigners = [];

      results.docs.forEach(function (data, index) {
        signersCount += 1;

        if (index === resultsCount) {
          lastSigners.push(data.data().name);
          resultsCount += 1;
        }
      })

      const text = `${lastSigners[0]}, ${lastSigners[1]} e mais ${signersCount} pessoas já assinaram.`;
      document.getElementById('signersCount').innerHTML = text;
    })
}

document.addEventListener('submit', (e) => {
  e.preventDefault();

  if (grecaptcha.getResponse().length) {
    createSigner();
  }
});

displaySigners()
