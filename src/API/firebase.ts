import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

firebase.initializeApp(firebaseConfig);

type handleFileUpload = (file: File) => void;
type UserActivity = (email: string, password: string) => void;

const storageRef = firebase.storage().ref();

export const updateAvatar: handleFileUpload = (file) => {
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

export const createUser: UserActivity = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(`Create user successful. ${JSON.stringify(res)}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error creating user: ${errorMessage} :: ${errorCode}`);
    });
};

export const signIn: UserActivity = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(`Sign in successful. ${JSON.stringify(res)}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error sign in: ${errorMessage} :: ${errorCode}`);
    });
};

export const signOut: () => void = () => {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      console.log(`Sign-out successful. ${JSON.stringify(res)}`);
    })
    .catch((error) => {
      console.log(`An error happened. ${error}`);
    });
};

export const currentUser: firebase.User | null = firebase.auth().currentUser;
