import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQfKo3Tg3JLX71GMeR8a6iBZjCo5ZiGgk",
    authDomain: "net-ninja-marioplan-3ff98.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-3ff98.firebaseio.com",
    projectId: "net-ninja-marioplan-3ff98",
    storageBucket: "net-ninja-marioplan-3ff98.appspot.com",
    messagingSenderId: "964251893897"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;