function queryApprovedTestimony() {
  firestore.collection('testimony')
    .where("approved", "==", true)
    .get()
    .then(function (querySnapshot) {
      let testimonials = '';
      querySnapshot.forEach(function (doc) {
        testimonials += `<p>${doc.data().testimony}</p>`;
        document.getElementById('testimonials').innerHTML = testimonials;
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

queryApprovedTestimony();
