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
