import _ from 'lodash';
import firebase from 'firebase';

const db = firebase.database();
const storageRef = process.env.NODE_ENV ? '' : firebase.storage().ref();

function handleFileSelect(data, uid) {
  const file = data.file[0];
  const metadata = {
    contentType: file.type
    // todo: add to metadata the labels, confidence ratings from catternaut
  };
  const uidRef = storageRef.child(uid);
  const imageRef = uidRef.child(file.name);
  const uploadTask = imageRef.put(file, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', (snapshot) => {
      console.log('state change snapshot:', snapshot);
    }, (error) => {
      console.log('Error in uploading the image.');
      switch (error.code) {
        case 'storage/unauthorized':
          console.log('Error code:', error.code);
          break;
        case 'storage/unknown':
          console.log('Error code:', error.code, error.serverResponse);
          break;
        default:
          console.log('Error code:', error.code);
          break;
      }
      reject(error);
    }, () => {
      console.log('Uploaded', uploadTask.snapshot.totalBytes, 'bytes.');
      const image = uploadTask.snapshot.downloadURL;
      resolve(image);
    });
  });
}

export function saveProfileToFb(data) {
  const uid = firebase.auth().currentUser.providerData[0].uid;
  return handleFileSelect(data, uid)
    .then((avatar) => db
      .ref(`/cats/${uid}`)
      .once('value')
      .then((snapshot) => {
        // catId is the n-th cat attached to the UID
        const catId = _.size(snapshot.val());
        const { name, age, sex, color, about, wishlist } = data;
        db.ref(`/cats/${uid}/${catId}`)
          .set({ name, age, sex, color, about, avatar, wishlist });
        return { name, age, sex, color, about, avatar, wishlist };
      })
      .catch((err) => {
        throw new Error(`Error getting cat profile: ${err}`);
      })
  );
}

function merge(cats, snaps) {
  return _.map(cats, (cat, index) => _.assign(
    {},
    cat,
    snaps[index] || {}
  ));
}

function fetchProfiles(uid) {
  return db.ref(`/cats/${uid}`)
    .once('value')
    .then((snapshot) => snapshot.val());
}

function fetchPhotos(uid, cats) {
  return db.ref(`/photos/${uid}`)
    .once('value')
    .then((snapshot) => {
      const snaps = snapshot.val();
      return merge(cats, snaps);
    });
}

export function fetchCatsFromFb(uid) {
  return fetchProfiles(uid)
    .then((cats) => fetchPhotos(uid, cats))
    .catch((err) => {
      throw new Error(`Error getting cats or photos: ${err}`);
    });
}

export function addPhotoToFb(data) {
  const { uid, catId, feed } = data;
  return handleFileSelect(data, uid)
    .then((image) => {
      db.ref(`/photos/${uid}/${catId}/${feed}`)
        .push(image);
      return { image };
    })
    .catch((err) => {
      throw new Error(`Error uploading cat image: ${err}`);
    });
}
