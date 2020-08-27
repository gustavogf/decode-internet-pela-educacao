function queryPartners() {
  firestore.collection('assets')
    .where("kind", "==", "partner")
    .get()
    .then(function (querySnapshot) {
      mountSupportSection(querySnapshot);
    })
}

function mountSupportSection(items) {
  let supportHTML = '';

  items.forEach(function(doc) {
    const tag = `<a href="${doc.data().url}"><img src="${doc.data().image_url}" class="partners-image" alt="${doc.data().name}"></a>`;
    supportHTML += tag;
  });

  document.getElementById('partners').innerHTML = supportHTML;
}

queryPartners();
