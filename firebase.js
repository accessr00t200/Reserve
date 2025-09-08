// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD4EyuaRixoXm03eG2oCMqka65SmVRnfSY",
  authDomain: "chatting-app-2fc10.firebaseapp.com",
  databaseURL: "https://chatting-app-2fc10-default-rtdb.firebaseio.com",
  projectId: "chatting-app-2fc10",
  storageBucket: "chatting-app-2fc10.firebasestorage.app",
  messagingSenderId: "841906950046",
  appId: "1:841906950046:web:4f8f23328f0208bbda908f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();
