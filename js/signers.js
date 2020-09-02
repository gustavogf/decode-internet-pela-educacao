function createSigner() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const occupation = document.querySelector('input[name="occupation"]').value;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const createdAt = new Date().toLocaleDateString('pt-br', options);

  firestore.collection("signatures").add({
      name: name,
      email: email,
      occupation: occupation,
      created_at: createdAt,
    })
    .then(function () {
      document.getElementById('form').classList.add('hidden');
      document.getElementById('shareMessage').classList.remove('hidden');
      displaySigners();
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
      let signersCount = 0;
      let lastSigners = [];
      let parsedNames = [];
      let parsedEmails = [];

      results.docs.forEach(function (data, index) {
        let currentEmail = data.data().email
        let currentName = data.data().name

        if (parsedEmails.indexOf(currentEmail) === -1) {
          parsedNames.push(currentName)
          parsedEmails.push(currentEmail)
        }
      })

      let lastSignersIndex = parsedNames.length - 2;
      console.log(parsedNames)

      parsedNames.forEach(function (data, index) {
        if (index === lastSignersIndex) {
          lastSigners.push(data);
          lastSignersIndex += 1;
        } else {
          signersCount += 1;
        }
      })
      console.log(lastSigners)

      const text = `${lastSigners[1]}, <br>${lastSigners[0]}<br> e mais ${signersCount} pessoas já assinaram.`;
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
