import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyBDs4mPpFSeyRDzRquEmBgwF_-mw-R46Yc",
    authDomain: "my-whatsapp-clone-a150f.firebaseapp.com",
    projectId: "my-whatsapp-clone-a150f",
    storageBucket: "my-whatsapp-clone-a150f.appspot.com",
    messagingSenderId: "832582099622",
    appId: "1:832582099622:web:99baa8dbe1050ec66cca67"
  };
  const myFirebase = firebase.initializeApp(firebaseConfig);
export default myFirebase;