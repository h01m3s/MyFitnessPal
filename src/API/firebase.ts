import * as firebase from 'firebase/app';
import 'firebase/storage';
import firebaseConfig from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

firebase.initializeApp(firebaseConfig);

type handleFileUpload = (file: File) => void;

const storageRef = firebase.storage().ref();

const updateAvatar: handleFileUpload = (file) => {
  const metadata = {
    contentType: file.type
  };

  storageRef
    .child(`avatar/${uuidv4()}`)
    .put(file, metadata)
    .then((snapshot) => {
      console.log(`Uploaded ${snapshot.totalBytes} bytes.`);
      console.log(`File metadata ${snapshot.metadata}.`);

      snapshot.ref.getDownloadURL().then((url) => {
        console.log(`File available at ${url}`);
      });
    })
    .catch((err) => {
      console.log(`An error has occurd: ${err}`);
    });
};

export default {
  updateAvatar: updateAvatar
};
