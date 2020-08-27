function queryImages() {
  firestore.collection('assets')
    .where("kind", "==", "image")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().name, "and", doc.data().path, "and", doc.data().kind);
      });
    })
}

function queryVideos() {
  firestore.collection('assets')
    .where("kind", "==", "video")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().name, "and", doc.data().path, "and", doc.data().kind);
      });
    })
}

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
    const tag = `<a href="${doc.data().url}"><img src="${doc.data().image_url}" class="partners-image"></a>`;
    supportHTML += tag;
  });

  document.getElementById('partners').innerHTML = supportHTML;
}

queryPartners();
