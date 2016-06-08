import _ from 'lodash';
import firebase from 'firebase';

const db = firebase.database();
// todo: there has to be a better way for prepping test runs
const storageRef = process.env.NODE_ENV ? '' : firebase.storage().ref();

function handleFileSelect(data, uid) {
  const file = data.avatar[0];
  const metadata = {
    contentType: file.type
  };
  // todo: ensure name is unique, doesn't overwrite existing photo
  const uploadTask = storageRef.child(uid).child(file.name).put(file, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', (snapshot) => {
      console.log('snapshot', snapshot);
      // todo: use snapshot data to display percentage of upload complete
      // https://firebase.google.com/docs/storage/web/upload-files#monitor_upload_progress
    }, (error) => {
      reject(error);
    }, () => {
      console.log('Uploaded', uploadTask.snapshot.totalBytes, 'bytes.');
      const avatar = uploadTask.snapshot.metadata.downloadURLs[0];
      resolve(avatar);
    });
  });
}

export function saveProfileToFb(data) {
  const uid = firebase.auth().currentUser.providerData[0].uid;
  return handleFileSelect(data, uid)
    .then((avatar) => db.ref(`/cats/${uid}`).once('value')
      .then((snapshot) => {
        // catId is the n-th cat attached to the UID
        const catId = _.size(snapshot.val());
        const { name, age, sex, color, about } = data;
        db.ref(`/cats/${uid}/${catId}`)
          .set({ name, age, sex, color, about, avatar });
        // Clear out `profile` from state, add to `cats` in state with info from Firebase.
        // Then, redirect to some page. Main feed?
      })
      .catch((err) => {
        throw new Error(`Error getting cat profile: ${err}`);
      })
    );
}
