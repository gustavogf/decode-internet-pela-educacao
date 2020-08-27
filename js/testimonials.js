function queryApprovedTestimony() {
  firestore.collection('testimony')
    .where("approved", "==", true)
    .limit(4)
    .get()
    .then(function (querySnapshot) {
      let testimonials = '';
      querySnapshot.forEach(function (doc) {
        testimonials += '<div class="testimonials__item">';
        testimonials += `<p class="testimonials__text">"${doc.data().testimony}"</p>`;
        testimonials += `<span class="testimonials__author">${doc.data().name}</span>`;
        testimonials += '</div>';
      });

      document.getElementById('testimonials').innerHTML = testimonials;
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
