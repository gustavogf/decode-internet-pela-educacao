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

queryApprovedTestimony();
